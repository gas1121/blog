---
title: Modify Hexo theme to work with vue
tags:
 - Hexo
 - Vue.js
 - Javascript
categories:
 - Programming
---
修改Hexo使之能够发布支持Vue.js实现的单页应用的文章。
<!-- More -->

首先使用jQuery提供的api进行获取的html文本的解析以及元素的替换
```
$('<div/>').append(response.data)
$('main').replaceWith(receivedHTML.find('main'));
```
由于对前端了解不多，绕了弯路。。。
挂载位置需要放在页面尾部防止无法找到元素
弃用了vue-router
以为需要改造链接来防止跳转，其实不需要

## 参考资源
[hexo增加math的显示](http://ranler.github.io/2013/12/31/hexo-math/)
[jQuery官方文档](http://api.jquery.com/)
[防止链接直接跳转](https://github.com/vuejs/vue-router/issues/48)
[page.js](https://github.com/visionmedia/page.js)
[vue-resource:http](https://github.com/vuejs/vue-resource/blob/master/docs/http.md)