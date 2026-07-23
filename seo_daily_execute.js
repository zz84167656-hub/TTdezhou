const fs = require("fs");
const path = require("path");

const root = __dirname;
const site = "https://www.pokerrookie.top";
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
    site: process.env.SEO_SITE || config.site || site
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
    "星期一": "选 3 个长尾关键词，确定本周文章标题。优先：德州扑克新手入门、GTO工具、PokerRookie视频教学。",
    "星期二": "新增或完善 1 篇教学文章，例如：德州扑克新手入门：位置、范围和底池赔率。",
    "星期三": "优化旧页面内链：首页增加 2 个入口指向视频教学/实用工具，文章页互相链接。",
    "星期四": "新增或完善 1 篇工具文章，例如：GTO+ 使用教程 或 PioSolver 入门指南。",
    "星期五": "做外链：B站主页简介、视频简介、知乎/公众号/KOOK公告放入 https://www.pokerrookie.top/。",
    "星期六": "新增或完善 1 篇实战复盘文章，例如：河牌该不该诈唬，附关键决策点。",
    "星期日": "复盘数据：记录百度索引量、抓取频次、抓取异常和本周新增页面。"
  };

  return tasks[weekday] || "检查站点健康、提交新增链接、补充 1 个内容入口。";
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
      message: "Missing BAIDU_PUSH_TOKEN or seo_config.local.json baiduPushToken."
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

  const uniqueHealthUrls = [...new Set(healthUrls)];
  const health = [];
  for (const url of uniqueHealthUrls) {
    health.push(await checkUrl(url));
  }

  const robots = await readRemoteText(`${config.site}/robots.txt`);
  const sitemap = await readRemoteText(`${config.site}/sitemap.xml`);
  const sitemapMissing = coreUrls.filter((url) => !sitemap.text.includes(url));
  const robotsHasSitemap = robots.text.includes(`${config.site}/sitemap.xml`);
  const pushResult = await pushToBaidu(config, submitUrls);

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
    `- 提交 URL：`,
    ...submitUrls.map((url) => `  - ${url}`),
    `- 结果：${pushResult.skipped ? pushResult.message : pushResult.raw}`,
    "",
    "## 今日内容任务",
    contentTaskFor(dateParts.weekday),
    "",
    "## 后台手动记录",
    "- 百度索引量：待填",
    "- 抓取频次：待填",
    "- 抓取异常：待填",
    "- 展现/点击关键词：待填",
    ""
  ].join("\n");

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
