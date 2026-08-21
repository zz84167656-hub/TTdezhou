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
const hand2NoteArticlePath = "articles/hand2note-data-review/index.html";
const hand2NoteArticleUrl = `${siteBaseUrl}/articles/hand2note-data-review/`;
const pokerTrackerArticlePath = "articles/pokertracker4-review-workflow/index.html";
const pokerTrackerArticleUrl = `${siteBaseUrl}/articles/pokertracker4-review-workflow/`;
const bubbleArticlePath = "articles/tournament-bubble-icm-strategy/index.html";
const bubbleArticleUrl = `${siteBaseUrl}/articles/tournament-bubble-icm-strategy/`;
const bigBlindArticlePath = "articles/big-blind-defense-button/index.html";
const bigBlindArticleUrl = `${siteBaseUrl}/articles/big-blind-defense-button/`;
const smallBlindArticlePath = "articles/small-blind-strategy/index.html";
const smallBlindArticleUrl = `${siteBaseUrl}/articles/small-blind-strategy/`;
const potOddsArticlePath = "articles/pot-odds-implied-odds/index.html";
const potOddsArticleUrl = `${siteBaseUrl}/articles/pot-odds-implied-odds/`;
const turnDoubleBarrelArticlePath = "articles/turn-double-barrel-strategy/index.html";
const turnDoubleBarrelArticleUrl = `${siteBaseUrl}/articles/turn-double-barrel-strategy/`;
const riverBlockersArticlePath = "articles/river-blockers-guide/index.html";
const riverBlockersArticleUrl = `${siteBaseUrl}/articles/river-blockers-guide/`;
const highStakesVideoArticlePath = "articles/high-stakes-video-hand-review/index.html";
const highStakesVideoArticleUrl = `${siteBaseUrl}/articles/high-stakes-video-hand-review/`;
const multiwayArticlePath = "articles/multiway-pot-mistakes/index.html";
const multiwayArticleUrl = `${siteBaseUrl}/articles/multiway-pot-mistakes/`;
const pokerSnowieArticlePath = "articles/pokersnowie-training-guide/index.html";
const pokerSnowieArticleUrl = `${siteBaseUrl}/articles/pokersnowie-training-guide/`;
const solverComparisonArticlePath = "articles/gto-plus-piosolver-comparison/index.html";
const solverComparisonArticleUrl = `${siteBaseUrl}/articles/gto-plus-piosolver-comparison/`;
const editorialGuide = read("SEO_EDITORIAL_GUIDE.md");
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
assert(sitemap.includes(`<loc>${hand2NoteArticleUrl}</loc>`), "sitemap.xml must include the Hand2Note article");
assert(baiduUrls.includes(hand2NoteArticleUrl), "baidu_urls.txt must include the Hand2Note article");
assert(sitemap.includes(`<loc>${pokerTrackerArticleUrl}</loc>`), "sitemap.xml must include the PokerTracker 4 article");
assert(baiduUrls.includes(pokerTrackerArticleUrl), "baidu_urls.txt must include the PokerTracker 4 article");
assert(sitemap.includes(`<loc>${bubbleArticleUrl}</loc>`), "sitemap.xml must include the tournament bubble article");
assert(baiduUrls.includes(bubbleArticleUrl), "baidu_urls.txt must include the tournament bubble article");
assert(sitemap.includes(`<loc>${bigBlindArticleUrl}</loc>`), "sitemap.xml must include the big blind defense article");
assert(baiduUrls.includes(bigBlindArticleUrl), "baidu_urls.txt must include the big blind defense article");
assert(sitemap.includes(`<loc>${smallBlindArticleUrl}</loc>`), "sitemap.xml must include the small blind strategy article");
assert(baiduUrls.includes(smallBlindArticleUrl), "baidu_urls.txt must include the small blind strategy article");
assert(sitemap.includes(`<loc>${potOddsArticleUrl}</loc>`), "sitemap.xml must include the pot odds article");
assert(baiduUrls.includes(potOddsArticleUrl), "baidu_urls.txt must include the pot odds article");
assert(sitemap.includes(`<loc>${turnDoubleBarrelArticleUrl}</loc>`), "sitemap.xml must include the turn double-barrel article");
assert(baiduUrls.includes(turnDoubleBarrelArticleUrl), "baidu_urls.txt must include the turn double-barrel article");
assert(sitemap.includes(`<loc>${riverBlockersArticleUrl}</loc>`), "sitemap.xml must include the river blockers article");
assert(baiduUrls.includes(riverBlockersArticleUrl), "baidu_urls.txt must include the river blockers article");
assert(sitemap.includes(`<loc>${highStakesVideoArticleUrl}</loc>`), "sitemap.xml must include the high-stakes video review article");
assert(baiduUrls.includes(highStakesVideoArticleUrl), "baidu_urls.txt must include the high-stakes video review article");
assert(sitemap.includes(`<loc>${multiwayArticleUrl}</loc>`), "sitemap.xml must include the multiway mistakes article");
assert(baiduUrls.includes(multiwayArticleUrl), "baidu_urls.txt must include the multiway mistakes article");
assert(sitemap.includes(`<loc>${pokerSnowieArticleUrl}</loc>`), "sitemap.xml must include the PokerSnowie training article");
assert(baiduUrls.includes(pokerSnowieArticleUrl), "baidu_urls.txt must include the PokerSnowie training article");
assert(sitemap.includes(`<loc>${solverComparisonArticleUrl}</loc>`), "sitemap.xml must include the solver comparison article");
assert(baiduUrls.includes(solverComparisonArticleUrl), "baidu_urls.txt must include the solver comparison article");
assert(sitemap.includes(`<loc>${pokerSnowieArticleUrl}</loc>\n    <lastmod>2026-08-17</lastmod>`), "sitemap.xml must expose the PokerSnowie rewrite date");
assert(sitemap.includes(`<loc>${solverComparisonArticleUrl}</loc>\n    <lastmod>2026-08-17</lastmod>`), "sitemap.xml must expose the solver comparison rewrite date");
assert(sitemap.includes(`<loc>${sizingArticleUrl}</loc>\n    <lastmod>2026-08-03</lastmod>`), "sitemap.xml must preserve unchanged article dates instead of refreshing every URL");
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
assert((home.match(/class="pokerrookie-home-article-item"/g) || []).length === 24, "Home must list all 24 strategy articles exactly once");
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
  "articles/three-bet-pot-mistakes/",
  "articles/hand2note-data-review/",
  "articles/pokertracker4-review-workflow/",
  "articles/tournament-bubble-icm-strategy/",
  "articles/big-blind-defense-button/",
  "articles/small-blind-strategy/",
  "articles/pot-odds-implied-odds/",
  "articles/turn-double-barrel-strategy/",
  "articles/river-blockers-guide/",
  "articles/high-stakes-video-hand-review/",
  "articles/multiway-pot-mistakes/",
  "articles/pokersnowie-training-guide/",
  "articles/gto-plus-piosolver-comparison/"
]) {
  assert(home.includes(`href="${articleHref}"`), `Home must link to ${articleHref}`);
}
assert(home.indexOf('href="articles/gto-plus-piosolver-comparison/"') < home.indexOf('href="articles/pokersnowie-training-guide/"'), "Home must show today's solver comparison first");
assert(home.indexOf('href="articles/pokersnowie-training-guide/"') < home.indexOf('href="articles/multiway-pot-mistakes/"'), "Home must show today's tool articles before older articles");
assert(home.indexOf('href="articles/multiway-pot-mistakes/"') < home.indexOf('href="articles/high-stakes-video-hand-review/"'), "Home must show today's newest articles first");
assert(home.indexOf('href="articles/high-stakes-video-hand-review/"') < home.indexOf('href="articles/river-blockers-guide/"'), "Home must show today's articles before older articles");
assert(home.indexOf('href="articles/turn-double-barrel-strategy/"') < home.indexOf('href="articles/pot-odds-implied-odds/"'), "Home must show today's articles before older articles");
assert(home.indexOf('href="articles/small-blind-strategy/"') < home.indexOf('href="articles/big-blind-defense-button/"'), "Home must show today's articles before older articles");
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
assert((homeMirror.match(/class="pokerrookie-home-article-item"/g) || []).length === 24, "travis-poker.html must mirror all strategy articles");
assert(homeMirror.includes('"@id":"https://www.pokerrookie.top/#articles"'), "travis-poker.html structured data must include the article ItemList");

const daily = read("daily.html");
assert(daily.includes('class="pokerrookie-daily-sharing"'), "Daily page must include the daily sharing interface");
assert(daily.includes('id="pokerrookie-daily-title"'), "Daily page must expose an accessible page heading");
assert(daily.includes("少一点套路，多一点判断"), "Daily page must communicate the quality-first editorial approach");
assert(!daily.includes("每天两篇，持续积累"), "Daily page must not promise a fixed two-article quota");
assert(daily.includes("2026年8月13日"), "Daily page must show the latest publishing date");
assert(daily.includes("2026年7月23日"), "Daily page must show the earliest publishing date");
assert((daily.match(/class="pokerrookie-daily-group"/g) || []).length === 13, "Daily page must group articles under all 13 publishing dates");
assert((daily.match(/class="pokerrookie-daily-article"/g) || []).length === 24, "Daily page must list all 24 strategy articles exactly once");
assert(daily.indexOf('href="articles/gto-plus-piosolver-comparison/"') < daily.indexOf('href="articles/multiway-pot-mistakes/"'), "Daily page must show today's tool articles first");
assert(daily.indexOf('href="articles/multiway-pot-mistakes/"') < daily.indexOf('href="articles/river-blockers-guide/"'), "Daily page must order articles from newest to oldest");
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
assert(gtoArticle.includes("<title>GTO+怎么用｜用范围、尺度与EV完成一次牌局复盘 - PokerRookie</title>"), "GTO+ article must use the search-intent title");
assert(gtoArticle.includes(`<link rel="canonical" href="${gtoArticleUrl}">`), "GTO+ article must use the canonical article URL");
assert(gtoArticle.includes('<meta name="robots" content="index,follow">'), "GTO+ article must be indexable");
assert(gtoArticle.includes('<meta name="applicable-device" content="pc,mobile">'), "GTO+ article must declare Baidu-friendly device support");
assert(gtoArticle.includes('id="pokerrookie-seo-jsonld"'), "GTO+ article must include structured data");
assert(gtoArticle.includes("GTO+ 怎么用：用范围、尺度与 EV 完成一次牌局复盘"), "GTO+ article must include the article headline");
assert(gtoArticle.includes('"datePublished":"2026-07-23"'), "GTO+ article must retain its original publication date");
assert(gtoArticle.includes('"dateModified":"2026-08-21"'), "GTO+ article must use today's modification date");
assert(gtoArticle.includes("../../assets/GTO%2B.webp"), "GTO+ article must use the local GTO+ image");
assert(gtoArticle.includes('href="../../free.html"'), "GTO+ article must link to video teaching");
assert(gtoArticle.includes('href="../../about.html"'), "GTO+ article must link to practical tools");
assert(gtoArticle.includes('href="../../download.html"'), "GTO+ article must link to download page");
assert(gtoArticle.includes('href="../piosolver-guide/"'), "GTO+ article must link to the PioSolver guide");
assert(gtoArticle.includes('href="../poker-position-range-pot-odds/"'), "GTO+ article must link to the beginner guide");
assert(gtoArticle.includes('href="../turn-card-leaks/"'), "GTO+ article must link to the turn strategy guide");
assert(gtoArticle.includes('href="../gto-plus-piosolver-comparison/"'), "GTO+ article must link contextually to the solver comparison");
assert(gtoArticle.includes('href="../hand2note-data-review/"'), "GTO+ article must link contextually to the Hand2Note diagnosis");
assert(gtoArticle.includes('class="inline-link"'), "GTO+ article must visually distinguish contextual links");
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

const hand2NoteArticle = read(hand2NoteArticlePath);
assert(hand2NoteArticle.includes("<title>Hand2Note 数据复盘｜VPIP过高先别急着收紧范围 - PokerRookie</title>"), "Hand2Note article must use the SEO title");
assert(hand2NoteArticle.includes(`<link rel="canonical" href="${hand2NoteArticleUrl}">`), "Hand2Note article must use the canonical URL");
assert(hand2NoteArticle.includes('"datePublished":"2026-08-06"'), "Hand2Note article must retain its original publication date");
assert(hand2NoteArticle.includes('"dateModified":"2026-08-20"'), "Hand2Note article must use today's modification date");
assert(hand2NoteArticle.includes("../../assets/Hand2Note.webp"), "Hand2Note article must include the local interface example image");
assert(hand2NoteArticle.includes('class="article-figure"'), "Hand2Note article must include an explained image example");
assert(hand2NoteArticle.includes('class="article-editorial article-data-diagnostic"'), "Hand2Note article must use the data-diagnostic layout");
assert(hand2NoteArticle.includes('class="diagnostic-brief"'), "Hand2Note article must include the diagnosis brief");
assert(hand2NoteArticle.includes('class="diagnostic-path"'), "Hand2Note article must include the drill-down path");
assert(hand2NoteArticle.includes('class="diagnostic-outcomes"'), "Hand2Note article must compare possible outcomes");
assert(hand2NoteArticle.includes('class="article-sources"'), "Hand2Note article must include a source note");
assert(hand2NoteArticle.includes('href="https://www.hand2note.com/Help/Features/reports" target="_blank" rel="noopener"'), "Hand2Note article must cite the official reports guide");
assert(hand2NoteArticle.includes('href="https://www.hand2note.com/Help/Features/report-navigation" target="_blank" rel="noopener"'), "Hand2Note article must cite the official report navigation guide");
assert(hand2NoteArticle.includes('href="https://hand2note.com/Help/Features/aliases" target="_blank" rel="noopener"'), "Hand2Note article must cite the official aliases guide");
for (const phrase of ["完整场景", "复盘清单", "专业参考与延伸阅读"]) {
  assert(!hand2NoteArticle.includes(phrase), `Hand2Note article must avoid the old template phrase: ${phrase}`);
}
const hand2NoteChineseCharacters = countMainChineseCharacters(hand2NoteArticle);
assert(hand2NoteChineseCharacters >= 1500, "Hand2Note article must contain at least 1500 Chinese characters in main content");
assert(hand2NoteChineseCharacters <= 3000, "Hand2Note article must stay focused instead of expanding into a feature inventory");
const hand2NoteSectionCount = (hand2NoteArticle.match(/<section class="section/g) || []).length;
assert(hand2NoteSectionCount >= 6 && hand2NoteSectionCount <= 9, "Hand2Note article must use 6 to 9 purposeful sections");

const pokerTrackerArticle = read(pokerTrackerArticlePath);
assert(pokerTrackerArticle.includes("<title>PokerTracker 4 复盘教程｜用筛选器建立每周训练系统 - PokerRookie</title>"), "PokerTracker 4 article must use the SEO title");
assert(pokerTrackerArticle.includes(`<link rel="canonical" href="${pokerTrackerArticleUrl}">`), "PokerTracker 4 article must use the canonical URL");
assert(pokerTrackerArticle.includes('"datePublished":"2026-08-06"'), "PokerTracker 4 article must use today's publication date");
assert(pokerTrackerArticle.includes("../../assets/PokerTracker%204.webp"), "PokerTracker 4 article must include the local interface example image");
assert(pokerTrackerArticle.includes('class="article-figure"'), "PokerTracker 4 article must include an explained image example");
assert(pokerTrackerArticle.includes("完整场景"), "PokerTracker 4 article must include a complete analysis scenario");
assert(pokerTrackerArticle.includes('href="https://docs.pokertracker.com/pt4/general/pokertracker-4-quick-start-guide/" target="_blank" rel="noopener"'), "PokerTracker 4 article must cite the official quick start guide");

const pokerTrackerChineseCharacters = countMainChineseCharacters(pokerTrackerArticle);
assert(pokerTrackerChineseCharacters >= 3500, "PokerTracker 4 article must contain at least 3500 Chinese characters in main content");
assert(pokerTrackerChineseCharacters <= 4500, "PokerTracker 4 article must contain no more than 4500 Chinese characters in main content");
assert((pokerTrackerArticle.match(/<section class="section">/g) || []).length >= 10, "PokerTracker 4 article must contain at least 10 substantial sections");

assert(articleCss.includes(".diagnostic-brief"), "Shared article CSS must style the diagnosis brief");
assert(articleCss.includes(".diagnostic-path"), "Shared article CSS must style the diagnosis path");
assert(articleCss.includes(".diagnostic-outcomes"), "Shared article CSS must style diagnosis outcomes");

const bubbleArticle = read(bubbleArticlePath);
assert(bubbleArticle.includes("<title>德州扑克锦标赛泡沫期策略｜ICM、风险溢价与筹码施压 - PokerRookie</title>"), "Tournament bubble article must use the SEO title");
assert(bubbleArticle.includes(`<link rel="canonical" href="${bubbleArticleUrl}">`), "Tournament bubble article must use the canonical URL");
assert(bubbleArticle.includes('"datePublished":"2026-08-07"'), "Tournament bubble article must use today's publication date");
assert(bubbleArticle.includes("../../assets/chuanqipuke.webp"), "Tournament bubble article must include a local tournament image example");
assert(bubbleArticle.includes('class="article-figure"'), "Tournament bubble article must include an explained image example");
assert(bubbleArticle.includes("完整场景"), "Tournament bubble article must include a complete ICM scenario");
assert(bubbleArticle.includes("赛事复盘表"), "Tournament bubble article must include an actionable review checklist");
assert(bubbleArticle.includes('href="https://www.icmizer.com/en/blog/poker-icm-101-what-is-icm-poker/" target="_blank" rel="noopener"'), "Tournament bubble article must cite the professional ICM source");
assert(bubbleArticle.includes('href="https://blog.gtowizard.com/what-is-the-bubble-factor-in-poker-tournaments/" target="_blank" rel="noopener"'), "Tournament bubble article must cite the professional bubble-factor source");

const bigBlindArticle = read(bigBlindArticlePath);
assert(bigBlindArticle.includes("<title>德州扑克大盲防守进阶｜对抗按钮位开池的完整策略 - PokerRookie</title>"), "Big blind defense article must use the SEO title");
assert(bigBlindArticle.includes(`<link rel="canonical" href="${bigBlindArticleUrl}">`), "Big blind defense article must use the canonical URL");
assert(bigBlindArticle.includes('"datePublished":"2026-08-07"'), "Big blind defense article must use today's publication date");
assert(bigBlindArticle.includes("../../assets/Hustler%20Casino%20Live.webp"), "Big blind defense article must include a local cash-game image example");
assert(bigBlindArticle.includes('class="article-figure"'), "Big blind defense article must include an explained image example");
assert(bigBlindArticle.includes("完整场景"), "Big blind defense article must include a complete postflop scenario");
assert(bigBlindArticle.includes("大盲防守复盘清单"), "Big blind defense article must include an actionable review checklist");
assert(bigBlindArticle.includes('href="https://blog.gtowizard.com/flop-heuristics-for-defending-the-blinds-in-mtts/" target="_blank" rel="noopener"'), "Big blind defense article must cite the professional blind-defense source");

for (const [label, article] of [
  ["Tournament bubble", bubbleArticle],
  ["Big blind defense", bigBlindArticle]
]) {
  const chineseCharacters = countMainChineseCharacters(article);
  assert(chineseCharacters >= 3500, `${label} article must contain at least 3500 Chinese characters in main content`);
  assert(chineseCharacters <= 4500, `${label} article must contain no more than 4500 Chinese characters in main content`);
  assert((article.match(/<section class="section">/g) || []).length >= 10, `${label} article must contain at least 10 substantial sections`);
}

const smallBlindArticle = read(smallBlindArticlePath);
assert(smallBlindArticle.includes("<title>德州扑克小盲位策略｜翻前3-bet、盲注战与翻后计划 - PokerRookie</title>"), "Small blind article must use the SEO title");
assert(smallBlindArticle.includes(`<link rel="canonical" href="${smallBlindArticleUrl}">`), "Small blind article must use the canonical URL");
assert(smallBlindArticle.includes('"datePublished":"2026-08-10"'), "Small blind article must use today's publication date");
assert(smallBlindArticle.includes("../../assets/Hustler%20Casino%20Live.webp"), "Small blind article must include a local cash-game image example");
assert(smallBlindArticle.includes('class="article-figure"'), "Small blind article must include an explained image example");
assert(smallBlindArticle.includes("完整场景"), "Small blind article must include a complete strategy scenario");
assert(smallBlindArticle.includes("小盲位复盘清单"), "Small blind article must include an actionable review checklist");
assert(smallBlindArticle.includes('href="https://upswingpoker.com/small-blind-poker-strategy-tips/" target="_blank" rel="noopener"'), "Small blind article must cite the professional small-blind source");
assert(smallBlindArticle.includes('href="https://blog.gtowizard.com/playing-limped-pots-as-sb-in-mtts/" target="_blank" rel="noopener"'), "Small blind article must cite the professional MTT source");

const potOddsArticle = read(potOddsArticlePath);
assert(potOddsArticle.includes("<title>德州扑克底池赔率与隐含赔率｜听牌跟注计算完整指南 - PokerRookie</title>"), "Pot odds article must use the SEO title");
assert(potOddsArticle.includes(`<link rel="canonical" href="${potOddsArticleUrl}">`), "Pot odds article must use the canonical URL");
assert(potOddsArticle.includes('"datePublished":"2026-08-10"'), "Pot odds article must use today's publication date");
assert(potOddsArticle.includes("../../assets/GTO%2B.webp"), "Pot odds article must include a local analysis image example");
assert(potOddsArticle.includes('class="article-figure"'), "Pot odds article must include an explained image example");
assert(potOddsArticle.includes("完整场景"), "Pot odds article must include a complete calculation scenario");
assert(potOddsArticle.includes("赔率复盘清单"), "Pot odds article must include an actionable review checklist");
assert(potOddsArticle.includes('href="https://blog.gtowizard.com/what-are-pot-odds-in-poker/" target="_blank" rel="noopener"'), "Pot odds article must cite the professional pot-odds source");
assert(potOddsArticle.includes('href="https://www.888poker.com/magazine/strategy/implied-odds-beginners-guide" target="_blank" rel="noopener"'), "Pot odds article must cite the professional implied-odds source");

for (const [label, article] of [
  ["Small blind strategy", smallBlindArticle],
  ["Pot odds", potOddsArticle]
]) {
  const chineseCharacters = countMainChineseCharacters(article);
  assert(chineseCharacters >= 3500, `${label} article must contain at least 3500 Chinese characters in main content`);
  assert(chineseCharacters <= 4500, `${label} article must contain no more than 4500 Chinese characters in main content`);
  assert((article.match(/<section class="section">/g) || []).length >= 10, `${label} article must contain at least 10 substantial sections`);
}

const turnDoubleBarrelArticle = read(turnDoubleBarrelArticlePath);
assert(turnDoubleBarrelArticle.includes("<title>德州扑克转牌双桶策略｜好转牌、范围极化与河牌计划 - PokerRookie</title>"), "Turn double-barrel article must use the SEO title");
assert(turnDoubleBarrelArticle.includes(`<link rel="canonical" href="${turnDoubleBarrelArticleUrl}">`), "Turn double-barrel article must use the canonical URL");
assert(turnDoubleBarrelArticle.includes('"datePublished":"2026-08-11"'), "Turn double-barrel article must use today's publication date");
assert(turnDoubleBarrelArticle.includes("../../assets/PioSolver.webp"), "Turn double-barrel article must include a local solver image example");
assert(turnDoubleBarrelArticle.includes('class="article-figure"'), "Turn double-barrel article must include an explained image example");
assert(turnDoubleBarrelArticle.includes("完整场景"), "Turn double-barrel article must include a complete strategy scenario");
assert(turnDoubleBarrelArticle.includes("转牌双桶复盘清单"), "Turn double-barrel article must include an actionable review checklist");
assert(turnDoubleBarrelArticle.includes('href="https://blog.gtowizard.com/turn-barreling-in-3-bet-pots/" target="_blank" rel="noopener"'), "Turn double-barrel article must cite the professional GTO Wizard source");
assert(turnDoubleBarrelArticle.includes('href="https://upswingpoker.com/podcast/ep8-double-barreling/" target="_blank" rel="noopener"'), "Turn double-barrel article must cite the professional Upswing source");

const riverBlockersArticle = read(riverBlockersArticlePath);
assert(riverBlockersArticle.includes("<title>德州扑克河牌阻断牌指南｜价值、诈唬与抓诈唬 - PokerRookie</title>"), "River blockers article must use the SEO title");
assert(riverBlockersArticle.includes(`<link rel="canonical" href="${riverBlockersArticleUrl}">`), "River blockers article must use the canonical URL");
assert(riverBlockersArticle.includes('"datePublished":"2026-08-11"'), "River blockers article must use today's publication date");
assert(riverBlockersArticle.includes("../../assets/GTO%2B.webp"), "River blockers article must include a local range-analysis image example");
assert(riverBlockersArticle.includes('class="article-figure"'), "River blockers article must include an explained image example");
assert(riverBlockersArticle.includes("完整场景"), "River blockers article must include a complete strategy scenario");
assert(riverBlockersArticle.includes("河牌阻断牌复盘清单"), "River blockers article must include an actionable review checklist");
assert(riverBlockersArticle.includes('href="https://blog.gtowizard.com/understanding-blockers-in-poker/" target="_blank" rel="noopener"'), "River blockers article must cite the professional GTO Wizard source");
assert(riverBlockersArticle.includes('href="https://upswingpoker.com/river-poker-strategy-tips/" target="_blank" rel="noopener"'), "River blockers article must cite the professional Upswing source");

for (const [label, article] of [
  ["Turn double-barrel", turnDoubleBarrelArticle],
  ["River blockers", riverBlockersArticle]
]) {
  const chineseCharacters = countMainChineseCharacters(article);
  assert(chineseCharacters >= 3500, `${label} article must contain at least 3500 Chinese characters in main content`);
  assert(chineseCharacters <= 4500, `${label} article must contain no more than 4500 Chinese characters in main content`);
  assert((article.match(/<section class="section">/g) || []).length >= 10, `${label} article must contain at least 10 substantial sections`);
}

const highStakesVideoArticle = read(highStakesVideoArticlePath);
assert(highStakesVideoArticle.includes("<title>高额现金桌视频复盘｜ATs面对河牌超池该跟吗 - PokerRookie</title>"), "High-stakes video article must use the SEO title");
assert(highStakesVideoArticle.includes(`<link rel="canonical" href="${highStakesVideoArticleUrl}">`), "High-stakes video article must use the canonical URL");
assert(highStakesVideoArticle.includes('"datePublished":"2026-08-12"'), "High-stakes video article must use today's publication date");
assert(highStakesVideoArticle.includes('"dateModified":"2026-08-18"'), "High-stakes video article must expose its editorial rewrite date");
assert(highStakesVideoArticle.includes("../../assets/Hustler%20Casino%20Live.webp"), "High-stakes video article must include a local video image example");
assert(highStakesVideoArticle.includes('class="article-figure"'), "High-stakes video article must include an explained image example");
assert(highStakesVideoArticle.includes('class="article-editorial article-hand-story"'), "High-stakes video article must use the hand-story format");
assert(highStakesVideoArticle.includes('class="hand-ledger"'), "High-stakes video article must summarize the concrete action line");
assert(highStakesVideoArticle.includes('class="river-math"'), "High-stakes video article must explain the river threshold in context");
assert(highStakesVideoArticle.includes('class="article-sources"'), "High-stakes video article must expose its sources without a boilerplate section");
for (const forbiddenTemplate of ["复盘使用说明", "完整复盘", "高额现金桌视频复盘清单", "专业资料与延伸阅读"]) {
  assert(!highStakesVideoArticle.includes(forbiddenTemplate), `High-stakes video article must not reuse the old template phrase: ${forbiddenTemplate}`);
}
assert(highStakesVideoArticle.includes('href="https://upswingpoker.com/david-yan-vs-duthweiler/" target="_blank" rel="noopener"'), "High-stakes video article must cite the public hand analysis");
assert(highStakesVideoArticle.includes('href="https://blog.gtowizard.com/how-to-get-the-most-out-of-your-hand-reviews/" target="_blank" rel="noopener"'), "High-stakes video article must cite the professional review method");

const multiwayArticle = read(multiwayArticlePath);
assert(multiwayArticle.includes("<title>德州扑克多人底池常见错误｜范围、尺度与坚果潜力 - PokerRookie</title>"), "Multiway article must use the SEO title");
assert(multiwayArticle.includes(`<link rel="canonical" href="${multiwayArticleUrl}">`), "Multiway article must use the canonical URL");
assert(multiwayArticle.includes('"datePublished":"2026-08-12"'), "Multiway article must use today's publication date");
assert(multiwayArticle.includes("../../assets/wsop.webp"), "Multiway article must include a local table image example");
assert(multiwayArticle.includes('class="article-figure"'), "Multiway article must include an explained image example");
assert(multiwayArticle.includes("完整场景"), "Multiway article must include a complete strategy scenario");
assert(multiwayArticle.includes("多人底池复盘清单"), "Multiway article must include an actionable review checklist");
assert(multiwayArticle.includes('href="https://blog.gtowizard.com/10-tips-multiway-pots-in-poker/" target="_blank" rel="noopener"'), "Multiway article must cite the professional GTO Wizard source");
assert(multiwayArticle.includes('href="https://upswingpoker.com/multiway-pot-preflop-squeezing-leaks/" target="_blank" rel="noopener"'), "Multiway article must cite the professional Upswing source");

const highStakesChineseCharacters = countMainChineseCharacters(highStakesVideoArticle);
const highStakesSectionCount = (highStakesVideoArticle.match(/<section\b/g) || []).length;
assert(highStakesChineseCharacters >= 1500, "High-stakes video article must develop the hand with enough original analysis");
assert(highStakesSectionCount >= 5 && highStakesSectionCount <= 8, "High-stakes video article must use a narrative structure instead of a fixed long-form template");

const multiwayChineseCharacters = countMainChineseCharacters(multiwayArticle);
assert(multiwayChineseCharacters >= 3500, "Multiway mistakes article must contain at least 3500 Chinese characters in main content");
assert(multiwayChineseCharacters <= 4500, "Multiway mistakes article must contain no more than 4500 Chinese characters in main content");
assert((multiwayArticle.match(/<section class="section">/g) || []).length >= 10, "Multiway mistakes article must contain at least 10 substantial sections");

assert(highStakesVideoArticle.includes('href="../poker-video-review-method/"'), "Today's video article must link to the established review method");
assert(highStakesVideoArticle.includes('href="../three-bet-pot-mistakes/"'), "Today's video article must link to the established 3-bet guide");
assert(multiwayArticle.includes('href="../flop-cbet-mistakes/"'), "Today's multiway article must link to the established flop guide");
assert(multiwayArticle.includes('href="../pot-odds-implied-odds/"'), "Today's multiway article must link to the established pot-odds guide");

const pokerSnowieArticle = read(pokerSnowieArticlePath);
assert(pokerSnowieArticle.includes("<title>PokerSnowie 使用教程｜AI训练、场景分析与错误率复盘 - PokerRookie</title>"), "PokerSnowie article must use the SEO title");
assert(pokerSnowieArticle.includes(`<link rel="canonical" href="${pokerSnowieArticleUrl}">`), "PokerSnowie article must use the canonical URL");
assert(pokerSnowieArticle.includes('"datePublished":"2026-08-13"'), "PokerSnowie article must use today's publication date");
assert(pokerSnowieArticle.includes('"dateModified":"2026-08-17"'), "PokerSnowie article must expose its editorial rewrite date");
assert(pokerSnowieArticle.includes("../../assets/PokerSnowie.webp"), "PokerSnowie article must include the local training image");
assert(pokerSnowieArticle.includes('class="article-figure"'), "PokerSnowie article must include an explained image example");
assert(pokerSnowieArticle.includes('class="article-editorial article-field-notes"'), "PokerSnowie article must use the field-notes format");
assert(pokerSnowieArticle.includes('class="article-pullquote"'), "PokerSnowie article must include a clear bounded opinion");
assert(pokerSnowieArticle.includes("article-experiment"), "PokerSnowie article must include a concrete tool experiment");
assert(pokerSnowieArticle.includes('class="article-sources"'), "PokerSnowie article must expose its supporting sources without a boilerplate section");
for (const forbiddenTemplate of ["使用说明", "完整场景", "PokerSnowie复盘清单", "专业资料与延伸阅读"]) {
  assert(!pokerSnowieArticle.includes(forbiddenTemplate), `PokerSnowie article must not reuse the old template phrase: ${forbiddenTemplate}`);
}
assert(pokerSnowieArticle.includes('href="https://www.pokersnowie.com/blog/Did-I-play-my-hand-right" target="_blank" rel="noopener"'), "PokerSnowie article must cite the official scenario guide");
assert(pokerSnowieArticle.includes('href="https://www.pokersnowie.com/blog/new-Mac-update%3ATrack-your-improvements%21" target="_blank" rel="noopener"'), "PokerSnowie article must cite the official progress tracking guide");
assert(pokerSnowieArticle.includes('href="../gto-plus-piosolver-comparison/"'), "PokerSnowie article must link to the solver comparison");
assert(pokerSnowieArticle.includes('href="../pokertracker4-review-workflow/"'), "PokerSnowie article must link to the PokerTracker 4 workflow");

const solverComparisonArticle = read(solverComparisonArticlePath);
assert(solverComparisonArticle.includes("<title>GTO+与PioSolver怎么选｜求解器差异与联合复盘流程 - PokerRookie</title>"), "Solver comparison article must use the SEO title");
assert(solverComparisonArticle.includes(`<link rel="canonical" href="${solverComparisonArticleUrl}">`), "Solver comparison article must use the canonical URL");
assert(solverComparisonArticle.includes('"datePublished":"2026-08-13"'), "Solver comparison article must use today's publication date");
assert(solverComparisonArticle.includes('"dateModified":"2026-08-17"'), "Solver comparison article must expose its editorial rewrite date");
assert(solverComparisonArticle.includes("../../assets/GTO%2B.webp"), "Solver comparison article must include the local GTO+ image");
assert(solverComparisonArticle.includes("../../assets/PioSolver.webp"), "Solver comparison article must include the local PioSolver image");
assert(solverComparisonArticle.includes('class="article-figure"'), "Solver comparison article must include an explained image example");
assert(solverComparisonArticle.includes('class="article-editorial article-comparison"'), "Solver comparison article must use the comparison format");
assert(solverComparisonArticle.includes('class="verdict-grid"'), "Solver comparison article must answer the buying question before the feature discussion");
assert(solverComparisonArticle.includes('class="section section-myths"'), "Solver comparison article must challenge common purchasing claims");
assert(solverComparisonArticle.includes('class="article-sources"'), "Solver comparison article must expose its official sources without a boilerplate section");
for (const forbiddenTemplate of ["使用说明", "完整场景", "求解器选择与复盘清单", "专业资料与延伸阅读"]) {
  assert(!solverComparisonArticle.includes(forbiddenTemplate), `Solver comparison article must not reuse the old template phrase: ${forbiddenTemplate}`);
}
assert(solverComparisonArticle.includes('href="https://www.gtoplus.com/videos/" target="_blank" rel="noopener"'), "Solver comparison article must cite the official GTO+ tutorials");
assert(solverComparisonArticle.includes('href="https://piosolver.com/docs/feature_overview/" target="_blank" rel="noopener"'), "Solver comparison article must cite the official PioSolver feature guide");
assert(solverComparisonArticle.includes('href="../pokersnowie-training-guide/"'), "Solver comparison article must link to today's PokerSnowie guide");

for (const [label, article] of [
  ["PokerSnowie training", pokerSnowieArticle],
  ["Solver comparison", solverComparisonArticle]
]) {
  const chineseCharacters = countMainChineseCharacters(article);
  const sectionCount = (article.match(/<section\b/g) || []).length;
  assert(chineseCharacters >= 1200, `${label} article must develop its central question with enough original analysis`);
  assert(sectionCount >= 5 && sectionCount <= 8, `${label} article must use a topic-led structure instead of a fixed ten-section template`);
}

assert(editorialGuide.includes("默认每周发布 3 至 4 篇"), "Editorial guide must prioritize quality over a fixed daily quota");
assert(editorialGuide.includes("连续两篇文章不得使用同一种结构"), "Editorial guide must require structural rotation");
assert(editorialGuide.includes("不编造作者亲历"), "Editorial guide must prohibit fabricated first-hand signals");
assert(articleCss.includes(".article-figure"), "Article stylesheet must style explanatory figures");
assert(articleCss.includes(".analysis-flow"), "Article stylesheet must style the analysis flow examples");
assert(articleCss.includes(".article-editorial .section"), "Article stylesheet must give editorial formats a non-card reading rhythm");
assert(articleCss.includes(".verdict-grid"), "Article stylesheet must support the comparison verdict format");
assert(articleCss.includes(".article-sources"), "Article stylesheet must support lightweight source notes");
assert(articleCss.includes(".hand-ledger"), "Article stylesheet must support the narrative hand summary");
assert(articleCss.includes(".river-math"), "Article stylesheet must support the river decision callout");

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
  threeBetArticlePath,
  hand2NoteArticlePath,
  pokerTrackerArticlePath,
  bubbleArticlePath,
  bigBlindArticlePath,
  smallBlindArticlePath,
  potOddsArticlePath,
  turnDoubleBarrelArticlePath,
  riverBlockersArticlePath,
  highStakesVideoArticlePath,
  multiwayArticlePath,
  pokerSnowieArticlePath,
  solverComparisonArticlePath
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
