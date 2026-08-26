const fs = require("fs");
const path = require("path");

const root = __dirname;
const defaultSite = "https://www.pokerrookie.top";
const configPath = path.join(root, "seo_config.local.json");
const queuePath = path.join(root, "seo_submit_queue.txt");
const coreUrlsPath = path.join(root, "baidu_urls.txt");
const logsDir = path.join(root, "seo_logs");

function readLines(filePath) {
  if (!fs.existsSync(filePath)) return [];
  return fs.readFileSync(filePath, "utf8")
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean)
    .filter((line) => !line.startsWith("#"));
}

function loadConfig() {
  const config = fs.existsSync(configPath)
    ? JSON.parse(fs.readFileSync(configPath, "utf8"))
    : {};

  return {
    baiduPushToken: process.env.BAIDU_PUSH_TOKEN || config.baiduPushToken || "",
    site: process.env.SEO_SITE || config.site || defaultSite
  };
}

function shanghaiDateParts() {
  const formatter = new Intl.DateTimeFormat("zh-CN", {
    timeZone: "Asia/Shanghai",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    weekday: "long",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false
  });

  const parts = Object.fromEntries(formatter.formatToParts(new Date()).map((part) => [part.type, part.value]));
  return {
    date: `${parts.year}-${parts.month}-${parts.day}`,
    weekday: parts.weekday,
    time: `${parts.hour}:${parts.minute}:${parts.second}`
  };
}

function contentTaskFor(weekday) {
  const tasks = {
    星期一: "选定本周主关键词并发布 1 篇牌局叙事或新手问答；没有具体牌例时不发布。",
    星期二: "不强制发布。补充旧文章的原创牌例、图片说明和作者判断，修正模板化段落。",
    星期三: "发布 1 篇视频观察或常见错误评论，开场直接进入争议动作，不写百科式导言。",
    星期四: "发布 1 篇工具手记或对比评测，围绕一次真实任务展开，不罗列完整功能表。",
    星期五: "不强制发布。检查百度抓取、索引和关键词数据，并优化已有文章的标题与内链。",
    星期六: "发布 1 篇深度牌局或赛事观察；保留不确定性，明确个人判断与适用边界。",
    星期日: "整理一周数据与读者问题；必要时发布 1 篇短问答，不为完成数量凑文章。"
  };

  return tasks[weekday] || "按 SEO_EDITORIAL_GUIDE.md 评估是否值得发布，并优先维护已有优质内容。";
}

async function checkUrl(url) {
  const started = Date.now();
  try {
    let response = await fetch(url, { method: "HEAD", redirect: "follow" });
    if (!response.ok && response.status === 405) {
      response = await fetch(url, { method: "GET", redirect: "follow" });
    }

    return {
      url,
      ok: response.ok,
      status: response.status,
      finalUrl: response.url,
      ms: Date.now() - started
    };
  } catch (error) {
    return {
      url,
      ok: false,
      status: "ERROR",
      finalUrl: "",
      ms: Date.now() - started,
      error: error.message
    };
  }
}

async function readRemoteText(url) {
  const response = await fetch(url, { redirect: "follow" });
  return {
    ok: response.ok,
    status: response.status,
    text: await response.text()
  };
}

async function pushToBaidu(config, urls) {
  if (!config.baiduPushToken) {
    return {
      skipped: true,
      message: "缺少 BAIDU_PUSH_TOKEN 或 seo_config.local.json 里的 baiduPushToken。"
    };
  }

  const endpoint = `http://data.zz.baidu.com/urls?site=${config.site}&token=${config.baiduPushToken}`;
  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "text/plain"
    },
    body: `${urls.join("\n")}\n`
  });

  const text = await response.text();
  let parsed = null;
  try {
    parsed = JSON.parse(text);
  } catch {
    parsed = null;
  }

  return {
    skipped: false,
    status: response.status,
    ok: response.ok,
    raw: text,
    parsed
  };
}

function markdownTable(rows) {
  const lines = [
    "| URL | 状态 | 最终地址 | 耗时 |",
    "| --- | --- | --- | --- |"
  ];

  for (const row of rows) {
    lines.push(`| ${row.url} | ${row.ok ? "OK" : "异常"} ${row.status} | ${row.finalUrl || "-"} | ${row.ms}ms |`);
  }

  return lines.join("\n");
}

function pushSucceeded(pushResult, expectedCount) {
  if (pushResult.skipped || !pushResult.ok || !pushResult.parsed) return false;

  const { error, message, success, not_same_site: notSameSite, not_valid: notValid } = pushResult.parsed;
  return !error
    && !message
    && success === expectedCount
    && (!Array.isArray(notSameSite) || notSameSite.length === 0)
    && (!Array.isArray(notValid) || notValid.length === 0);
}

async function main() {
  const config = loadConfig();
  const dateParts = shanghaiDateParts();
  const coreUrls = readLines(coreUrlsPath);
  const queuedUrls = readLines(queuePath);
  const submitUrls = queuedUrls.length ? queuedUrls : coreUrls;
  const healthUrls = [
    config.site,
    `${config.site}/robots.txt`,
    `${config.site}/sitemap.xml`,
    ...coreUrls
  ];

  const health = [];
  for (const url of [...new Set(healthUrls)]) {
    health.push(await checkUrl(url));
  }

  const robots = await readRemoteText(`${config.site}/robots.txt`);
  const sitemap = await readRemoteText(`${config.site}/sitemap.xml`);
  const sitemapMissing = coreUrls.filter((url) => !sitemap.text.includes(url));
  const robotsHasSitemap = robots.text.includes(`${config.site}/sitemap.xml`);
  const pushResult = await pushToBaidu(config, submitUrls);

  const queueSubmitted = queuedUrls.length && pushSucceeded(pushResult, submitUrls.length);
  if (queueSubmitted && fs.existsSync(queuePath)) {
    fs.unlinkSync(queuePath);
  }

  if (!fs.existsSync(logsDir)) fs.mkdirSync(logsDir, { recursive: true });
  const logPath = path.join(logsDir, `${dateParts.date}.md`);
  const log = [
    `# PokerRookie SEO 日报 ${dateParts.date}`,
    "",
    `执行时间：${dateParts.date} ${dateParts.time} ${dateParts.weekday}`,
    "",
    "## 站点健康",
    markdownTable(health),
    "",
    "## Sitemap / Robots",
    `- robots.txt 指向 sitemap：${robotsHasSitemap ? "是" : "否"}`,
    `- sitemap 缺失核心 URL：${sitemapMissing.length ? sitemapMissing.join(", ") : "无"}`,
    "",
    "## 百度 API 推送",
    `- 提交来源：${queuedUrls.length ? "seo_submit_queue.txt" : "baidu_urls.txt"}`,
    `- 提交 URL 数：${submitUrls.length}`,
    "- 提交 URL：",
    ...submitUrls.map((url) => `  - ${url}`),
    `- 结果：${pushResult.skipped ? pushResult.message : pushResult.raw}`,
    queueSubmitted ? "- 队列状态：已提交成功，并清空 seo_submit_queue.txt" : "",
    queuedUrls.length && !queueSubmitted ? "- 队列状态：接口未确认全部 URL 成功，已保留 seo_submit_queue.txt" : "",
    "",
    "## 今日内容任务",
    "- 发布频率：质量优先，默认每周 3–4 篇；当天没有独立价值时允许不发布",
    "- 正文标准：字数和章节按主题决定，连续文章必须更换文体；至少包含具体案例、明确观点、原创图片或差异化建议中的两项",
    "- 禁止模板：不得默认套用使用说明、编号知识点、完整场景、复盘清单、延伸阅读的固定结构",
    contentTaskFor(dateParts.weekday),
    "",
    "## 后台手动记录",
    "- 百度索引量：待填",
    "- 抓取频次：待填",
    "- 抓取异常：待填",
    "- 展现/点击关键词：待填",
    ""
  ].filter(Boolean).join("\n");

  fs.writeFileSync(logPath, log, "utf8");

  console.log(`SEO daily execution complete: ${dateParts.date}`);
  console.log(`Log: ${logPath}`);
  console.log("");
  console.log("Baidu push result:");
  console.log(pushResult.skipped ? pushResult.message : pushResult.raw);
  console.log("");
  console.log("Today content task:");
  console.log(contentTaskFor(dateParts.weekday));

  const failedHealth = health.filter((row) => !row.ok);
  if (failedHealth.length) {
    console.log("");
    console.log("Health warnings:");
    for (const row of failedHealth) {
      console.log(`- ${row.url}: ${row.status} ${row.error || ""}`);
    }
  }

  if (sitemapMissing.length) {
    console.log("");
    console.log("Sitemap missing URLs:");
    for (const url of sitemapMissing) console.log(`- ${url}`);
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
