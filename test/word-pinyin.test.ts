import PinYin from "../src/word-pinyin";

test("get first letter", () => {
    expect(PinYin.getFirstLetter("你好骚啊")).toBe("NHSA");
});

test("get word's pinyin", () => {
    expect(PinYin.getPinyin("你好骚啊")).toBe("ni hao sao a");
});

test(`get word's pinyin to use ", "`, () => {
    expect(PinYin.getPinyin("你好骚啊", ", ")).toBe("ni, hao, sao, a");
});
