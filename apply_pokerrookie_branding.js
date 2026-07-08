const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

const root = __dirname;
const assetsDir = path.join(root, "assets");
const htmlFiles = [
  "index.html",
  "travis-poker.html",
  "download.html",
  "free.html",
  "about.html",
  "lab.html"
];

function versionedAsset(fileName) {
  const filePath = path.join(assetsDir, fileName);
  const version = fs.existsSync(filePath)
    ? crypto.createHash("sha1").update(fs.readFileSync(filePath)).digest("hex").slice(0, 8)
    : "missing";

  return `assets/${fileName}?v=${version}`;
}

const logoSrc = versionedAsset("pokerrookie-logo.png");

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
.pokerrookie-email-link {
  display: inline-flex !important;
  align-items: center !important;
  gap: 8px;
}
.pokerrookie-email-link:hover .pokerrookie-email-label {
  color: #1aad19;
}
.pokerrookie-email-icon {
  display: inline-flex;
  width: 20px;
  height: 20px;
  flex: 0 0 20px;
  color: #1aad19;
}
.pokerrookie-email-icon svg {
  display: block;
  width: 100%;
  height: 100%;
  fill: none;
  stroke: currentColor;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
}
.pokerrookie-email-label {
  transition: color 160ms ease;
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
.pokerrookie-hero-title-link {
  display: flex !important;
  align-items: center;
  justify-content: center;
  width: min(92vw, 920px);
  max-width: 100%;
  margin: 18px auto 0;
  line-height: 0;
  text-decoration: none !important;
  cursor: pointer;
  transition: transform 160ms ease, filter 160ms ease;
}
.pokerrookie-hero-title-link:hover {
  transform: translateY(-2px);
  filter: drop-shadow(0 10px 18px rgba(239, 63, 63, 0.16));
}
.pokerrookie-hero-title-link:focus-visible {
  outline: 3px solid rgba(239, 63, 63, 0.35);
  outline-offset: 8px;
  border-radius: 8px;
}
.pokerrookie-hero-slogan {
  display: block;
  width: 100%;
  max-width: 100%;
  height: auto;
  object-fit: contain;
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
.gg-hero-img-card {
  padding: 10px !important;
  background: linear-gradient(145deg, #ffffff 0%, #fff7e6 100%) !important;
  border-color: rgba(242, 185, 75, 0.42) !important;
}
.gg-event-img {
  border-radius: 24px !important;
  box-shadow: 0 20px 50px rgba(65, 20, 95, 0.18);
}
.gg-prize-box {
  display: flex !important;
  min-height: 96px;
  padding: 17px 16px 18px !important;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
}
.gg-prize-label {
  display: inline-flex !important;
  align-items: center;
  justify-content: center;
  margin-top: 0 !important;
  padding: 5px 10px;
  border-radius: 999px;
  background: rgba(232, 67, 59, 0.08);
  color: #e8433b !important;
  font-size: 12px !important;
  font-weight: 900;
  line-height: 1 !important;
  letter-spacing: 0.08em;
}
.gg-prize-box strong {
  max-width: 260px;
  font-size: 19px !important;
  line-height: 1.24 !important;
  letter-spacing: -0.02em;
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
    min-width: 0;
    flex: 0 1 auto;
  }
  .navbar2_logo.pokerrookie-nav-logo {
    width: clamp(142px, 45vw, 176px) !important;
    max-width: calc(100vw - 112px) !important;
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
  .gg-prize-box {
    min-height: 92px;
  }
  .gg-prize-box strong {
    max-width: 100%;
    font-size: 18px !important;
    line-height: 1.28 !important;
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
const heroTitleLink = `<a href="download.html" class="pokerrookie-hero-title-link w-inline-block" aria-label="下载游戏"><img class="pokerrookie-hero-slogan" src="assets/sologan.webp" alt="和PokerRookie一起游戏" loading="eager"/></a>`;
const bilibiliLink = `<a href="https://space.bilibili.com/443284341?spm_id_from=333.337.0.0" class="pokerrookie-bili-link w-inline-block"><span>访问 PokerRookie 的 Bilibili 主页</span></a>`;

const newEmail = "23294069@qq.com";
const wechatId = "liuyao3643";
const inviteCode = "long999";
const kookUrl = "https://kook.vip/cyBSvz";
const ggDownloadUrl = "http://playgg8.fun/long999";
const downloadPromoAsset = "assets/pokerrookie-download-promo.png?v=provided-a2da111";
const videoTeachingGroups = [
  {
    title: "WSOP",
    kicker: "世界大赛精选",
    image: "https://images.unsplash.com/photo-1670251400844-26c200b75a0f?auto=format&fit=crop&w=1200&q=75",
    links: [
      ["2022WSOP金手链系列赛", "https://space.bilibili.com/443284341/lists/459974?type=season"],
      ["2022WSOP主赛", "https://space.bilibili.com/443284341/lists/483527?type=season"],
      ["2023WSOP金手链系列赛", "https://space.bilibili.com/443284341/lists/1346652?type=season"],
      ["2023WSOP主赛", "https://space.bilibili.com/443284341/lists/1346654?type=season"],
      ["2024WSOP金手链系列赛", "https://space.bilibili.com/443284341/lists/3083053?type=season"],
      ["2024WSOP主赛", "https://space.bilibili.com/443284341/lists/3083049?type=season"]
    ]
  },
  {
    title: "HighStakesPoker",
    kicker: "高额桌经典季",
    image: "https://images.unsplash.com/photo-1518133120397-258d5eb470c6?auto=format&fit=crop&w=1200&q=75",
    links: [
      ["第九季", "https://space.bilibili.com/443284341/lists/210103?type=season"],
      ["第十季", "https://space.bilibili.com/443284341/lists/1050475?type=season"],
      ["第十一季", "https://space.bilibili.com/443284341/lists/1619024?type=season"],
      ["第十二季", "https://space.bilibili.com/443284341/lists/2241967?type=season"],
      ["第十三季", "https://space.bilibili.com/443284341/lists/3512657?type=season"],
      ["第十五季", "https://space.bilibili.com/443284341/lists/7002894?type=season"],
      ["第十六季", "https://space.bilibili.com/443284341/lists/8204354?type=season"]
    ]
  },
  {
    title: "Hustler Casino Live",
    kicker: "直播名局复盘",
    image: "https://images.unsplash.com/photo-1512767254318-423c816efbf3?auto=format&fit=crop&w=1200&q=75",
    links: [
      ["超高额之周S1", "https://space.bilibili.com/443284341/lists/657555?type=season"],
      ["超高额之周S2", "https://space.bilibili.com/443284341/lists/939271?type=season"],
      ["超高额之周S3", "https://space.bilibili.com/443284341/lists/1926352?type=season"],
      ["超高额之周S4", "https://space.bilibili.com/443284341/lists/3908974?type=season"],
      ["百万之战S1", "https://space.bilibili.com/443284341/lists/1375868?type=season"],
      ["百万之战S2", "https://space.bilibili.com/443284341/lists/3090012?type=season"]
    ]
  },
  {
    title: "传奇扑克",
    kicker: "现金桌与锦标赛",
    image: "https://images.unsplash.com/photo-1518133196839-3aa1219f671d?auto=format&fit=crop&w=1200&q=75",
    links: [
      ["2023传奇扑克现金桌", "https://space.bilibili.com/443284341/lists/1417811?type=season"],
      ["2024传奇扑克现金桌", "https://space.bilibili.com/443284341/lists/2178695?type=season"],
      ["2026传奇扑克现金桌", "https://space.bilibili.com/443284341/lists/7978305?type=season"],
      ["传奇扑克百万之战", "https://space.bilibili.com/443284341/lists/1626314?type=season"],
      ["传奇扑克锦标赛", "https://space.bilibili.com/443284341/lists/2995673?type=season"],
      ["2022塞浦路斯站系列赛", "https://space.bilibili.com/443284341/lists/307946?type=season"],
      ["2022塞浦路斯站主赛", "https://space.bilibili.com/443284341/lists/709807?type=season"],
      ["2022马德里站系列赛", "https://space.bilibili.com/443284341/lists/410912?type=season"],
      ["2023越南站主赛", "https://space.bilibili.com/443284341/lists/1185327?type=season"],
      ["百万传奇", "https://space.bilibili.com/443284341/lists/62809?type=season"]
    ]
  },
  {
    title: "PokerRookie精选",
    kicker: "实战与闲聊合集",
    image: "https://images.unsplash.com/photo-1719228159232-48608b807a58?auto=format&fit=crop&w=1200&q=75",
    links: [
      ["PokerRookie的扑克之旅", "https://space.bilibili.com/443284341/lists/6881653?type=season"],
      ["GG扑克超级百万赛", "https://space.bilibili.com/443284341/lists/488529?type=season"],
      ["闲聊扑克", "https://space.bilibili.com/443284341/lists/4098922?type=season"],
      ["好好学习，天天向上", "https://space.bilibili.com/443284341/lists/2522815?type=season"],
      ["GG扑克实战", "https://space.bilibili.com/443284341/lists/2566567?type=season"]
    ]
  }
];
const practicalToolGroups = [
  {
    title: "实战模拟类",
    subtitle: "低成本试错神器",
    accent: "#ef4444",
    tools: [
      {
        name: "GTO+",
        tag: "付费 / 专业向",
        mark: "GTO",
        summary: "高级GTO计算软件，适合进阶玩家和职业牌手，能模拟各种场景的最优策略。",
        highlight: "解算GTO策略的神器，职业牌手训练标配。",
        quote: "第一次看到自己的决策偏离GTO 40%时，血压直接飙升"
      },
      {
        name: "PioSolver",
        tag: "职业级GTO训练神器",
        mark: "PIO",
        summary: "职业牌手公认最强的GTO策略求解软件，支持深度翻前翻后模拟。",
        highlight: "可构建超复杂决策树，支持多街bet尺寸、不同对手类型，并用EV差异热力图直观显示策略漏洞。",
        quote: "打开它的第一天，我发现自己过去三年打的德州都是玄学..."
      }
    ]
  },
  {
    title: "AI训练类",
    subtitle: "拥有属于你的德扑私教",
    accent: "#2563eb",
    tools: [
      {
        name: "ALPHAX",
        tag: "付费 / 免费试用",
        mark: "AI",
        summary: "全球首款多人实时GTO解算AI，基于Pluribus大模型开发。",
        highlight: "线上训练AI助手，实时输出EV值、牌力评估、对手漏洞分析，兼容各大主流平台实战应用。",
        quote: "开着AlphaX打训练赛，就像考试带了计算器还提前看了答案"
      },
      {
        name: "PokerSnowie",
        tag: "付费",
        mark: "SNW",
        summary: "AI驱动的德州扑克训练软件，模拟真实对局并提供实时反馈，帮助修正错误决策。",
        highlight: "AI实时纠正你的决策错误，适合纠正直觉流玩家的漏洞。",
        quote: "被AI骂了3个月后，我终于明白为什么河牌不该bluff..."
      }
    ]
  },
  {
    title: "数据分析类",
    subtitle: "把玄学变成科学",
    accent: "#0f766e",
    tools: [
      {
        name: "Hand2Note",
        tag: "付费 / 免费试用",
        mark: "H2N",
        summary: "实时HUD（平视显示）数据分析工具，帮助你在对局中洞悉对手弱点。",
        highlight: "实时统计对手数据，如加注率、跟注率等，并自动标记过度诈唬、跟注站等对手漏洞。",
        quote: "它让我发现俱乐部总赢分的老王，翻前加注率居然高达38%！"
      },
      {
        name: "PokerTracker 4",
        tag: "经典款",
        mark: "PT4",
        summary: "老牌扑克数据分析软件，适用于长期复盘和策略优化。",
        highlight: "百万手牌数据库，深度分析个人数据。和Hand2Note二选一就行，新手建议后者。",
        quote: "把每一次感觉，都变成可以复盘的数据"
      }
    ]
  }
];
const prizeStrip = `<div class="gg-prize-strip">
    <div class="gg-prize-box">
      <span class="gg-prize-label">赛事权益</span>
      <strong>每月高额保底战队赛免费参与</strong>
    </div>
    <div class="gg-prize-box">
      <span class="gg-prize-label">现金奖励</span>
      <strong>每月现金奖励上不封顶</strong>
    </div>
    <div class="gg-prize-box">
      <span class="gg-prize-label">新人礼包</span>
      <strong>新玩家免费送赏金赛门票</strong>
    </div>
  </div>`;
const emailLink = `<a href="mailto:${newEmail}" class="link-block pokerrookie-email-link w-inline-block"><span class="pokerrookie-email-icon" aria-hidden="true"><svg viewBox="0 0 24 24" focusable="false"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg></span><span class="text-block-34 pokerrookie-email-label">${newEmail}</span></a>`;
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

function renderVideoTeachingLinks(links) {
  return links.map(([label, url]) => `<a class="pr-video-link" href="${url}" target="_blank" rel="noopener"><span>${label}</span><span aria-hidden="true">↗</span></a>`).join("");
}

function renderVideoTeachingCards() {
  return videoTeachingGroups.map((group) => `<article class="pr-video-card">
    <div class="pr-video-cover" style="background-image:linear-gradient(180deg, rgba(8, 10, 15, 0.08), rgba(8, 10, 15, 0.68)), url('${group.image}');">
      <div class="pr-video-kicker">${group.kicker}</div>
      <h3>${group.title}</h3>
    </div>
    <div class="pr-video-links">
      ${renderVideoTeachingLinks(group.links)}
    </div>
  </article>`).join("");
}

const videoTeachingSection = `<div class="code-embed w-embed pokerrookie-video-teaching-embed"><section class="pr-video-section">
  <div class="pr-video-inner">
    <div class="pr-video-head">
      <div class="pr-video-label">免费资源</div>
      <h2>视频教学</h2>
      <p>按系列整理 PokerRookie 的 B 站教学与实战复盘合集，选择你想看的系列直接跳转观看。</p>
    </div>
    <div class="pr-video-grid">
      ${renderVideoTeachingCards()}
    </div>
  </div>
</section>
<style>
.pr-video-section {
  padding: 6.5rem 5vw;
  background: #f4f7fb;
  color: #121620;
  font-family: -apple-system, BlinkMacSystemFont, "PingFang SC", "Microsoft YaHei", sans-serif;
}
.pr-video-inner {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
}
.pr-video-head {
  display: grid;
  gap: 1rem;
  max-width: 720px;
  margin-bottom: 2.5rem;
}
.pr-video-label {
  width: fit-content;
  padding: 0.45rem 0.85rem;
  border-radius: 999px;
  background: #111827;
  color: #fff;
  font-size: 0.82rem;
  font-weight: 800;
}
.pr-video-head h2 {
  margin: 0;
  color: #05070b;
  font-size: clamp(2.8rem, 6vw, 5rem);
  line-height: 0.98;
  font-weight: 950;
}
.pr-video-head p {
  margin: 0;
  color: #536070;
  font-size: 1.08rem;
  line-height: 1.8;
}
.pr-video-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.25rem;
}
.pr-video-card {
  overflow: hidden;
  border: 1px solid rgba(17, 24, 39, 0.1);
  border-radius: 18px;
  background: #fff;
  box-shadow: 0 18px 48px rgba(15, 23, 42, 0.08);
}
.pr-video-cover {
  display: flex;
  min-height: 220px;
  flex-direction: column;
  justify-content: flex-end;
  gap: 0.75rem;
  padding: 1.35rem;
  background-size: cover;
  background-position: center;
}
.pr-video-kicker {
  width: fit-content;
  padding: 0.38rem 0.75rem;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.88);
  color: #e5483f;
  font-size: 0.78rem;
  font-weight: 900;
}
.pr-video-cover h3 {
  margin: 0;
  color: #fff;
  font-size: clamp(1.7rem, 3vw, 2.35rem);
  line-height: 1;
  font-weight: 950;
  text-shadow: 0 8px 24px rgba(0, 0, 0, 0.42);
}
.pr-video-links {
  display: grid;
  gap: 0.6rem;
  padding: 1rem;
}
.pr-video-link {
  display: flex;
  min-height: 44px;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.78rem 0.9rem;
  border: 1px solid rgba(17, 24, 39, 0.08);
  border-radius: 12px;
  background: #f9fafb;
  color: #172033;
  font-size: 0.95rem;
  font-weight: 800;
  line-height: 1.35;
  text-decoration: none;
  transition: transform 160ms ease, border-color 160ms ease, background-color 160ms ease, color 160ms ease;
}
.pr-video-link:hover {
  transform: translateY(-1px);
  border-color: rgba(229, 72, 63, 0.32);
  background: #fff1ef;
  color: #df3f37;
}
@media (max-width: 900px) {
  .pr-video-section {
    padding: 4.5rem 1rem;
  }
  .pr-video-grid {
    grid-template-columns: 1fr;
  }
  .pr-video-cover {
    min-height: 190px;
  }
}
</style></div>`;

function renderPracticalToolCards(tools, accent) {
  return tools.map((tool) => `<article class="pr-tool-card" style="--tool-accent:${accent};">
      <div class="pr-tool-visual" aria-hidden="true"><span>${tool.mark}</span></div>
      <div class="pr-tool-copy">
        <div class="pr-tool-topline"><h4>${tool.name}</h4><span>${tool.tag}</span></div>
        <p>${tool.summary}</p>
        <div class="pr-tool-highlight"><strong>亮点</strong>${tool.highlight}</div>
        <blockquote>${tool.quote}</blockquote>
      </div>
    </article>`).join("");
}

function renderPracticalToolGroups() {
  return practicalToolGroups.map((group) => `<section class="pr-tool-group">
    <div class="pr-tool-group-head" style="--tool-accent:${group.accent};">
      <span>${group.title}</span>
      <h3>${group.subtitle}</h3>
    </div>
    <div class="pr-tool-list">
      ${renderPracticalToolCards(group.tools, group.accent)}
    </div>
  </section>`).join("");
}

const practicalToolsSection = `<div class="code-embed w-embed pokerrookie-practical-tools-embed"><section class="pr-tools-section">
  <div class="pr-tools-inner">
    <div class="pr-tools-head">
      <div class="pr-tools-label">免费资源</div>
      <h2>实用工具</h2>
      <p>从GTO解算、AI训练到HUD数据分析，把学习、试错和复盘拆成更可执行的训练流程。</p>
    </div>
    <div class="pr-tools-body">
      ${renderPracticalToolGroups()}
    </div>
  </div>
</section>
<style>
.pr-tools-section {
  padding: 6.5rem 5vw;
  background: #0d1117;
  color: #f8fafc;
  font-family: -apple-system, BlinkMacSystemFont, "PingFang SC", "Microsoft YaHei", sans-serif;
}
.pr-tools-inner {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
}
.pr-tools-head {
  display: grid;
  gap: 1rem;
  max-width: 760px;
  margin-bottom: 2.75rem;
}
.pr-tools-label {
  width: fit-content;
  padding: 0.45rem 0.85rem;
  border: 1px solid rgba(248, 250, 252, 0.16);
  border-radius: 999px;
  background: rgba(248, 250, 252, 0.08);
  color: #f97373;
  font-size: 0.82rem;
  font-weight: 900;
}
.pr-tools-head h2 {
  margin: 0;
  font-size: clamp(2.8rem, 6vw, 5rem);
  line-height: 0.98;
  font-weight: 950;
}
.pr-tools-head p {
  margin: 0;
  color: #b6c2d1;
  font-size: 1.08rem;
  line-height: 1.8;
}
.pr-tools-body {
  display: grid;
  gap: 1.5rem;
}
.pr-tool-group {
  display: grid;
  grid-template-columns: minmax(220px, 0.32fr) minmax(0, 1fr);
  gap: 1.25rem;
  align-items: start;
}
.pr-tool-group-head {
  position: sticky;
  top: 96px;
  padding: 1.35rem;
  border: 1px solid rgba(248, 250, 252, 0.12);
  border-radius: 18px;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.03));
}
.pr-tool-group-head span {
  display: inline-flex;
  margin-bottom: 0.9rem;
  padding: 0.36rem 0.72rem;
  border-radius: 999px;
  background: color-mix(in srgb, var(--tool-accent), transparent 82%);
  color: color-mix(in srgb, var(--tool-accent), white 24%);
  font-size: 0.78rem;
  font-weight: 900;
}
.pr-tool-group-head h3 {
  margin: 0;
  color: #fff;
  font-size: clamp(1.6rem, 3vw, 2.25rem);
  line-height: 1.06;
  font-weight: 950;
}
.pr-tool-list {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
}
.pr-tool-card {
  display: grid;
  grid-template-columns: 112px minmax(0, 1fr);
  gap: 1rem;
  min-height: 260px;
  padding: 1rem;
  border: 1px solid rgba(248, 250, 252, 0.12);
  border-radius: 18px;
  background: #151b24;
  box-shadow: 0 20px 48px rgba(0, 0, 0, 0.18);
}
.pr-tool-visual {
  display: flex;
  min-height: 100%;
  align-items: center;
  justify-content: center;
  border-radius: 14px;
  background:
    radial-gradient(circle at 30% 20%, rgba(255,255,255,0.24), transparent 28%),
    linear-gradient(145deg, color-mix(in srgb, var(--tool-accent), #111827 10%), #111827);
}
.pr-tool-visual span {
  color: #fff;
  font-size: 1.55rem;
  font-weight: 950;
}
.pr-tool-copy {
  display: grid;
  gap: 0.8rem;
  align-content: start;
}
.pr-tool-topline {
  display: grid;
  gap: 0.45rem;
}
.pr-tool-topline h4 {
  margin: 0;
  color: #fff;
  font-size: 1.35rem;
  line-height: 1.1;
  font-weight: 950;
}
.pr-tool-topline span {
  width: fit-content;
  padding: 0.32rem 0.58rem;
  border-radius: 999px;
  background: rgba(248, 250, 252, 0.08);
  color: #c7d2fe;
  font-size: 0.76rem;
  font-weight: 900;
}
.pr-tool-copy p {
  margin: 0;
  color: #cbd5e1;
  font-size: 0.94rem;
  line-height: 1.65;
}
.pr-tool-highlight {
  display: grid;
  gap: 0.35rem;
  padding: 0.75rem;
  border-radius: 12px;
  background: rgba(248, 250, 252, 0.06);
  color: #dbeafe;
  font-size: 0.9rem;
  line-height: 1.58;
}
.pr-tool-highlight strong {
  color: color-mix(in srgb, var(--tool-accent), white 28%);
  font-size: 0.78rem;
  letter-spacing: 0.08em;
}
.pr-tool-card blockquote {
  margin: 0;
  color: #94a3b8;
  font-size: 0.88rem;
  line-height: 1.65;
}
@media (max-width: 1060px) {
  .pr-tool-group {
    grid-template-columns: 1fr;
  }
  .pr-tool-group-head {
    position: static;
  }
}
@media (max-width: 760px) {
  .pr-tools-section {
    padding: 4.5rem 1rem;
  }
  .pr-tool-list {
    grid-template-columns: 1fr;
  }
  .pr-tool-card {
    grid-template-columns: 1fr;
    min-height: 0;
  }
  .pr-tool-visual {
    min-height: 108px;
  }
}
</style></div>`;

const freeResourceModules = `${videoTeachingSection}${practicalToolsSection}`;

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
    .replace(/<img\b(?=[^>]*class="[^"]*navbar2_logo[^"]*")[^>]*\/?>/g, `<img src="${logoSrc}" alt="PokerRookie" loading="lazy" class="navbar2_logo pokerrookie-nav-logo"/>`)
    .replace(/<img\b(?=[^>]*class="[^"]*pokerrookie-footer-logo[^"]*")[^>]*\/?>/g, `<img src="${logoSrc}" alt="PokerRookie" loading="lazy" class="pokerrookie-footer-logo"/>`)
    .replace(/<img\b(?=[^>]*69973e9728086fd6a49a2e06_travispoker-28)[^>]*\/?>/g, `<img src="${logoSrc}" alt="PokerRookie" loading="lazy" class="pokerrookie-footer-logo"/>`);
}

function removeLabNav(html) {
  return html.replace(/<a href="lab\.html"[^>]*class="navbar_link lab[^"]*"[^>]*>Poker LAB<\/a>/g, "");
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function replaceFooter(html) {
  const emailPattern = new RegExp(`<a href="mailto:${escapeRegExp(newEmail)}[^"]*" class="[^"]*link-block[^"]*"[^>]*>[\\s\\S]*?${escapeRegExp(newEmail)}[\\s\\S]*?</a>`, "g");

  return html
    .replace(/<div class="text-block-33">[\s\S]*?<\/div>/g, "")
    .replace(/<a href="mailto:travispoker2020@gmail\.com[^"]*" class="[^"]*link-block[^"]*"[^>]*>[\s\S]*?Travispoker2020@gmail\.com[\s\S]*?<\/a>/gi, emailLink)
    .replace(emailPattern, emailLink)
    .replace(/<button\b(?=[^>]*class="[^"]*pokerrookie-wechat-copy)[\s\S]*?<\/button>/g, wechatButton)
    .replace(/<a href="https:\/\/www\.youtube\.com\/@travispoker" target="_blank" class="link-block-2 w-inline-block">[\s\S]*?<\/a>/g, wechatButton)
    .replace(/<div class="text-block-32">(?:&copy;|\u00a9) 2026 (?:Travis Poker|PokerRookie)<\/div>/g, '<div class="text-block-32">\u00a9 2026 PokerRookie</div>');
}

function replaceBrandText(html) {
  return html
    .replace(/Travis\s*战队/g, "我的战队")
    .replace(/TravisPoker/g, "PokerRookie")
    .replace(/Travis Poker/g, "PokerRookie")
    .replace(/Travis/g, "PokerRookie");
}

function replaceDownloadContent(html) {
  return html
    .replace(/<img\b[^>]*class="gg-event-img"[^>]*>/g, `<img class="gg-event-img" src="${downloadPromoAsset}" alt="PokerRookie 战队多重福利海报">`)
    .replace(/<div class="gg-prize-strip">[\s\S]*?(?=\n\s*<div class="gg-grid">)/g, `${prizeStrip}\n\n  `)
    .replace(/https:\/\/ggpuke888\.com\/travispoker/g, ggDownloadUrl)
    .replace(/https:\/\/t\.me\/travispoker/g, kookUrl)
    .replace(/加入\s*TG\s*群/g, "加入KOOK群")
    .replace(/加入飞机群组/g, "加入KOOK群")
    .replace(/TRAVISPOKER/g, inviteCode)
    .replace(/<strong>18,888 CNY<\/strong>\s*<span>战队福利赛保底<\/span>/g, "<strong>每月高额保底战队赛免费参与</strong>")
    .replace(/<strong>6月13日<\/strong>\s*<span>北京时间 20:00<\/span>/g, "<strong>每月现金奖励上不封顶</strong>")
    .replace(/<strong>新人可参加<\/strong>\s*<span>有效供水玩家限定<\/span>/g, "<strong>新玩家免费送赏金赛门票</strong>")
    .replace(/如果你已经下载过游戏，重新注册时必须填写 <strong>long999<\/strong> 折扣码，才能加入 (?:Travis|PokerRookie|我的) 战队。/g, "如果你已经下载过游戏，重新注册时必须填写 <strong>long999</strong> 折扣码，才能加入我的战队。")
    .replace(/<span>① 四条9\+ \/ 同花顺：送1买入（每月5次）<\/span><br>\s*<span>② 锦标赛进 FT：送100红包（每月5次）<\/span>/g, "<span>1.击中四条及以上牌型可获得一个买入，无限领取</span><br>\n        <span>2.新用户注册可获赠赏金赛门票</span><br>\n        <span>3.新用户完成首存再加赠一张门票</span>");
}

function replaceFreeContent(html) {
  return html.replace(/<div class="code-embed w-embed(?: w-iframe| pokerrookie-video-teaching-embed| pokerrookie-practical-tools-embed)?"><section[\s\S]*?(?=<\/main>)/, freeResourceModules);
}

const improveCardPattern = /<div class="choice-card is-red"><div class="card-badge">适合想认真提升的人<\/div>[\s\S]*?<div class="card-note">适合想长期提升的玩家<\/div><\/div>/g;

function replaceHome(html) {
  return html
    .replace(/<a\b(?=[^>]*class="[^"]*pokerrookie-bili-link)[\s\S]*?<\/a>/g, "")
    .replace(/<a\b(?=[^>]*class="[^"]*pokerrookie-hero-title-link)[\s\S]*?<\/a>\s*/g, "")
    .replace(/<div class="text-block-40">欢迎你的加入<br\/><\/div>\s*/g, "")
    .replace(/<div class="text-block-40">和PokerRookie一起游戏<br\/><\/div>\s*/g, "")
    .replace(/<div class="eyebrow-line"><\/div>/g, `<div class="eyebrow-line"></div>${heroTitleLink}${bilibiliLink}`)
    .replace(/<div class="choice-card is-red is-green">[\s\S]*?<div class="choice-card is-red">/, `${profileCard}<div class="choice-card is-red">`)
    .replace(improveCardPattern, "");
}

for (const fileName of htmlFiles) {
  const filePath = path.join(root, fileName);
  let html = fs.readFileSync(filePath, "utf8");
  html = ensureFooterScript(ensureCss(replaceFooter(removeLabNav(replaceLogos(html)))));
  if (fileName === "download.html") {
    html = replaceDownloadContent(html);
  }
  if (fileName === "free.html") {
    html = replaceFreeContent(html);
  }
  if (fileName === "index.html" || fileName === "travis-poker.html") {
    html = replaceHome(html);
  }
  html = replaceBrandText(html);
  fs.writeFileSync(filePath, html, "utf8");
  console.log(`Applied PokerRookie branding to ${fileName}`);
}

const profilePath = path.join(root, "assets", "pokerrookie-profile.jpg");
if (!fs.existsSync(profilePath)) {
  console.warn("Missing assets/pokerrookie-profile.jpg. Save the provided profile photo there before final verification.");
}
