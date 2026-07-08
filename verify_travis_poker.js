const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

const root = __dirname;
const assetsDir = path.join(root, "assets");
const logoAsset = path.join(assetsDir, "pokerrookie-logo.png");
const profileAsset = path.join(assetsDir, "pokerrookie-profile.jpg");
const downloadPromoAsset = path.join(assetsDir, "pokerrookie-download-promo.png");
const sloganAsset = path.join(assetsDir, "sologan.webp");
const bilibiliUrl = "https://space.bilibili.com/443284341?spm_id_from=333.337.0.0";
const contactEmail = "23294069@qq.com";
const wechatId = "liuyao3643";
const inviteCode = "long999";
const kookUrl = "https://kook.vip/cyBSvz";
const logoVersion = crypto.createHash("sha1").update(fs.readFileSync(logoAsset)).digest("hex").slice(0, 8);
const logoSrc = `assets/pokerrookie-logo.png?v=${logoVersion}`;
const pages = {
  "index.html": "PokerRookie｜德州扑克高级实战解析与策略学习",
  "travis-poker.html": "PokerRookie｜德州扑克高级实战解析与策略学习",
  "download.html": "游戏下载｜PokerRookie",
  "free.html": "免费资源｜PokerRookie",
  "about.html": "PokerRookie｜关于我",
  "lab.html": "PokerRookie LAB"
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
assert(fs.existsSync(downloadPromoAsset), "Missing PokerRookie download promo asset");
assert(fs.existsSync(sloganAsset), "Missing PokerRookie hero slogan asset");

for (const [fileName, title] of Object.entries(pages)) {
  const html = read(fileName);
  assert(html.includes("<!doctype html>") || html.includes("<!DOCTYPE html>"), `${fileName} must be a complete document`);
  assert(html.includes(title), `${fileName} title/content must match the reference page`);
  assert(!html.includes("Travis"), `${fileName} must not show the old Travis brand text`);
  assert(html.includes("assets/pokerrookie-logo.png"), `${fileName} must use the PokerRookie logo`);
  assert(html.includes(logoSrc), `${fileName} must use the cache-busted PokerRookie logo`);
  assert(!html.includes('src="assets/pokerrookie-logo.png"'), `${fileName} must not use the unversioned PokerRookie logo path`);
  assert(!html.includes('class="navbar_link lab'), `${fileName} must not show Poker LAB in the nav`);
  assert(!html.includes(">Poker LAB</a>"), `${fileName} must not include the Poker LAB nav link`);
  assert(!html.includes("69d6fb774fb3fe709a3c22ef_1"), `${fileName} must not use the old TravisPoker nav logo`);
  assert(!html.includes("69973e9728086fd6a49a2e06_travispoker-28"), `${fileName} must not use the old TravisPoker footer logo`);
  assert(!html.includes('href="https://www.travispoker.com/download"'), `${fileName} must not route internal download link to remote site`);
  assert(!html.includes('href="https://www.travispoker.com/free"'), `${fileName} must not route internal free link to remote site`);
  assert(!html.includes('href="https://www.travispoker.com/about"'), `${fileName} must not route internal about link to remote site`);
  assert(!html.includes('href="https://www.travispoker.com/lab"'), `${fileName} must not route internal lab link to remote site`);
  assert(!html.includes("text-block-33"), `${fileName} must remove the old footer tagline`);
  assert(!html.includes("Travispoker2020@gmail.com"), `${fileName} must not show the old footer email`);
  assert(!html.includes("travispoker2020@gmail.com"), `${fileName} must not link the old footer email`);
  assert(!html.includes("https://www.youtube.com/@travispoker"), `${fileName} must not show the old YouTube footer link`);
  assert(!html.includes("YouTube"), `${fileName} must not show the old YouTube footer label`);
  assert(!html.includes("\u00a9 2026 Travis Poker"), `${fileName} must not show the old footer copyright`);
  assert(html.includes(contactEmail), `${fileName} must show the new footer email`);
  assert(html.includes(`mailto:${contactEmail}`), `${fileName} must link the new footer email`);
  assert(html.includes("pokerrookie-email-link"), `${fileName} must include the email icon link`);
  assert(html.includes("pokerrookie-email-icon"), `${fileName} must include the email icon`);
  assert(html.includes("pokerrookie-email-label"), `${fileName} must include the email label`);
  assert(html.includes(wechatId), `${fileName} must show the WeChat ID`);
  assert(html.includes("pokerrookie-wechat-copy"), `${fileName} must include the WeChat copy control`);
  assert(html.includes("pokerrookie-wechat-icon"), `${fileName} must include the WeChat icon`);
  assert(html.includes("pokerrookie-wechat-label"), `${fileName} must include the WeChat label`);
  assert(html.includes('script id="pokerrookie-wechat-copy"'), `${fileName} must include the WeChat copy script`);
  assert(html.includes("\u00a9 2026 PokerRookie"), `${fileName} must show the PokerRookie footer copyright`);
}

const home = read("index.html");
assert(home.includes('href="download.html"'), "Home CTA/nav must link to local download page");
assert(home.includes('href="free.html"'), "Home nav must link to local free page");
assert(home.includes('href="about.html"'), "Home nav must link to local about page");
assert(home.includes('href="download.html" class="pokerrookie-hero-title-link w-inline-block"'), "Home hero slogan must link to the download page");
assert(home.includes('src="assets/sologan.webp"'), "Home hero must use the slogan artwork");
assert(home.includes('class="pokerrookie-hero-slogan"'), "Home hero slogan image must include the slogan styling");
assert(home.includes('alt="和PokerRookie一起游戏"'), "Home hero slogan image must include the updated alt text");
assert(!home.includes('class="text-block-40 pokerrookie-hero-title-link'), "Home hero must not use the old text title class");
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
assert(homeMirror.includes('href="download.html" class="pokerrookie-hero-title-link w-inline-block"'), "travis-poker.html hero slogan must link to the download page");
assert(homeMirror.includes('src="assets/sologan.webp"'), "travis-poker.html must use the slogan artwork");
assert(homeMirror.includes(bilibiliUrl), "travis-poker.html must mirror the Bilibili profile link");

const download = read("download.html");
assert(download.includes("https://ggpuke888.com/travispoker"), "Download page must keep the external GG Poker download link");
assert(download.includes('src="assets/pokerrookie-download-promo.png?v=provided-a2da111"'), "Download page must use the cache-busted PokerRookie promo image");
assert(!download.includes('src="assets/pokerrookie-download-promo.png" alt='), "Download page must not use the unversioned cached promo image path");
assert(download.includes("PokerRookie 战队多重福利海报"), "Download page promo image must have the updated alt text");
assert(!download.includes("6a032e7b2e8d4641e876a9c6_Untitled-1.png"), "Download page must not use the old remote event image");
assert(download.includes(kookUrl), "Download page must link to the KOOK group");
assert(!download.includes("https://t.me/travispoker"), "Download page must not keep the old Telegram link");
assert(download.includes("加入KOOK群"), "Download page must show the KOOK group label");
assert(!download.includes("加入 TG 群"), "Download page must remove the old TG group label");
assert(!download.includes("加入飞机群组"), "Download page must remove the old Telegram group heading");
assert(download.includes(inviteCode), "Download page must show the updated invite code");
assert(!download.includes("TRAVISPOKER"), "Download page must remove the old invite code");
assert(download.includes("每月高额保底战队赛免费参与"), "Download page must show the updated first prize box");
assert(download.includes("每月现金奖励上不封顶"), "Download page must show the updated second prize box");
assert(download.includes("新玩家免费送赏金赛门票"), "Download page must show the updated third prize box");
assert(download.includes("gg-prize-label"), "Download page prize boxes must include small labels");
assert(download.includes("赛事权益"), "Download page first prize box must include a small title");
assert(download.includes("现金奖励"), "Download page second prize box must include a small title");
assert(download.includes("新人礼包"), "Download page third prize box must include a small title");
assert(!download.includes("18,888 CNY"), "Download page must remove the old prize amount");
assert(!download.includes("6月13日"), "Download page must remove the old event date");
assert(!download.includes("新人可参加"), "Download page must remove the old event eligibility label");
assert(download.includes("如果你已经下载过游戏，重新注册时必须填写 <strong>long999</strong> 折扣码，才能加入我的战队。"), "Download page must show the updated re-registration copy");
assert(download.includes("1.击中四条及以上牌型可获得一个买入，无限领取"), "Download page must show the updated first benefit rule");
assert(download.includes("2.新用户注册可获赠赏金赛门票"), "Download page must show the updated second benefit rule");
assert(download.includes("3.新用户完成首存再加赠一张门票"), "Download page must show the updated third benefit rule");
assert(!download.includes("四条9+ / 同花顺：送1买入（每月5次）"), "Download page must remove the old first benefit rule");
assert(!download.includes("锦标赛进 FT：送100红包（每月5次）"), "Download page must remove the old second benefit rule");
assert(download.includes("战队福利活动"), "Download page must include the lower benefits section");
assert(download.includes(contactEmail), "Download page must include the updated footer contact section");

const lab = read("lab.html");
assert(lab.includes("https://travispoker.circle.so/checkout/travispoker_tier0?coupon_code=LAB25"), "LAB page must keep the Circle checkout link");

console.log("All PokerRookie multi-page checks passed.");
