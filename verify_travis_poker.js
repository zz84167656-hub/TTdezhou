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
const ggDownloadUrl = "http://playgg8.fun/long999";
const logoVersion = crypto.createHash("sha1").update(fs.readFileSync(logoAsset)).digest("hex").slice(0, 8);
const logoSrc = `assets/pokerrookie-logo.png?v=${logoVersion}`;
const practicalToolLinks = {
  "GTO+": "https://www.gtoplus.com/",
  "PioSolver": "https://piosolver.com/",
  "PokerSnowie": "https://www.pokersnowie.com/",
  "Hand2Note": "https://hand2note.com/",
  "PokerTracker 4": "https://www.pokertracker.com/"
};
const toolImageFiles = [
  "GTO+.webp",
  "PioSolver.webp",
  "ALPHAX.webp",
  "PokerSnowie.webp",
  "Hand2Note.webp",
  "PokerTracker 4.webp"
];
const freeVideoImageFiles = [
  "wsop.webp",
  "HighStakesPoker.webp",
  "Hustler Casino Live.webp",
  "chuanqipuke.webp",
  "PokerRookie.webp"
];
const pages = {
  "index.html": "PokerRookie｜德州扑克高级实战解析与策略学习",
  "travis-poker.html": "PokerRookie｜德州扑克高级实战解析与策略学习",
  "download.html": "游戏下载｜PokerRookie",
  "free.html": "免费资源｜PokerRookie",
  "about.html": "实用工具｜PokerRookie",
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
for (const fileName of toolImageFiles) {
  assert(fs.existsSync(path.join(assetsDir, fileName)), `Missing tools image asset: ${fileName}`);
}
for (const fileName of freeVideoImageFiles) {
  assert(fs.existsSync(path.join(assetsDir, fileName)), `Missing free video image asset: ${fileName}`);
}

for (const [fileName, title] of Object.entries(pages)) {
  const html = read(fileName);
  assert(html.includes("<!doctype html>") || html.includes("<!DOCTYPE html>"), `${fileName} must be a complete document`);
  assert(html.includes(title), `${fileName} title/content must match the reference page`);
  assert(!html.includes("Travis"), `${fileName} must not show the old Travis brand text`);
  assert(html.includes("assets/pokerrookie-logo.png"), `${fileName} must use the PokerRookie logo`);
  assert(html.includes(logoSrc), `${fileName} must use the cache-busted PokerRookie logo`);
  assert(!html.includes('src="assets/pokerrookie-logo.png"'), `${fileName} must not use the unversioned PokerRookie logo path`);
  assert(html.includes("--pokerrookie-font-sans"), `${fileName} must use the unified PokerRookie font stack`);
  assert(html.includes("body *:not(svg):not(path)"), `${fileName} must override mixed Webflow font families`);
  const brandingCss = (html.match(/<style id="pokerrookie-branding">[\s\S]*?<\/style>/) || [""])[0];
  assert(!brandingCss.includes("Instrument Serif"), `${fileName} PokerRookie branding CSS must not use serif display fonts`);
  assert(html.includes(".main-wrapper {\n  border: 0 !important;"), `${fileName} must remove the generated main wrapper border`);
  assert(!html.includes('class="navbar_link lab'), `${fileName} must not show Poker LAB in the nav`);
  assert(!html.includes(">Poker LAB</a>"), `${fileName} must not include the Poker LAB nav link`);
  assert(!html.includes(">关于我</a>"), `${fileName} must not show the old About nav label`);
  assert(html.includes('href="about.html"'), `${fileName} must keep the local tools page link`);
  assert(html.includes(">实用工具</a>"), `${fileName} must show the tools nav label`);
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
assert(home.includes('href="about.html"'), "Home nav must link to local tools page");
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

const free = read("free.html");
assert(free.includes("pokerrookie-video-teaching-embed"), "Free page must include the video teaching module");
assert(free.includes('<div class="w-embed pokerrookie-video-teaching-embed">'), "Free page video teaching module must not use hidden Webflow code-embed class");
assert(free.includes("columns: 2 360px;"), "Free page video cards must use staggered columns instead of empty grid placeholders");
assert(free.includes("break-inside: avoid;"), "Free page video cards must avoid splitting across staggered columns");
assert(free.includes('<div class="pr-video-label">精选视频</div>'), "Free page header label must be selected videos");
assert(!free.includes("精选视频、"), "Free page header label must not include punctuation");
assert(free.includes("aspect-ratio: 49 / 20;"), "Free page PC video covers must use a 49:20 image ratio");
assert(!free.includes("<h2>视频教学</h2>"), "Free page must remove the video teaching headline");
assert(!free.includes("images.unsplash.com"), "Free page must not use remote placeholder video images");
for (const fileName of freeVideoImageFiles) {
  const version = crypto.createHash("sha1").update(fs.readFileSync(path.join(assetsDir, fileName))).digest("hex").slice(0, 8);
  const assetUrl = `assets/${encodeURIComponent(fileName)}?v=${version}`;
  assert(free.includes(assetUrl), `Free page must reference local video image ${fileName}`);
}
assert(!free.includes("preflopchart.netlify.app"), "Free page must remove the old preflop chart iframe block");
assert(!free.includes('<div class="w-embed w-iframe">'), "Free page must remove the old embedded iframe wrapper");
assert(free.includes("WSOP"), "Free page video teaching module must include WSOP");
assert(free.includes("HighStakesPoker"), "Free page video teaching module must include HighStakesPoker");
assert(free.includes("Hustler Casino Live"), "Free page video teaching module must include Hustler Casino Live");
assert(free.includes("传奇扑克"), "Free page video teaching module must include Triton/Poker series");
assert(free.includes("PokerRookie精选"), "Free page video teaching module must include PokerRookie selections");
assert(free.includes("2022WSOP金手链系列赛"), "Free page must include the WSOP list items");
assert(free.includes("PokerRookie的扑克之旅"), "Free page must include the PokerRookie journey list");
assert(free.includes("https://space.bilibili.com/443284341/lists/459974?type=season"), "Free page must include the first WSOP Bilibili list");
assert(free.includes("https://space.bilibili.com/443284341/lists/8204354?type=season"), "Free page must include HighStakesPoker season 16");
assert(free.includes("https://space.bilibili.com/443284341/lists/3090012?type=season"), "Free page must include Hustler million battle S2");
assert(free.includes("https://space.bilibili.com/443284341/lists/7978305?type=season"), "Free page must include 2026 Triton cash game");
assert(free.includes("https://space.bilibili.com/443284341/lists/2566567?type=season"), "Free page must include GG Poker practice");
assert((free.match(/space\.bilibili\.com\/443284341\/lists\//g) || []).length >= 34, "Free page must include all provided video teaching lists");
assert(!free.includes("YOUR_VIDEO_ID"), "Free page must remove the old YouTube placeholder video");
assert(!free.includes("A 高牌面，KK/QQ"), "Free page must remove the old preview lesson module");
assert(!free.includes("内容马上更新"), "Free page must remove the old coming-soon placeholder");
assert(!free.includes("tp-free-coming"), "Free page must remove the old coming-soon card wrapper");
assert(!free.includes("code-embed w-embed pokerrookie-video-teaching-embed"), "Free page video teaching module must not be hidden by code-embed");
assert(!free.includes("pokerrookie-practical-tools-embed"), "Free page must move the practical tools module to the tools page");
assert(!free.includes("GTO+"), "Free page must not keep the practical tools cards");
assert(!free.includes("把图片上的水印处理掉"), "Free page must not show internal watermark-removal notes");
assert(!free.includes("code-embed w-embed pokerrookie-practical-tools-embed"), "Free page tools module must not be hidden by code-embed");

const about = read("about.html");
assert(about.includes("实用工具｜PokerRookie"), "Tools page title must replace the old about title");
assert(about.includes("pokerrookie-practical-tools-embed"), "Tools page must include the practical tools module");
assert(about.includes('<div class="w-embed pokerrookie-practical-tools-embed">'), "Tools page module must not use hidden Webflow code-embed class");
assert(about.includes("实用工具"), "Tools page must show the tools heading");
assert(about.includes("一、实战模拟类：低成本试错神器"), "Tools page must use numbered article-style category headings");
assert(about.includes('>GTO+</a> (付费/专业向)'), "Tools page must use linked numbered tool headings");
assert(about.includes("pr-tool-entry"), "Tools page must use article-style tool entries");
assert(about.includes("pr-tool-name-link"), "Tools page must style linked tool names");
assert(about.includes("pr-tool-name-static"), "Tools page must style unlinked tool names");
assert(about.includes("font: inherit !important;"), "Tools page tool names must inherit the heading font");
assert(!about.includes("font-weight: 950;\n}\n.pr-tool-name-link"), "Tools page tool names must not use a different font weight");
for (const [toolName, toolUrl] of Object.entries(practicalToolLinks)) {
  assert(about.includes(`href="${toolUrl}"`), `Tools page must link ${toolName} to ${toolUrl}`);
}
assert(!about.includes('href=""'), "Tools page must not render empty tool links");
assert(!about.includes(".pr-tool-entry::before"), "Tools page must not show the colored entry side strip");
assert(!about.includes("radial-gradient(circle at 12% 18%"), "Tools page image frame must not use colored gradient backgrounds");
assert(!about.includes("pr-tool-group-number"), "Tools page must not show category number badges");
assert(!about.includes("pr-tool-index"), "Tools page must not show tool number badges");
assert(!about.includes("pr-tool-heading"), "Tools page must not keep the old tool badge wrapper");
assert(about.includes("pr-tool-figure"), "Tools page must include a large figure for each tool");
assert(about.includes("pr-tool-image"), "Tools page must render real local tool images");
assert(about.includes("pr-tool-points"), "Tools page must use bullet-point tool explanations");
assert(about.includes("pr-tool-quote"), "Tools page must style the tool quote line");
for (const fileName of toolImageFiles) {
  assert(about.includes(`assets/${encodeURIComponent(fileName)}`), `Tools page must reference ${fileName}`);
}
assert(about.includes("实战模拟类"), "Tools page must include the simulation tools group");
assert(about.includes("AI训练类"), "Tools page must include the AI training tools group");
assert(about.includes("数据分析类"), "Tools page must include the data analysis tools group");
assert(about.includes("GTO+"), "Tools page must include GTO+");
assert(about.includes("PioSolver"), "Tools page must include PioSolver");
assert(about.includes("ALPHAX"), "Tools page must include ALPHAX");
assert(about.includes("PokerSnowie"), "Tools page must include PokerSnowie");
assert(about.includes("Hand2Note"), "Tools page must include Hand2Note");
assert(about.includes("PokerTracker 4"), "Tools page must include PokerTracker 4");
assert(about.includes("把玄学变成科学"), "Tools page must include the data analysis subtitle");
assert(!about.includes("写给卡在瓶颈期的你"), "Tools page must remove the old about hero");
assert(!about.includes("创始人 | PokerRookie"), "Tools page must remove the old about profile block");
assert(!about.includes("AI时代，扑克玩家需要具备哪些实用工具认知？"), "Tools page must remove the top article intro headline");
assert(!about.includes("pr-article-head"), "Tools page must remove the top article intro block");
assert(!about.includes("pr-article-alert"), "Tools page must remove the top article alert");
assert(!about.includes("pr-article-cover"), "Tools page must remove the top article cover");
assert(!about.includes("assets/poker-tools-cover.svg"), "Tools page must not reference the removed tools cover image");
assert(!about.includes("code-embed w-embed pokerrookie-practical-tools-embed"), "Tools page module must not be hidden by code-embed");
assert(!about.includes("background: #0d1117"), "Tools page must not use the old dark tools design");
assert(!about.includes("pr-tool-card"), "Tools page must not use the old card grid tools design");
assert(!about.includes("pr-directory-head"), "Tools page must not use the old directory header block");
assert(!about.includes("pr-shot-matrix"), "Tools page must not use generated placeholder tool art");
assert(!about.includes("pr-shot-chart"), "Tools page must not use generated placeholder chart art");
assert(!about.includes("把图片上的水印处理掉"), "Tools page must not show internal watermark-removal notes");

const download = read("download.html");
assert(download.includes(ggDownloadUrl), "Download page must use the updated GG Poker download link");
assert(!download.includes("https://ggpuke888.com/travispoker"), "Download page must not keep the old GG Poker download link");
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
