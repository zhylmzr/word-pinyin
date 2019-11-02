# word-pinyin
[![Build Status](https://img.shields.io/travis/zhylmzr/word-pinyin/master?style=flat-square)](https://travis-ci.org/zhylmzr/word-pinyin)
[![npm](https://img.shields.io/npm/v/word-pinyin?style=flat-square)](https://www.npmjs.com/package/word-pinyin)
[![size](https://img.shields.io/bundlephobia/min/word-pinyin?style=flat-square)](https://bundlephobia.com/result?p=word-pinyin)
[![download](https://img.shields.io/npm/dw/word-pinyin?style=flat-square)](https://npmcharts.com/compare/word-pinyin)

Node端汉字转拼音库, 针对小程序设计, 不支持多音字

# 安装
```js
yarn add word-pinyin
```

# 例子
```js
import PinYin from "word-pinyin";

PinYin.getPinyin("你好骚啊") // ni hao sao a
PinYin.getFirstLetter("你好骚啊") // NHSA
```

# 方法
**getPinyin(chinese: string, splitter: string = ' ') 获取汉字的拼音**
- cinese: 汉字
- splitter: 字与字之间的分隔符

**getFirstLetter(str: string) 获取汉字的拼音首字母**
- str: 汉字

# 感谢
- [pinyinjs](https://github.com/sxei/pinyinjs)