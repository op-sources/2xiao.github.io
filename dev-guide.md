# dev guide

## 1. 前期准备

- git
- [nodejs](https://nodejs.org/en/download)

## 2. 拉取代码

```
git clone git@github.com:2xiao/2xiao.github.io.git
```

## 3. 安装依赖

```
cd 2xiao.github.io

npm i
```

## 4. 本地调试

```
npm run dev
```

## 5. 使用脚本更新 LeetCode 题解统计

安装 [python 3](https://www.python.org/downloads/)

安装 pandas

```
pip3 install pandas
```

运行爬虫

```
npm run spider
```

运行脚本

```
npm run lc
```

## 6. 线上部署

`git push origin master` 后自动部署到 `gh-pages` 分支。
