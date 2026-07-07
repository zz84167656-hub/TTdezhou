const fs = require("fs");
const path = require("path");

const root = __dirname;
const assetsDir = path.join(root, "assets");
const logoAsset = path.join(assetsDir, "pokerrookie-logo.png");
const profileAsset = path.join(assetsDir, "pokerrookie-profile.jpg");
const bilibiliUrl = "https://space.bilibili.com/443284341?spm_id_from=333.337.0.0";
const pages = {
  "index.html": "Travis Poker｜德州扑克高级实战解析与策略学习",
  "travis-poker.html": "Travis Poker｜德州扑克高级实战解析与策略学习",
  "download.html": "游戏下载｜Travis Poker",
  "free.html": "免费资源｜Travis Poker",
  "about.html": "Travis Poker｜关于我",
  "lab.html": "Travis Poker LAB"
};

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

function read(fileName) {
  const filePath = path.join(root, fileName);
  assert(fs.existsSync(filePath), `Missing file: ${fileName}`);
  return fs.readFileSync(filePath, "utf8");
}

function findPrdMarkdown() {
  const searchDirs = [path.join(root, "1"), root];
  for (const dir of searchDirs) {
    if (!fs.existsSync(dir)) continue;
    const mdName = fs.readdirSync(dir).find((name) => name.startsWith("01_TravisPoker") && name.endsWith(".md"));
    if (mdName) return path.join(dir, mdName);
  }
  return null;
}

const mdPath = findPrdMarkdown();
assert(mdPath, "Missing Travis Poker PRD markdown file");
const md = fs.readFileSync(mdPath, "utf8");
assert(md.includes("# 控客"), "MD must follow the required header format");
assert(md.includes("Travis Poker - 首页落地页"), "MD must describe the Travis Poker landing page");
assert(md.includes("# 6. 操作逻辑"), "MD must include operation logic");
assert(md.includes("# 13. 验收标准"), "MD must include acceptance criteria");

assert(fs.existsSync(logoAsset), "Missing PokerRookie logo asset");
assert(fs.existsSync(profileAsset), "Missing PokerRookie profile photo asset");

for (const [fileName, title] of Object.entries(pages)) {
  const html = read(fileName);
  assert(html.includes("<!doctype html>") || html.includes("<!DOCTYPE html>"), `${fileName} must be a complete document`);
  assert(html.includes(title), `${fileName} title/content must match the reference page`);
  assert(html.includes("assets/pokerrookie-logo.png"), `${fileName} must use the PokerRookie logo`);
  assert(!html.includes('class="navbar_link lab'), `${fileName} must not show Poker LAB in the nav`);
  assert(!html.includes(">Poker LAB</a>"), `${fileName} must not include the Poker LAB nav link`);
  assert(!html.includes("69d6fb774fb3fe709a3c22ef_1"), `${fileName} must not use the old TravisPoker nav logo`);
  assert(!html.includes("69973e9728086fd6a49a2e06_travispoker-28"), `${fileName} must not use the old TravisPoker footer logo`);
  assert(!html.includes('href="https://www.travispoker.com/download"'), `${fileName} must not route internal download link to remote site`);
  assert(!html.includes('href="https://www.travispoker.com/free"'), `${fileName} must not route internal free link to remote site`);
  assert(!html.includes('href="https://www.travispoker.com/about"'), `${fileName} must not route internal about link to remote site`);
  assert(!html.includes('href="https://www.travispoker.com/lab"'), `${fileName} must not route internal lab link to remote site`);
}

const home = read("index.html");
assert(home.includes('href="download.html"'), "Home CTA/nav must link to local download page");
assert(home.includes('href="free.html"'), "Home nav must link to local free page");
assert(home.includes('href="about.html"'), "Home nav must link to local about page");
assert(home.includes("和PokerRookie一起游戏"), "Home hero title must be updated");
assert(home.includes(bilibiliUrl), "Home must include the PokerRookie Bilibili profile link");
assert(home.includes("pokerrookie-bili-link"), "Home must style the Bilibili profile link");
assert(home.includes("人物介绍"), "Home profile card must include the intro label");
assert(home.includes("PokerRookie"), "Home profile card must include the name");
assert(home.includes("B站知名Up主"), "Home profile card must include the subtitle");
assert(home.includes("国内顶尖德州扑克、奥马哈与混合游戏玩家，拥有APT、GOP、RDPT、KPC等赛事的十余个冠军头衔。"), "Home profile copy must match the provided text");
assert(home.includes("assets/pokerrookie-profile.jpg"), "Home must use the PokerRookie profile photo");
assert(!home.includes('<h1 class="card-title">轻松娱乐</h1>'), "Home must replace the old entertainment card title");
assert(!home.includes("只是随便玩玩的话"), "Home must replace the old entertainment card badge");
assert(!home.includes("玩有趣的扑克牌小游戏"), "Home must replace the old entertainment card body");
assert(!home.includes('<h1 class="card-title">认真提升</h1>'), "Home must remove the improvement card");
assert(!home.includes("研究更多实战分析"), "Home must remove the improvement card button");

const homeMirror = read("travis-poker.html");
assert(homeMirror.includes(bilibiliUrl), "travis-poker.html must mirror the Bilibili profile link");

const download = read("download.html");
assert(download.includes("https://ggpuke888.com/travispoker"), "Download page must keep the external GG Poker download link");
assert(download.includes("https://t.me/travispoker"), "Download page must keep the Telegram link");
assert(download.includes("战队福利活动"), "Download page must include the lower benefits section");
assert(download.includes("四条9+ / 同花顺"), "Download page must include the lower event benefit rules");
assert(download.includes("加入飞机群组"), "Download page must include the lower Telegram group section");
assert(download.includes("Travispoker2020@gmail.com"), "Download page must include the footer contact section");

const lab = read("lab.html");
assert(lab.includes("https://travispoker.circle.so/checkout/travispoker_tier0?coupon_code=LAB25"), "LAB page must keep the Circle checkout link");

console.log("All Travis Poker multi-page checks passed.");
