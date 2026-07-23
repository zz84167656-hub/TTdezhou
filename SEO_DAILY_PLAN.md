# PokerRookie 百度 SEO 每日执行计划

目标：每天稳定完成站点健康检查、百度链接提交、数据记录和内容推进，让百度持续发现并理解 PokerRookie 的内容主题。

## 每天只需要做什么

每天对 Codex 说：

```txt
执行SEO
```

我会执行：

1. 检查 `https://www.pokerrookie.top/`、`robots.txt`、`sitemap.xml` 和核心页面是否正常访问。
2. 检查 `sitemap.xml` 是否包含核心页面。
3. 调用百度普通收录 API 提交核心 URL 或当天新增 URL。
4. 生成当天日志到 `seo_logs/YYYY-MM-DD.md`。
5. 给出当天唯一重点内容任务。

## 后台需要你配合记录的数据

百度后台登录态在内置浏览器里有时不会稳定保留，所以每天执行后，如果你方便，打开百度搜索资源平台记录这 4 个数：

```txt
索引量
抓取频次
抓取异常
流量与关键词
```

这些数据填到当天生成的 `seo_logs/YYYY-MM-DD.md` 里即可。

## URL 提交规则

默认提交核心页面：

```txt
https://www.pokerrookie.top/
https://www.pokerrookie.top/download.html
https://www.pokerrookie.top/free.html
https://www.pokerrookie.top/about.html
```

如果当天新增了文章页，把新 URL 放到本地文件 `seo_submit_queue.txt`，一行一个。脚本会优先提交这个文件里的 URL。

示例：

```txt
https://www.pokerrookie.top/articles/poker-position-guide.html
https://www.pokerrookie.top/articles/gto-plus-guide.html
```

提交完成后，可以清空 `seo_submit_queue.txt`。

## 每周节奏

周一：选 3 个长尾关键词，确定本周文章标题。  
周二：新增或完善 1 篇教学文章。  
周三：优化首页和文章内链。  
周四：新增或完善 1 篇工具文章。  
周五：做外链，优先 B站、知乎、公众号、KOOK 群公告。  
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
8. 德州扑克常见错误：为什么你总是在转牌亏钱

## 判断是否有效

先看这几个趋势，不要只看当天有没有排名：

```txt
百度抓取频次是否从 0 开始增长
索引量是否从 0 到 4+
site:www.pokerrookie.top 是否能搜到核心页面
是否有长尾词展现
是否持续有外部入口链接进站
```

SEO 起效通常按周计算，不按天计算。每天执行的意义是让百度持续收到“这个站在更新、结构稳定、内容有主题”的信号。
