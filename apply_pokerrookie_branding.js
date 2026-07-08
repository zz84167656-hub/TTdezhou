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
.pokerrookie-wechat-copy {
  display: inline-flex !important;
  align-items: center !important;
  gap: 8px;
  padding: 0;
  border: 0;
  color: inherit;
  background: transparent;
  font: inherit;
  text-align: left;
  cursor: pointer;
}
.pokerrookie-wechat-copy:hover .pokerrookie-wechat-label {
  color: #1aad19;
}
.pokerrookie-wechat-icon {
  display: inline-flex;
  width: 20px;
  height: 20px;
  flex: 0 0 20px;
  color: #1aad19;
}
.pokerrookie-wechat-icon svg {
  display: block;
  width: 100%;
  height: 100%;
  fill: currentColor;
}
.pokerrookie-wechat-label {
  transition: color 160ms ease;
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

const newEmail = "23294069@qq.com";
const wechatId = "liuyao3643";
const wechatButton = `<button type="button" class="link-block-2 pokerrookie-wechat-copy" data-wechat="${wechatId}" aria-label="Copy WeChat ID ${wechatId}"><span class="pokerrookie-wechat-icon" aria-hidden="true"><svg viewBox="0 0 24 24" focusable="false"><path d="M9.5 4.2c-4.1 0-7.4 2.6-7.4 5.9 0 1.9 1.1 3.6 2.9 4.7l-.6 2.1 2.5-1.2c.8.2 1.7.4 2.6.4 4.1 0 7.4-2.6 7.4-5.9s-3.3-6-7.4-6zm-2.5 4.9c-.5 0-.9-.4-.9-.9s.4-.9.9-.9.9.4.9.9-.4.9-.9.9zm5.1 0c-.5 0-.9-.4-.9-.9s.4-.9.9-.9.9.4.9.9-.4.9-.9.9z"/><path d="M21.9 14.3c0-2.9-2.9-5.3-6.5-5.3h-.3c.1.4.2.8.2 1.2 0 3.8-3.8 6.8-8.4 6.8h-.5c1.1 1.6 3.3 2.7 5.8 2.7.8 0 1.5-.1 2.2-.3l2.1 1-.5-1.7c1.8-1 2.9-2.6 2.9-4.4zm-8.4-1c.4 0 .8.3.8.8s-.3.8-.8.8-.8-.3-.8-.8.4-.8.8-.8zm4.5 0c.4 0 .8.3.8.8s-.3.8-.8.8-.8-.3-.8-.8.4-.8.8-.8z"/></svg></span><span class="text-block-35 pokerrookie-wechat-label">${wechatId}</span></button>`;
const footerScript = `<script id="pokerrookie-wechat-copy">
(function() {
  var fallbackId = "${wechatId}";

  function copyText(value) {
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(value);
    }

    return new Promise(function(resolve, reject) {
      var textarea = document.createElement("textarea");
      textarea.value = value;
      textarea.setAttribute("readonly", "");
      textarea.style.position = "fixed";
      textarea.style.top = "-1000px";
      textarea.style.left = "-1000px";
      document.body.appendChild(textarea);
      textarea.focus();
      textarea.select();

      try {
        if (document.execCommand("copy")) {
          resolve();
        } else {
          reject(new Error("Copy command failed"));
        }
      } catch (error) {
        reject(error);
      } finally {
        document.body.removeChild(textarea);
      }
    });
  }

  document.addEventListener("click", function(event) {
    var button = event.target.closest ? event.target.closest(".pokerrookie-wechat-copy") : null;
    if (!button) return;

    var wechatId = button.getAttribute("data-wechat") || fallbackId;
    var label = button.querySelector(".pokerrookie-wechat-label");

    copyText(wechatId).then(function() {
      if (!label) return;
      label.textContent = "\\u5df2\\u590d\\u5236 " + wechatId;
      window.setTimeout(function() {
        label.textContent = wechatId;
      }, 1600);
    }).catch(function() {
      if (label) label.textContent = wechatId;
    });
  });
})();
</script>`;

function ensureCss(html) {
  const withoutOld = html.replace(/<style id="pokerrookie-branding">[\s\S]*?<\/style>/g, "");
  return withoutOld.replace("</head>", `${css}</head>`);
}

function ensureFooterScript(html) {
  const withoutOld = html.replace(/<script id="pokerrookie-wechat-copy">[\s\S]*?<\/script>/g, "");
  return withoutOld.replace("</body>", `${footerScript}</body>`);
}

function replaceLogos(html) {
  return html
    .replace(/<img\b(?=[^>]*class="navbar2_logo")[^>]*\/?>/g, '<img src="assets/pokerrookie-logo.png" alt="PokerRookie" loading="lazy" class="navbar2_logo pokerrookie-nav-logo"/>')
    .replace(/<img\b(?=[^>]*69973e9728086fd6a49a2e06_travispoker-28)[^>]*\/?>/g, '<img src="assets/pokerrookie-logo.png" alt="PokerRookie" loading="lazy" class="pokerrookie-footer-logo"/>');
}

function removeLabNav(html) {
  return html.replace(/<a href="lab\.html"[^>]*class="navbar_link lab[^"]*"[^>]*>Poker LAB<\/a>/g, "");
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function replaceFooter(html) {
  const emailPattern = new RegExp(`<a href="mailto:${escapeRegExp(newEmail)}[^"]*" class="link-block w-inline-block"><div class="text-block-34">${escapeRegExp(newEmail)}</div></a>`, "g");

  return html
    .replace(/<div class="text-block-33">[\s\S]*?<\/div>/g, "")
    .replace(/<a href="mailto:travispoker2020@gmail\.com[^"]*" class="link-block w-inline-block"><div class="text-block-34">Travispoker2020@gmail\.com<\/div><\/a>/gi, `<a href="mailto:${newEmail}" class="link-block w-inline-block"><div class="text-block-34">${newEmail}</div></a>`)
    .replace(emailPattern, `<a href="mailto:${newEmail}" class="link-block w-inline-block"><div class="text-block-34">${newEmail}</div></a>`)
    .replace(/<button\b(?=[^>]*class="[^"]*pokerrookie-wechat-copy)[\s\S]*?<\/button>/g, wechatButton)
    .replace(/<a href="https:\/\/www\.youtube\.com\/@travispoker" target="_blank" class="link-block-2 w-inline-block">[\s\S]*?<\/a>/g, wechatButton)
    .replace(/<div class="text-block-32">(?:&copy;|\u00a9) 2026 (?:Travis Poker|PokerRookie)<\/div>/g, '<div class="text-block-32">\u00a9 2026 PokerRookie</div>');
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
  html = ensureFooterScript(ensureCss(replaceFooter(removeLabNav(replaceLogos(html)))));
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
