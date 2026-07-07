const http = require("http");
const fs = require("fs");
const path = require("path");

const root = __dirname;
const port = Number(process.env.PORT || 4177);
const host = process.env.HOST || "127.0.0.1";

const mime = {
  ".html": "text/html; charset=utf-8",
  ".md": "text/markdown; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml"
};

const server = http.createServer((req, res) => {
  try {
    const url = new URL(req.url, `http://${host}:${port}`);
    let filePath = path.normalize(path.join(root, decodeURIComponent(url.pathname)));
    const normalizedRoot = path.normalize(root);

    if (!filePath.startsWith(normalizedRoot)) {
      res.writeHead(403);
      res.end("Forbidden");
      return;
    }

    if (url.pathname === "/") {
      filePath = path.join(root, "index.html");
    } else if (!path.extname(filePath)) {
      const routeName = url.pathname.replace(/^\/+/, "");
      filePath = path.join(root, `${routeName}.html`);
    }

    fs.readFile(filePath, (error, data) => {
      if (error) {
        res.writeHead(404);
        res.end("Not found");
        return;
      }

      res.writeHead(200, {
        "Content-Type": mime[path.extname(filePath).toLowerCase()] || "application/octet-stream"
      });
      res.end(data);
    });
  } catch (error) {
    res.writeHead(500);
    res.end(error && error.message ? error.message : String(error));
  }
});

server.listen(port, host, () => {
  console.log(`Serving Travis Poker page at http://${host}:${port}/travis-poker.html`);
});
