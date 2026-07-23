# PokerRookie 百度 SEO 每日执行清单

目标：每天稳定给百度释放“站点可访问、结构稳定、内容持续更新”的信号。你只需要对 Codex 说：

```txt
执行SEO
```

我会按下面 8 项执行。

## 每日 8 项

1. 检查 `https://www.pokerrookie.top/`、`robots.txt`、`sitemap.xml` 和核心页面是否可访问。
2. 检查 `robots.txt` 是否正确指向 sitemap。
3. 检查 `sitemap.xml` 是否包含首页、下载页、视频教学页、实用工具页和新增文章页。
4. 优先读取 `seo_submit_queue.txt`，有新增页面时只提交新增 URL，避免浪费百度普通收录额度。
5. 调用百度普通收录 API 推送 URL。
6. 生成当天执行日志到 `seo_logs/YYYY-MM-DD.md`。
7. 完成当天 1 个内容推进动作，例如新增或完善一篇教学/工具/复盘文章。
8. 通过校验后提交并推送 GitHub，等待 Cloudflare Pages 自动部署。

## 默认提交 URL

```txt
https://www.pokerrookie.top/
https://www.pokerrookie.top/download.html
https://www.pokerrookie.top/free.html
https://www.pokerrookie.top/about.html
```

如果当天新增页面，把新 URL 放到本地文件 `seo_submit_queue.txt`，一行一个。脚本会优先提交这个文件里的链接。

## 每周内容节奏

周一：选 3 个长尾关键词，确定本周文章标题。
周二：新增或完善 1 篇教学文章。
周三：优化首页和文章内链。
周四：新增或完善 1 篇工具文章。
周五：做外链，把网站放到 B 站简介、视频简介、知乎、公众号或 KOOK 群公告。
周六：新增或完善 1 篇实战复盘文章。
周日：复盘百度后台数据。

## 优先内容方向

1. 德州扑克新手入门：位置、范围和底池赔率
2. PokerRookie 视频教学合集
3. GTO+ 使用教程
4. PioSolver 入门指南
5. 德州扑克实战复盘：河牌该不该诈唬
6. GG扑克 long999 注册教程
7. 奥马哈和德州扑克有什么区别
8. 德州扑克常见错误：为什么总是在转牌亏钱

## 判断是否有效

不要只看当天排名，先看趋势：

```txt
百度抓取频次是否从 0 开始增长
索引量是否从 0 到 4+
site:www.pokerrookie.top 是否能搜到核心页面
是否开始有长尾词展现
是否持续有外部入口链接进站
```

SEO 起效通常按周计算，不按天计算。每天执行的意义是让百度持续收到稳定信号。
