declare const _default: {
    /**
     * 根据汉字获取拼音，如果不是汉字直接返回原字符
     * @param chinese 要转换的汉字
     * @param splitter 分隔字符，默认用空格分隔
     */
    getPinyin: (chinese: string, splitter?: string) => string;
    /**
     * 获取汉字的拼音首字母
     * @param str 汉字字符串，如果遇到非汉字则原样返回
     */
    getFirstLetter: (str: string) => string;
};
export default _default;
