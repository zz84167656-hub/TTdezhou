const fs = require("fs");
const path = require("path");

const root = __dirname;
const origin = "https://www.travispoker.com";
const routes = [
  { route: "/", file: "index.html" },
  { route: "/download", file: "download.html" },
  { route: "/free", file: "free.html" },
  { route: "/about", file: "about.html" },
  { route: "/lab", file: "lab.html" }
];

const localRouteMap = {
  "/": "index.html",
  "/download": "download.html",
  "/free": "free.html",
  "/about": "about.html",
  "/lab": "lab.html"
};

function normalizeRoute(value) {
  if (!value) return value;
  let route = value;
  if (route.startsWith(origin)) {
    route = route.slice(origin.length) || "/";
  }
  route = route.replace(/\/$/, "") || "/";
  return localRouteMap[route] || value;
}

function patchInternalLinks(html) {
  return html.replace(/\bhref=(["'])(https:\/\/www\.travispoker\.com(?:\/(?:download|free|about|lab)\/?|\/?)|\/(?:download|free|about|lab)\/?|\/)\1/g, (_match, quote, href) => {
    return `href=${quote}${normalizeRoute(href)}${quote}`;
  });
}

async function fetchPage(route) {
  const response = await fetch(`${origin}${route}`, {
    headers: {
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/126 Safari/537.36"
    }
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch ${route}: HTTP ${response.status}`);
  }

  return response.text();
}

async function main() {
  for (const item of routes) {
    const html = await fetchPage(item.route);
    const patched = patchInternalLinks(html);
    fs.writeFileSync(path.join(root, item.file), patched, "utf8");
    console.log(`Wrote ${item.file}`);
  }

  fs.copyFileSync(path.join(root, "index.html"), path.join(root, "travis-poker.html"));
  console.log("Wrote travis-poker.html");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
