---
title: Use CircleCI to auto deploy github pages
tags:
 - Hexo
 - Continuous integration
categories:
 - Programming
---
尝试了一下用Circle CI来进行blog更新时的自动部署，虽然看着还算简单也有现成的参考不过实际上做的时候还是才了点坑。
<!-- more -->
### CI平台的选择
##### Travis CI 和 Circle CI间的选择
+ Travis CI 需要安装ruby命令行工具来对github token进行加密
+ Circle CI 每月1200小时应该够用
+ （据说）Circle CI速度要快不少

### 开始实现自动部署
##### 未采用的另一种办法
在同一github项目中采用不同分支的方式进行推送开发，不需要额外token
##### 具体过程
+ 注册Circle CI
关联网站项目
+ 添加circle.yml配置
```
deployment:
  production:
    branch: master
    commands:
      - git config --global user.name "CircleCI"
      - git config --global user.email "noone@okcsharp.net"
      - sed -i'' "s~https://github.com/yourName/yourRepo.github.io~https://${GH_TOKEN}:x-oauth-basic@github.com/yourName/yourRepo.github.io.git~" _config.yml
      - git clone https://github.com/yourName/yourRepo.github.io .deploy_git
      - hexo clean
      - hexo generate
      - hexo deploy
```
+ token环境变量设置
+ 保持网站commit历史记录
.deploy_git文件夹
官方网站项目中学到的 git clone 方法
+ 插曲，主题上传问题
submodule问题
git rm --cached path_to_submodule


## 参考资源
+ [CircleCI 自动部署教程](http://teapotcoder.com/post/automating-static-sites-with-hexo-io-circleci-and-github-pages/ "CircleCI配置参考")
+ [CircleCI 环境变量设置](https://circleci.com/docs/environment-variables#custom "官方文档")
+ [Hexo官网的Travis CI执行脚本](https://github.com/hexojs/site/blob/master/.travis/deploy.sh)
+ [单一repo下使用CircleCI 自动部署](http://blog.otakumode.com/2014/08/08/Blogging-with-hexoio/)