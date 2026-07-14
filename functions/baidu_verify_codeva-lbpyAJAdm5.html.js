export function onRequest() {
  return new Response("5ffa392fa839aae0b97b04bca2312fb4", {
    headers: {
      "content-type": "text/html; charset=utf-8",
      "cache-control": "public, max-age=0, must-revalidate"
    }
  });
}
