# word-pinyin
Node端汉字转拼音库

# 安装
`yarn add word-pinyin`

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
[pinyinjs](https://github.com/sxei/pinyinjs)