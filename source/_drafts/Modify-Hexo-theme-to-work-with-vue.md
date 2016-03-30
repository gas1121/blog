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

## 参考资源
[hexo增加math的显示](http://ranler.github.io/2013/12/31/hexo-math/)
[jQuery官方文档](http://api.jquery.com/)