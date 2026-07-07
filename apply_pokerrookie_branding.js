const fs = require("fs");
const path = require("path");

const root = __dirname;
const htmlFiles = [
  "index.html",
  "travis-poker.html",
  "download.html",
  "free.html",
  "about.html",
  "lab.html"
];

const css = `<style id="pokerrookie-branding">
.navbar_logo-link {
  display: flex !important;
  align-items: center !important;
  min-width: 220px;
}
.navbar2_logo.pokerrookie-nav-logo {
  width: 220px !important;
  max-width: 220px !important;
  height: auto !important;
  object-fit: contain !important;
  display: block !important;
}
.pokerrookie-footer-logo {
  width: 178px !important;
  max-width: 178px !important;
  height: auto !important;
  object-fit: contain !important;
  display: block !important;
  margin-bottom: 14px;
}
.footer .div-block-28 {
  width: 190px !important;
}
.pokerrookie-bili-link {
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  width: fit-content;
  min-height: 42px;
  margin: 24px auto 0;
  padding: 10px 18px;
  border: 1px solid #fb7299;
  border-radius: 999px;
  color: #fb7299 !important;
  background: rgba(251, 114, 153, 0.08);
  font-size: 16px;
  font-weight: 800;
  line-height: 1.2;
  text-decoration: none !important;
  transition: background-color 160ms ease, color 160ms ease, transform 160ms ease;
}
.pokerrookie-bili-link:hover {
  color: #fff !important;
  background: #fb7299;
  transform: translateY(-1px);
}
.pokerrookie-profile-card {
  display: grid !important;
  grid-column: 1 / -1;
  grid-template-columns: minmax(0, 0.9fr) minmax(320px, 1.1fr);
  gap: 40px;
  align-items: center !important;
  justify-content: stretch !important;
  min-height: 560px;
}
.choice-grid {
  display: grid !important;
  grid-template-columns: 1fr !important;
  gap: 32px !important;
}
.pokerrookie-profile-copy {
  max-width: 520px;
}
.pokerrookie-profile-label {
  display: inline-flex;
  align-items: center;
  min-height: 35px;
  padding: 8px 14px;
  border-radius: 999px;
  background: #f4f7fc;
  color: #2f4b73;
  font-size: 14px;
  font-weight: 700;
  line-height: 1.4;
  margin-bottom: 32px;
}
.pokerrookie-profile-title {
  margin: 0 0 8px;
  color: #000;
  font-family: "Instrument Serif", "Noto Serif SC", serif;
  font-size: 58px;
  font-weight: 800;
  line-height: 1.05;
}
.pokerrookie-profile-subtitle {
  color: #2f4b73;
  font-size: 24px;
  font-weight: 800;
  line-height: 1.15;
  margin-bottom: 24px;
}
.pokerrookie-profile-desc {
  color: #222;
  font-size: 18px;
  font-weight: 300;
  line-height: 1.9;
  margin: 0;
}
.pokerrookie-profile-media {
  width: 100%;
}
.pokerrookie-profile-photo {
  display: block;
  width: 100%;
  aspect-ratio: 1.54 / 1;
  object-fit: cover;
  border: 1px solid #c8d6ec;
  border-radius: 16px;
  background: #f4f4f2;
}
@media (max-width: 991px) {
  .navbar_logo-link {
    min-width: 180px;
  }
  .navbar2_logo.pokerrookie-nav-logo {
    width: 180px !important;
    max-width: 180px !important;
  }
  .navbar_button-wrapper {
    display: flex !important;
    width: 48px !important;
    min-width: 48px !important;
    height: 48px !important;
    align-items: center !important;
    justify-content: center !important;
  }
  .button.is-navbar2-button.hide-mobile-portrait {
    display: none !important;
  }
  .navbar_menu-button {
    display: flex !important;
    width: 48px !important;
    height: 48px !important;
    padding: 0 !important;
    align-items: center !important;
    justify-content: center !important;
  }
  .menu-icon2 {
    display: flex !important;
    width: 24px !important;
    height: 18px !important;
    flex-direction: column !important;
    justify-content: space-between !important;
    background: transparent !important;
  }
  .menu-icon2_line-top,
  .menu-icon2_line-bottom,
  .menu-icon2_line-middle,
  .menu-icon2_line-middle-inner {
    width: 24px !important;
    height: 2px !important;
    min-height: 2px !important;
    background: #000 !important;
    border-radius: 999px;
  }
  .pokerrookie-profile-card {
    grid-template-columns: 1fr;
    gap: 28px;
  }
}
@media (max-width: 767px) {
  .navbar_logo-link {
    min-width: 270px;
  }
  .navbar2_logo.pokerrookie-nav-logo {
    width: min(270px, calc(100vw - 82px)) !important;
    max-width: min(270px, calc(100vw - 82px)) !important;
  }
  .pokerrookie-profile-card {
    min-height: 0;
    padding: 28px !important;
    gap: 24px;
  }
  .pokerrookie-bili-link {
    width: 100%;
    max-width: 280px;
    margin: 18px auto 0;
    font-size: 15px;
  }
  .pokerrookie-profile-title {
    font-size: 42px;
  }
  .pokerrookie-profile-subtitle {
    font-size: 22px;
  }
  .pokerrookie-profile-desc {
    font-size: 16px;
    line-height: 1.75;
  }
  .pokerrookie-profile-photo {
    border-radius: 12px;
  }
  .footer .div-block-28 {
    width: 150px !important;
  }
  .pokerrookie-footer-logo {
    width: 140px !important;
    max-width: 140px !important;
  }
}
</style>`;

const profileCard = `<div class="choice-card is-red is-green pokerrookie-profile-card"><div class="pokerrookie-profile-copy"><div class="pokerrookie-profile-label">人物介绍</div><h1 class="pokerrookie-profile-title">PokerRookie</h1><div class="pokerrookie-profile-subtitle">B站知名Up主</div><p class="pokerrookie-profile-desc">国内顶尖德州扑克、奥马哈与混合游戏玩家，拥有APT、GOP、RDPT、KPC等赛事的十余个冠军头衔。</p></div><div class="pokerrookie-profile-media"><img class="pokerrookie-profile-photo" src="assets/pokerrookie-profile.jpg" alt="PokerRookie 人物照片" loading="lazy"/></div></div>`;
const bilibiliLink = `<a href="https://space.bilibili.com/443284341?spm_id_from=333.337.0.0" class="pokerrookie-bili-link w-inline-block"><span>访问 PokerRookie 的 Bilibili 主页</span></a>`;

function ensureCss(html) {
  const withoutOld = html.replace(/<style id="pokerrookie-branding">[\s\S]*?<\/style>/g, "");
  return withoutOld.replace("</head>", `${css}</head>`);
}

function replaceLogos(html) {
  return html
    .replace(/<img\b(?=[^>]*class="navbar2_logo")[^>]*\/?>/g, '<img src="assets/pokerrookie-logo.png" alt="PokerRookie" loading="lazy" class="navbar2_logo pokerrookie-nav-logo"/>')
    .replace(/<img\b(?=[^>]*69973e9728086fd6a49a2e06_travispoker-28)[^>]*\/?>/g, '<img src="assets/pokerrookie-logo.png" alt="PokerRookie" loading="lazy" class="pokerrookie-footer-logo"/>');
}

function removeLabNav(html) {
  return html.replace(/<a href="lab\.html"[^>]*class="navbar_link lab[^"]*"[^>]*>Poker LAB<\/a>/g, "");
}

const improveCardPattern = /<div class="choice-card is-red"><div class="card-badge">适合想认真提升的人<\/div>[\s\S]*?<div class="card-note">适合想长期提升的玩家<\/div><\/div>/g;

function replaceHome(html) {
  return html
    .replace(/<a\b(?=[^>]*class="[^"]*pokerrookie-bili-link)[\s\S]*?<\/a>/g, "")
    .replace(/<div class="text-block-40">欢迎你的加入<br\/><\/div>/g, '<div class="text-block-40">和PokerRookie一起游戏<br/></div>')
    .replace(/<div class="text-block-40">和PokerRookie一起游戏<br\/><\/div>/g, `<div class="text-block-40">和PokerRookie一起游戏<br/></div>${bilibiliLink}`)
    .replace(/<div class="choice-card is-red is-green">[\s\S]*?<div class="choice-card is-red">/, `${profileCard}<div class="choice-card is-red">`)
    .replace(improveCardPattern, "");
}

for (const fileName of htmlFiles) {
  const filePath = path.join(root, fileName);
  let html = fs.readFileSync(filePath, "utf8");
  html = ensureCss(removeLabNav(replaceLogos(html)));
  if (fileName === "index.html" || fileName === "travis-poker.html") {
    html = replaceHome(html);
  }
  fs.writeFileSync(filePath, html, "utf8");
  console.log(`Applied PokerRookie branding to ${fileName}`);
}

const profilePath = path.join(root, "assets", "pokerrookie-profile.jpg");
if (!fs.existsSync(profilePath)) {
  console.warn("Missing assets/pokerrookie-profile.jpg. Save the provided profile photo there before final verification.");
}
