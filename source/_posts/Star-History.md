---
title: Star History
tags:
  - Lab
categories:
  - Lab
date: 2016-05-22 22:56:52
---

受[timqian/star-history](https://github.com/timqian/star-history)项目的启发，做了一个Python的版本练手。
<!-- more -->
Server端用Nginx+supervisor+gunicorn简单配置服务器，然后使用flask+flask-resuful搭建restful服务。
前端方面基本参考原项目，使用JavaScript的nvd3库进行绘制。
更新1：Github API对查询数量进行了限制，因此像bootstrap这样star数爆表的项目只能取到前面一部分数据。
{% raw %}
<star-history-component></star-history-component>
<script src="/js/custom/build/starHistory.bundle.js"></script>
{% endraw %}