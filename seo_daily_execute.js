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
    星期一: "发布 2 篇新手基础文章，并选择本周长尾关键词。优先：位置、范围、底池赔率和翻前决策。",
    星期二: "发布 2 篇实战教学文章。优先：翻牌、转牌、河牌的典型决策与复盘。",
    星期三: "发布 1 篇视频复盘文章和 1 篇常见错误文章，同时优化新旧文章之间的内链。",
    星期四: "发布 2 篇工具使用文章。优先：GTO+、PioSolver、PokerSnowie、Hand2Note 和 PokerTracker 4。",
    星期五: "发布 1 篇赛事复盘文章和 1 篇玩家进阶文章，同时在 B站、知乎、公众号或 KOOK 增加网站外链。",
    星期六: "发布 2 篇实战复盘文章，覆盖关键行动线、下注尺度和范围判断。",
    星期日: "发布 1 篇一周学习总结和 1 篇新手问答文章，同时记录百度索引量、抓取频次和异常。"
  };

  return tasks[weekday] || "发布 2 篇可独立收录的 SEO 文章，检查站点健康并提交新增链接。";
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

function pushSucceeded(pushResult) {
  if (pushResult.skipped || !pushResult.ok) return false;
  if (!pushResult.parsed) return true;
  return !pushResult.parsed.error && !pushResult.parsed.message;
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

  if (queuedUrls.length && pushSucceeded(pushResult) && fs.existsSync(queuePath)) {
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
    queuedUrls.length && pushSucceeded(pushResult) ? "- 队列状态：已提交成功，并清空 seo_submit_queue.txt" : "",
    "",
    "## 今日内容任务",
    "- 固定文章数量：2 篇",
    "- 单篇正文标准：1000–2000 个汉字，至少 6 个章节、1 个完整场景和 1 组复盘要点",
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
