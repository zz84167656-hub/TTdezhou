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
const siteBaseUrl = "https://www.pokerrookie.top";
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
  "index.html": "PokerRookie｜德州扑克实战复盘与视频教学",
  "travis-poker.html": "PokerRookie｜德州扑克实战复盘与视频教学",
  "download.html": "PokerRookie 游戏下载｜long999 邀请码与战队福利",
  "free.html": "视频教学｜PokerRookie 德州扑克实战复盘合集",
  "daily.html": "每日分享｜PokerRookie 德州扑克学习文章",
  "about.html": "实用工具｜PokerRookie 德州扑克 GTO 与数据分析工具",
  "lab.html": "PokerRookie LAB｜会员社群"
};
const seoPaths = {
  "index.html": "/",
  "download.html": "/download.html",
  "free.html": "/free.html",
  "daily.html": "/daily.html",
  "about.html": "/about.html"
};
const gtoArticlePath = "articles/gto-plus-guide/index.html";
const gtoArticleUrl = `${siteBaseUrl}/articles/gto-plus-guide/`;
const pioArticlePath = "articles/piosolver-guide/index.html";
const pioArticleUrl = `${siteBaseUrl}/articles/piosolver-guide/`;
const beginnerArticlePath = "articles/poker-position-range-pot-odds/index.html";
const beginnerArticleUrl = `${siteBaseUrl}/articles/poker-position-range-pot-odds/`;
const turnArticlePath = "articles/turn-card-leaks/index.html";
const turnArticleUrl = `${siteBaseUrl}/articles/turn-card-leaks/`;
const finalTableArticlePath = "articles/final-table-review/index.html";
const finalTableArticleUrl = `${siteBaseUrl}/articles/final-table-review/`;
const rangeArticlePath = "articles/range-reading-advanced/index.html";
const rangeArticleUrl = `${siteBaseUrl}/articles/range-reading-advanced/`;
const preflopArticlePath = "articles/preflop-opening-ranges/index.html";
const preflopArticleUrl = `${siteBaseUrl}/articles/preflop-opening-ranges/`;
const sizingArticlePath = "articles/bet-sizing-basics/index.html";
const sizingArticleUrl = `${siteBaseUrl}/articles/bet-sizing-basics/`;
const flopArticlePath = "articles/flop-cbet-mistakes/index.html";
const flopArticleUrl = `${siteBaseUrl}/articles/flop-cbet-mistakes/`;
const riverArticlePath = "articles/river-bluff-catching/index.html";
const riverArticleUrl = `${siteBaseUrl}/articles/river-bluff-catching/`;
const videoReviewArticlePath = "articles/poker-video-review-method/index.html";
const videoReviewArticleUrl = `${siteBaseUrl}/articles/poker-video-review-method/`;
const threeBetArticlePath = "articles/three-bet-pot-mistakes/index.html";
const threeBetArticleUrl = `${siteBaseUrl}/articles/three-bet-pot-mistakes/`;
const articleCss = read("assets/article.css");

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

function countMainChineseCharacters(html) {
  const main = html.match(/<main[\s\S]*?<\/main>/i)?.[0] || "";
  return (main.match(/[\u3400-\u4dbf\u4e00-\u9fff]/g) || []).length;
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

const robots = read("robots.txt");
const sitemap = read("sitemap.xml");
const baiduUrls = read("baidu_urls.txt");
assert(robots.includes("User-agent: *"), "robots.txt must allow crawlers");
assert(robots.includes(`Sitemap: ${siteBaseUrl}/sitemap.xml`), "robots.txt must point to the public sitemap");
assert(sitemap.includes('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'), "sitemap.xml must use the sitemap protocol");
for (const [fileName, pagePath] of Object.entries(seoPaths)) {
  const url = pagePath === "/" ? `${siteBaseUrl}/` : `${siteBaseUrl}${pagePath}`;
  assert(sitemap.includes(`<loc>${url}</loc>`), `sitemap.xml must include ${fileName}`);
  assert(baiduUrls.includes(url), `baidu_urls.txt must include ${fileName}`);
}
assert(sitemap.includes(`<loc>${gtoArticleUrl}</loc>`), "sitemap.xml must include the GTO+ guide article");
assert(baiduUrls.includes(gtoArticleUrl), "baidu_urls.txt must include the GTO+ guide article");
assert(sitemap.includes(`<loc>${pioArticleUrl}</loc>`), "sitemap.xml must include the PioSolver guide article");
assert(baiduUrls.includes(pioArticleUrl), "baidu_urls.txt must include the PioSolver guide article");
assert(sitemap.includes(`<loc>${beginnerArticleUrl}</loc>`), "sitemap.xml must include the beginner guide article");
assert(baiduUrls.includes(beginnerArticleUrl), "baidu_urls.txt must include the beginner guide article");
assert(sitemap.includes(`<loc>${turnArticleUrl}</loc>`), "sitemap.xml must include the turn strategy article");
assert(baiduUrls.includes(turnArticleUrl), "baidu_urls.txt must include the turn strategy article");
assert(sitemap.includes(`<loc>${finalTableArticleUrl}</loc>`), "sitemap.xml must include the final table article");
assert(baiduUrls.includes(finalTableArticleUrl), "baidu_urls.txt must include the final table article");
assert(sitemap.includes(`<loc>${rangeArticleUrl}</loc>`), "sitemap.xml must include the range reading article");
assert(baiduUrls.includes(rangeArticleUrl), "baidu_urls.txt must include the range reading article");
assert(sitemap.includes(`<loc>${preflopArticleUrl}</loc>`), "sitemap.xml must include the preflop ranges article");
assert(baiduUrls.includes(preflopArticleUrl), "baidu_urls.txt must include the preflop ranges article");
assert(sitemap.includes(`<loc>${sizingArticleUrl}</loc>`), "sitemap.xml must include the bet sizing article");
assert(baiduUrls.includes(sizingArticleUrl), "baidu_urls.txt must include the bet sizing article");
assert(sitemap.includes(`<loc>${flopArticleUrl}</loc>`), "sitemap.xml must include the flop c-bet article");
assert(baiduUrls.includes(flopArticleUrl), "baidu_urls.txt must include the flop c-bet article");
assert(sitemap.includes(`<loc>${riverArticleUrl}</loc>`), "sitemap.xml must include the river bluff-catching article");
assert(baiduUrls.includes(riverArticleUrl), "baidu_urls.txt must include the river bluff-catching article");
assert(sitemap.includes(`<loc>${videoReviewArticleUrl}</loc>`), "sitemap.xml must include the video review article");
assert(baiduUrls.includes(videoReviewArticleUrl), "baidu_urls.txt must include the video review article");
assert(sitemap.includes(`<loc>${threeBetArticleUrl}</loc>`), "sitemap.xml must include the 3-bet article");
assert(baiduUrls.includes(threeBetArticleUrl), "baidu_urls.txt must include the 3-bet article");
assert(!sitemap.includes("travis-poker.html"), "sitemap.xml must not include the duplicate home mirror");
assert(!sitemap.includes("lab.html"), "sitemap.xml must not include the hidden LAB page");

for (const [fileName, title] of Object.entries(pages)) {
  const html = read(fileName);
  const seoPath = seoPaths[fileName] || "/";
  const canonicalUrl = seoPath === "/" ? `${siteBaseUrl}/` : `${siteBaseUrl}${seoPath}`;
  const expectedRobots = seoPaths[fileName] ? "index,follow" : "noindex,follow";
  assert(html.includes("<!doctype html>") || html.includes("<!DOCTYPE html>"), `${fileName} must be a complete document`);
  assert(html.includes(title), `${fileName} title/content must match the reference page`);
  assert(html.includes(`<link rel="canonical" href="${canonicalUrl}"/>`), `${fileName} must use the PokerRookie canonical URL`);
  assert(!html.includes('rel="canonical" href="https://travispoker.com'), `${fileName} must not point canonical metadata to the old Travis domain`);
  assert(!html.includes('property="og:url" content="https://travispoker.com'), `${fileName} must not point Open Graph metadata to the old Travis domain`);
  assert(html.includes(`<meta name="robots" content="${expectedRobots}"/>`), `${fileName} must declare the expected robots directive`);
  assert(html.includes('<meta name="applicable-device" content="pc,mobile"/>'), `${fileName} must declare Baidu-friendly device support`);
  assert(html.includes('<meta http-equiv="Cache-Control" content="no-transform"/>'), `${fileName} must discourage mobile page transcoding`);
  assert(html.includes(`<meta property="og:url" content="${canonicalUrl}"/>`), `${fileName} must expose the canonical Open Graph URL`);
  assert(html.includes('<meta property="og:site_name" content="PokerRookie"/>'), `${fileName} must expose the PokerRookie site name`);
  assert(html.includes(`<meta property="og:image" content="${siteBaseUrl}/assets/pokerrookie-logo.png"/>`), `${fileName} must use the public PokerRookie sharing image`);
  assert(html.includes(`<meta name="twitter:image" content="${siteBaseUrl}/assets/pokerrookie-logo.png"/>`), `${fileName} must use the public Twitter sharing image`);
  assert(html.includes('id="pokerrookie-seo-jsonld"'), `${fileName} must include PokerRookie structured data`);
  assert(!html.includes("Create refined, responsive"), `${fileName} must remove the old template structured data`);
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
  assert(!html.includes(">免费资源</a>"), `${fileName} must not show the old free resources nav label`);
  assert(html.includes('href="about.html"'), `${fileName} must keep the local tools page link`);
  assert(html.includes(">实用工具</a>"), `${fileName} must show the tools nav label`);
  assert(html.includes('href="free.html"'), `${fileName} must keep the local video teaching page link`);
  assert(html.includes(">视频教学</a>"), `${fileName} must show the video teaching nav label`);
  assert(html.includes('href="daily.html"'), `${fileName} must keep the local daily sharing page link`);
  assert(html.includes(">每日分享</a>"), `${fileName} must show the daily sharing nav label`);
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
  assert(html.includes(".footer .div-block-27 {\n  display: flex !important;"), `${fileName} must use horizontal footer layout`);
  assert(html.includes("flex-direction: row !important;"), `${fileName} must lay footer contact items horizontally on desktop`);
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
assert(home.includes(`href="${bilibiliUrl}" target="_blank" rel="noopener"`), "Home Bilibili CTA must open as a safe external link");
assert(home.includes("人物介绍"), "Home profile card must include the intro label");
assert(home.includes("PokerRookie"), "Home profile card must include the name");
assert(home.includes("B站知名Up主"), "Home profile card must include the subtitle");
assert(home.includes("国内顶尖德州扑克、奥马哈与混合游戏玩家，拥有APT、GOP、RDPT、KPC等赛事的十余个冠军头衔。"), "Home profile copy must match the provided text");
assert(home.includes("assets/pokerrookie-profile.jpg"), "Home must use the PokerRookie profile photo");
assert(home.includes('id="pokerrookie-home-articles-title"'), "Home must include the strategy article section");
assert(home.includes("从翻前范围到河牌决策"), "Home article section must include its heading");
assert(home.includes('"@id":"https://www.pokerrookie.top/#articles"'), "Home structured data must include the article ItemList");
assert((home.match(/class="pokerrookie-home-article-item"/g) || []).length === 12, "Home must list all 12 strategy articles exactly once");
for (const articleHref of [
  "articles/gto-plus-guide/",
  "articles/piosolver-guide/",
  "articles/poker-position-range-pot-odds/",
  "articles/turn-card-leaks/",
  "articles/final-table-review/",
  "articles/range-reading-advanced/",
  "articles/preflop-opening-ranges/",
  "articles/bet-sizing-basics/",
  "articles/flop-cbet-mistakes/",
  "articles/river-bluff-catching/",
  "articles/poker-video-review-method/",
  "articles/three-bet-pot-mistakes/"
]) {
  assert(home.includes(`href="${articleHref}"`), `Home must link to ${articleHref}`);
}
assert(home.indexOf('href="articles/three-bet-pot-mistakes/"') < home.indexOf('href="articles/river-bluff-catching/"'), "Home must show the newest article first");
assert(!home.includes('<h1 class="card-title">轻松娱乐</h1>'), "Home must replace the old entertainment card title");
assert(!home.includes("只是随便玩玩的话"), "Home must replace the old entertainment card badge");
assert(!home.includes("玩有趣的扑克牌小游戏"), "Home must replace the old entertainment card body");
assert(!home.includes('<h1 class="card-title">认真提升</h1>'), "Home must remove the improvement card");
assert(!home.includes("研究更多实战分析"), "Home must remove the improvement card button");

const homeMirror = read("travis-poker.html");
assert(homeMirror.includes('href="download.html" class="pokerrookie-hero-title-link w-inline-block"'), "travis-poker.html hero slogan must link to the download page");
assert(homeMirror.includes('src="assets/sologan.webp"'), "travis-poker.html must use the slogan artwork");
assert(homeMirror.includes(bilibiliUrl), "travis-poker.html must mirror the Bilibili profile link");
assert(homeMirror.includes(`href="${bilibiliUrl}" target="_blank" rel="noopener"`), "travis-poker.html Bilibili CTA must open as a safe external link");
assert((homeMirror.match(/class="pokerrookie-home-article-item"/g) || []).length === 12, "travis-poker.html must mirror all strategy articles");
assert(homeMirror.includes('"@id":"https://www.pokerrookie.top/#articles"'), "travis-poker.html structured data must include the article ItemList");

const daily = read("daily.html");
assert(daily.includes('class="pokerrookie-daily-sharing"'), "Daily page must include the daily sharing interface");
assert(daily.includes('id="pokerrookie-daily-title"'), "Daily page must expose an accessible page heading");
assert(daily.includes("每天两篇，持续积累"), "Daily page must include the daily publishing message");
assert(daily.includes("2026年8月5日"), "Daily page must show the latest publishing date");
assert(daily.includes("2026年7月23日"), "Daily page must show the earliest publishing date");
assert((daily.match(/class="pokerrookie-daily-group"/g) || []).length === 7, "Daily page must group articles under all 7 publishing dates");
assert((daily.match(/class="pokerrookie-daily-article"/g) || []).length === 12, "Daily page must list all 12 strategy articles exactly once");
assert(daily.indexOf('href="articles/three-bet-pot-mistakes/"') < daily.indexOf('href="articles/gto-plus-guide/"'), "Daily page must order articles from newest to oldest");
assert(daily.includes('"@id":"https://www.pokerrookie.top/daily.html#daily-articles"'), "Daily page structured data must include the article ItemList");
assert(daily.includes('href="daily.html" aria-current="page"'), "Daily page nav must mark Daily Sharing as current");

const free = read("free.html");
assert(free.includes("<title>视频教学｜PokerRookie 德州扑克实战复盘合集</title>"), "Free page title must be renamed to video teaching");
assert(free.includes("pokerrookie-video-teaching-embed"), "Free page must include the video teaching module");
assert(free.includes('<div class="w-embed pokerrookie-video-teaching-embed">'), "Free page video teaching module must not use hidden Webflow code-embed class");
assert(free.includes("columns: 2 360px;"), "Free page video cards must use staggered columns instead of empty grid placeholders");
assert(free.includes("break-inside: avoid;"), "Free page video cards must avoid splitting across staggered columns");
assert(free.includes('<div class="pr-video-label">视频教学</div>'), "Free page header label must be video teaching");
assert(!free.includes('<div class="pr-video-label">精选视频</div>'), "Free page header label must not keep selected videos");
assert(!free.includes("精选视频、"), "Free page header label must not include punctuation");
assert(free.includes("pr-free-download-float"), "Free page must include the floating download address CTA");
assert(free.includes(`class="pr-free-download-float" href="${ggDownloadUrl}" target="_blank" rel="noopener"`), "Free page floating download CTA must match the main download URL");
assert(free.includes('aria-label="下载游戏"'), "Free page floating download CTA must keep the download game label");
assert(free.includes("pr-free-download-icon"), "Free page floating download CTA must use a compact icon");
assert(free.includes('<span class="pr-free-download-text">下载游戏</span>'), "Free page floating download CTA must keep the hover label");
assert(free.includes("width: 56px;"), "Free page floating download CTA must be compact on desktop");
assert(free.includes("height: 56px;"), "Free page floating download CTA must be compact on desktop");
assert(!free.includes("min-height: 150px;"), "Free page floating download CTA must not keep the oversized vertical button");
assert(!free.includes(">下载地址</a>"), "Free page floating download CTA must not keep the old label");
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
assert(free.indexOf("PokerRookie精选") < free.indexOf("WSOP"), "Free page must place PokerRookie selections before WSOP");
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

const gtoArticle = read(gtoArticlePath);
assert(gtoArticle.includes("<title>GTO+ 使用教程｜德州扑克复盘工具入门 - PokerRookie</title>"), "GTO+ article must use the SEO title");
assert(gtoArticle.includes(`<link rel="canonical" href="${gtoArticleUrl}">`), "GTO+ article must use the canonical article URL");
assert(gtoArticle.includes('<meta name="robots" content="index,follow">'), "GTO+ article must be indexable");
assert(gtoArticle.includes('<meta name="applicable-device" content="pc,mobile">'), "GTO+ article must declare Baidu-friendly device support");
assert(gtoArticle.includes('id="pokerrookie-seo-jsonld"'), "GTO+ article must include structured data");
assert(gtoArticle.includes("GTO+ 使用教程：用复盘工具看懂每一手牌"), "GTO+ article must include the article headline");
assert(gtoArticle.includes("../../assets/GTO%2B.webp"), "GTO+ article must use the local GTO+ image");
assert(gtoArticle.includes('href="../../free.html"'), "GTO+ article must link to video teaching");
assert(gtoArticle.includes('href="../../about.html"'), "GTO+ article must link to practical tools");
assert(gtoArticle.includes('href="../../download.html"'), "GTO+ article must link to download page");
assert(gtoArticle.includes('href="../piosolver-guide/"'), "GTO+ article must link to the PioSolver guide");
assert(gtoArticle.includes('href="../poker-position-range-pot-odds/"'), "GTO+ article must link to the beginner guide");
assert(gtoArticle.includes('href="../turn-card-leaks/"'), "GTO+ article must link to the turn strategy guide");
assert(gtoArticle.includes('href="https://www.gtoplus.com/" target="_blank" rel="noopener"'), "GTO+ article must link safely to the GTO+ website");

const pioArticle = read(pioArticlePath);
assert(pioArticle.includes("<title>PioSolver 入门指南｜德州扑克求解器训练方法 - PokerRookie</title>"), "PioSolver article must use the SEO title");
assert(pioArticle.includes(`<link rel="canonical" href="${pioArticleUrl}">`), "PioSolver article must use the canonical article URL");
assert(pioArticle.includes('<meta name="robots" content="index,follow">'), "PioSolver article must be indexable");
assert(pioArticle.includes('<meta name="applicable-device" content="pc,mobile">'), "PioSolver article must declare Baidu-friendly device support");
assert(pioArticle.includes('id="pokerrookie-seo-jsonld"'), "PioSolver article must include structured data");
assert(pioArticle.includes("PioSolver 入门指南：把复杂牌局拆成可训练的决策"), "PioSolver article must include the article headline");
assert(pioArticle.includes("../../assets/PioSolver.webp"), "PioSolver article must use the local PioSolver image");
assert(pioArticle.includes('href="../gto-plus-guide/"'), "PioSolver article must link to the GTO+ guide");
assert(pioArticle.includes('href="../../free.html"'), "PioSolver article must link to video teaching");
assert(pioArticle.includes('href="../../about.html"'), "PioSolver article must link to practical tools");
assert(pioArticle.includes('href="../../download.html"'), "PioSolver article must link to download page");
assert(pioArticle.includes('href="../poker-position-range-pot-odds/"'), "PioSolver article must link to the beginner guide");
assert(pioArticle.includes('href="../turn-card-leaks/"'), "PioSolver article must link to the turn strategy guide");
assert(pioArticle.includes('href="https://piosolver.com/" target="_blank" rel="noopener"'), "PioSolver article must link safely to the PioSolver website");

const beginnerArticle = read(beginnerArticlePath);
assert(beginnerArticle.includes("<title>德州扑克新手入门｜位置、范围和底池赔率 - PokerRookie</title>"), "Beginner article must use the SEO title");
assert(beginnerArticle.includes(`<link rel="canonical" href="${beginnerArticleUrl}">`), "Beginner article must use the canonical article URL");
assert(beginnerArticle.includes('<meta name="robots" content="index,follow">'), "Beginner article must be indexable");
assert(beginnerArticle.includes('<meta name="applicable-device" content="pc,mobile">'), "Beginner article must declare Baidu-friendly device support");
assert(beginnerArticle.includes('id="pokerrookie-seo-jsonld"'), "Beginner article must include structured data");
assert(beginnerArticle.includes("德州扑克新手入门：先理解位置、范围和底池赔率"), "Beginner article must include the article headline");
assert(beginnerArticle.includes("../../assets/PokerRookie.webp"), "Beginner article must use the local PokerRookie image");
assert(beginnerArticle.includes("位置优势"), "Beginner article must cover position advantage");
assert(beginnerArticle.includes("起手牌范围"), "Beginner article must cover starting hand ranges");
assert(beginnerArticle.includes("底池赔率"), "Beginner article must cover pot odds");
assert(beginnerArticle.includes('href="../gto-plus-guide/"'), "Beginner article must link to the GTO+ guide");
assert(beginnerArticle.includes('href="../piosolver-guide/"'), "Beginner article must link to the PioSolver guide");
assert(beginnerArticle.includes('href="../turn-card-leaks/"'), "Beginner article must link to the turn strategy guide");
assert(beginnerArticle.includes('href="../../free.html"'), "Beginner article must link to video teaching");
assert(beginnerArticle.includes('href="../../about.html"'), "Beginner article must link to practical tools");
assert(beginnerArticle.includes('href="../../download.html"'), "Beginner article must link to download page");
assert(beginnerArticle.includes('href="../preflop-opening-ranges/"'), "Beginner article must link to the preflop ranges guide");
assert(beginnerArticle.includes('href="../bet-sizing-basics/"'), "Beginner article must link to the bet sizing guide");

const turnArticle = read(turnArticlePath);
assert(turnArticle.includes("<title>德州扑克转牌常见错误｜减少翻后持续亏损 - PokerRookie</title>"), "Turn article must use the SEO title");
assert(turnArticle.includes(`<link rel="canonical" href="${turnArticleUrl}">`), "Turn article must use the canonical article URL");
assert(turnArticle.includes('<meta name="robots" content="index,follow">'), "Turn article must be indexable");
assert(turnArticle.includes('<meta name="applicable-device" content="pc,mobile">'), "Turn article must declare Baidu-friendly device support");
assert(turnArticle.includes('id="pokerrookie-seo-jsonld"'), "Turn article must include structured data");
assert(turnArticle.includes("德州扑克转牌常见错误：为什么很多亏损发生在第二枪"), "Turn article must include the article headline");
assert(turnArticle.includes("../../assets/PokerRookie.webp"), "Turn article must use the local PokerRookie image");
assert(turnArticle.includes("自动持续下注"), "Turn article must cover automatic continuation betting");
assert(turnArticle.includes("河牌计划"), "Turn article must cover river planning");
assert(turnArticle.includes('href="../poker-position-range-pot-odds/"'), "Turn article must link to the beginner guide");
assert(turnArticle.includes('href="../gto-plus-guide/"'), "Turn article must link to the GTO+ guide");
assert(turnArticle.includes('href="../piosolver-guide/"'), "Turn article must link to the PioSolver guide");
assert(turnArticle.includes('href="../../free.html"'), "Turn article must link to video teaching");
assert(turnArticle.includes('href="../../about.html"'), "Turn article must link to practical tools");
assert(turnArticle.includes('href="../../download.html"'), "Turn article must link to download page");
assert(turnArticle.includes('href="../final-table-review/"'), "Turn article must link to the final table guide");
assert(turnArticle.includes('href="../range-reading-advanced/"'), "Turn article must link to the range reading guide");
assert(turnArticle.includes('href="../bet-sizing-basics/"'), "Turn article must link to the bet sizing guide");
assert(turnArticle.includes('href="../river-bluff-catching/"'), "Turn article must link to the river bluff-catching guide");

const finalTableArticle = read(finalTableArticlePath);
assert(finalTableArticle.includes("<title>德州扑克锦标赛决赛桌复盘｜ICM、筹码压力与位置 - PokerRookie</title>"), "Final table article must use the SEO title");
assert(finalTableArticle.includes(`<link rel="canonical" href="${finalTableArticleUrl}">`), "Final table article must use the canonical URL");
assert(finalTableArticle.includes('<meta name="robots" content="index,follow">'), "Final table article must be indexable");
assert(finalTableArticle.includes('id="pokerrookie-seo-jsonld"'), "Final table article must include structured data");
assert(finalTableArticle.includes("德州扑克锦标赛决赛桌复盘：ICM、筹码压力与位置"), "Final table article must include the headline");
assert(finalTableArticle.includes("../../assets/wsop.webp"), "Final table article must use the WSOP image");
assert(finalTableArticle.includes("有效筹码"), "Final table article must cover effective stacks");
assert(finalTableArticle.includes("ICM"), "Final table article must cover ICM");
assert(finalTableArticle.includes('href="../range-reading-advanced/"'), "Final table article must link to the range reading guide");
assert(finalTableArticle.includes('href="../poker-position-range-pot-odds/"'), "Final table article must link to the beginner guide");
assert(finalTableArticle.includes('href="../../free.html"'), "Final table article must link to video teaching");

const rangeArticle = read(rangeArticlePath);
assert(rangeArticle.includes("<title>德州扑克范围阅读进阶｜从行动线判断组合 - PokerRookie</title>"), "Range article must use the SEO title");
assert(rangeArticle.includes(`<link rel="canonical" href="${rangeArticleUrl}">`), "Range article must use the canonical URL");
assert(rangeArticle.includes('<meta name="robots" content="index,follow">'), "Range article must be indexable");
assert(rangeArticle.includes('id="pokerrookie-seo-jsonld"'), "Range article must include structured data");
assert(rangeArticle.includes("德州扑克范围阅读进阶：从行动线判断对手组合"), "Range article must include the headline");
assert(rangeArticle.includes("../../assets/PokerRookie.webp"), "Range article must use the local PokerRookie image");
assert(rangeArticle.includes("下注尺度"), "Range article must cover bet sizing");
assert(rangeArticle.includes("阻断牌"), "Range article must cover blockers");
assert(rangeArticle.includes('href="../final-table-review/"'), "Range article must link to the final table guide");
assert(rangeArticle.includes('href="../poker-position-range-pot-odds/"'), "Range article must link to the beginner guide");
assert(rangeArticle.includes('href="../../about.html"'), "Range article must link to practical tools");
assert(rangeArticle.includes('href="../preflop-opening-ranges/"'), "Range article must link to the preflop ranges guide");
assert(rangeArticle.includes('href="../flop-cbet-mistakes/"'), "Range article must link to the flop c-bet guide");
assert(rangeArticle.includes('href="../river-bluff-catching/"'), "Range article must link to the river bluff-catching guide");

const preflopArticle = read(preflopArticlePath);
assert(articleCss.includes("--article-font"), "Shared article CSS must define the standard article font");
assert(preflopArticle.includes('<link rel="stylesheet" href="../../assets/article.css?v='), "Preflop article must use the cache-busted shared article CSS");
assert(preflopArticle.includes("<title>德州扑克翻前开池范围｜不同位置怎么调整 - PokerRookie</title>"), "Preflop article must use the SEO title");
assert(preflopArticle.includes(`<link rel="canonical" href="${preflopArticleUrl}">`), "Preflop article must use the canonical URL");
assert(preflopArticle.includes('<meta name="robots" content="index,follow">'), "Preflop article must be indexable");
assert(preflopArticle.includes('id="pokerrookie-seo-jsonld"'), "Preflop article must include structured data");
assert(preflopArticle.includes("德州扑克翻前开池范围：不同位置应该怎么调整"), "Preflop article must include the headline");
assert(preflopArticle.includes("../../assets/PokerRookie.webp"), "Preflop article must use the PokerRookie image");
assert(preflopArticle.includes("前位"), "Preflop article must cover early position");
assert(preflopArticle.includes("按钮位"), "Preflop article must cover the button");
assert(preflopArticle.includes('href="../bet-sizing-basics/"'), "Preflop article must link to the bet sizing guide");
assert(preflopArticle.includes('href="../poker-position-range-pot-odds/"'), "Preflop article must link to the beginner guide");
assert(preflopArticle.includes('href="../../free.html"'), "Preflop article must link to video teaching");

const sizingArticle = read(sizingArticlePath);
assert(sizingArticle.includes('<link rel="stylesheet" href="../../assets/article.css?v='), "Sizing article must use the cache-busted shared article CSS");
assert(sizingArticle.includes("<title>德州扑克下注尺度入门｜小注、中注与大注怎么选 - PokerRookie</title>"), "Sizing article must use the SEO title");
assert(sizingArticle.includes(`<link rel="canonical" href="${sizingArticleUrl}">`), "Sizing article must use the canonical URL");
assert(sizingArticle.includes('<meta name="robots" content="index,follow">'), "Sizing article must be indexable");
assert(sizingArticle.includes('id="pokerrookie-seo-jsonld"'), "Sizing article must include structured data");
assert(sizingArticle.includes("德州扑克下注尺度入门：小注、中注与大注怎么选"), "Sizing article must include the headline");
assert(sizingArticle.includes("../../assets/HighStakesPoker.webp"), "Sizing article must use the local poker image");
assert(sizingArticle.includes("范围优势"), "Sizing article must cover range advantage");
assert(sizingArticle.includes("底池"), "Sizing article must cover pot-relative sizing");
assert(sizingArticle.includes('href="../preflop-opening-ranges/"'), "Sizing article must link to the preflop ranges guide");
assert(sizingArticle.includes('href="../turn-card-leaks/"'), "Sizing article must link to the turn strategy guide");
assert(sizingArticle.includes('href="../../about.html"'), "Sizing article must link to practical tools");
assert(sizingArticle.includes('href="../flop-cbet-mistakes/"'), "Sizing article must link to the flop c-bet guide");

for (const [label, article] of [
  ["GTO+", gtoArticle],
  ["PioSolver", pioArticle],
  ["Beginner", beginnerArticle],
  ["Turn", turnArticle],
  ["Final table", finalTableArticle],
  ["Range", rangeArticle],
  ["Preflop", preflopArticle],
  ["Sizing", sizingArticle]
]) {
  const chineseCharacters = countMainChineseCharacters(article);
  assert(chineseCharacters >= 500, `${label} article must contain at least 500 Chinese characters in main content`);
  assert(chineseCharacters <= 1000, `${label} article must contain no more than 1000 Chinese characters in main content`);
}

const flopArticle = read(flopArticlePath);
assert(flopArticle.includes("<title>德州扑克翻牌持续下注常见错误｜C-bet 什么时候该停 - PokerRookie</title>"), "Flop article must use the SEO title");
assert(flopArticle.includes(`<link rel="canonical" href="${flopArticleUrl}">`), "Flop article must use the canonical URL");
assert(flopArticle.includes('<meta name="robots" content="index,follow">'), "Flop article must be indexable");
assert(flopArticle.includes('id="pokerrookie-seo-jsonld"'), "Flop article must include structured data");
assert(flopArticle.includes("德州扑克翻牌持续下注常见错误：C-bet 什么时候该停"), "Flop article must include the headline");
assert(flopArticle.includes("../../assets/Hustler%20Casino%20Live.webp"), "Flop article must use the local cash-game image");
assert(flopArticle.includes("范围优势"), "Flop article must cover range advantage");
assert(flopArticle.includes("坚果优势"), "Flop article must cover nut advantage");
assert(flopArticle.includes("完整场景"), "Flop article must include a complete scenario");
assert(flopArticle.includes('href="../river-bluff-catching/"'), "Flop article must link to the river guide");
assert(flopArticle.includes('href="../bet-sizing-basics/"'), "Flop article must link to the sizing guide");

const riverArticle = read(riverArticlePath);
assert(riverArticle.includes("<title>德州扑克河牌抓诈唬指南｜如何判断该不该跟注 - PokerRookie</title>"), "River article must use the SEO title");
assert(riverArticle.includes(`<link rel="canonical" href="${riverArticleUrl}">`), "River article must use the canonical URL");
assert(riverArticle.includes('<meta name="robots" content="index,follow">'), "River article must be indexable");
assert(riverArticle.includes('id="pokerrookie-seo-jsonld"'), "River article must include structured data");
assert(riverArticle.includes("德州扑克河牌抓诈唬指南：如何判断该不该跟注"), "River article must include the headline");
assert(riverArticle.includes("../../assets/chuanqipuke.webp"), "River article must use the local poker image");
assert(riverArticle.includes("底池赔率"), "River article must cover pot odds");
assert(riverArticle.includes("阻断牌"), "River article must cover blockers");
assert(riverArticle.includes("完整场景"), "River article must include a complete scenario");
assert(riverArticle.includes('href="../flop-cbet-mistakes/"'), "River article must link to the flop guide");
assert(riverArticle.includes('href="../range-reading-advanced/"'), "River article must link to the range guide");

for (const [label, article] of [
  ["Flop c-bet", flopArticle],
  ["River bluff-catching", riverArticle]
]) {
  const chineseCharacters = countMainChineseCharacters(article);
  assert(chineseCharacters >= 1000, `${label} article must contain at least 1000 Chinese characters in main content`);
  assert(chineseCharacters <= 2000, `${label} article must contain no more than 2000 Chinese characters in main content`);
}

const videoReviewArticle = read(videoReviewArticlePath);
assert(videoReviewArticle.includes("<title>德州扑克视频复盘方法｜把牌局变成决策框架 - PokerRookie</title>"), "Video review article must use the SEO title");
assert(videoReviewArticle.includes(`<link rel="canonical" href="${videoReviewArticleUrl}">`), "Video review article must use the canonical URL");
assert(videoReviewArticle.includes('<meta name="robots" content="index,follow">'), "Video review article must be indexable");
assert(videoReviewArticle.includes('id="pokerrookie-seo-jsonld"'), "Video review article must include structured data");
assert(videoReviewArticle.includes('"datePublished":"2026-08-05"'), "Video review article must use today's publication date");
assert(videoReviewArticle.includes("完整场景"), "Video review article must include a complete decision scene");
assert(videoReviewArticle.includes("可执行的七步视频复盘清单"), "Video review article must include an actionable review checklist");
assert(videoReviewArticle.includes('href="https://blog.gtowizard.com/how-to-get-the-most-out-of-your-hand-reviews/" target="_blank" rel="noopener"'), "Video review article must cite the professional hand-review source");
assert(videoReviewArticle.includes('href="https://blog.gtowizard.com/what-we-can-learn-from-outlier-hands/" target="_blank" rel="noopener"'), "Video review article must cite the professional outlier-hands source");

const threeBetArticle = read(threeBetArticlePath);
assert(threeBetArticle.includes("<title>德州扑克3-bet底池常见错误｜低SPR实战指南 - PokerRookie</title>"), "3-bet article must use the SEO title");
assert(threeBetArticle.includes(`<link rel="canonical" href="${threeBetArticleUrl}">`), "3-bet article must use the canonical URL");
assert(threeBetArticle.includes('<meta name="robots" content="index,follow">'), "3-bet article must be indexable");
assert(threeBetArticle.includes('id="pokerrookie-seo-jsonld"'), "3-bet article must include structured data");
assert(threeBetArticle.includes('"datePublished":"2026-08-05"'), "3-bet article must use today's publication date");
assert(threeBetArticle.includes("完整场景"), "3-bet article must include a complete decision scene");
assert(threeBetArticle.includes("3-bet底池复盘表"), "3-bet article must include an actionable review checklist");
assert(threeBetArticle.includes('href="https://blog.gtowizard.com/turn-barreling-in-3-bet-pots/" target="_blank" rel="noopener"'), "3-bet article must cite the professional GTO Wizard source");
assert(threeBetArticle.includes('href="https://upswingpoker.com/single-raised-pots-vs-3-bet-pots/" target="_blank" rel="noopener"'), "3-bet article must cite the professional Upswing source");

for (const [label, article] of [
  ["Video review", videoReviewArticle],
  ["3-bet mistakes", threeBetArticle]
]) {
  const chineseCharacters = countMainChineseCharacters(article);
  assert(chineseCharacters >= 3500, `${label} article must contain at least 3500 Chinese characters in main content`);
  assert(chineseCharacters <= 4500, `${label} article must contain no more than 4500 Chinese characters in main content`);
  assert((article.match(/<section class="section">/g) || []).length >= 8, `${label} article must contain at least 8 substantial sections`);
}

for (const articlePath of [
  gtoArticlePath,
  pioArticlePath,
  beginnerArticlePath,
  turnArticlePath,
  finalTableArticlePath,
  rangeArticlePath,
  preflopArticlePath,
  sizingArticlePath,
  flopArticlePath,
  riverArticlePath,
  videoReviewArticlePath,
  threeBetArticlePath
]) {
  assert(read(articlePath).includes('href="../../daily.html"'), `${articlePath} must link to daily sharing in the article nav`);
}
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
