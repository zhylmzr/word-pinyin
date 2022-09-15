import PinYin from "../word-pinyin";

test("get first letter", () => {
    expect(PinYin.getFirstLetter("孙先生")).toBe("SXS");
});

test("get word's pinyin", () => {
    expect(PinYin.getPinyin("孙先生")).toBe("sun xian sheng");
});

test(`get word's pinyin to use ", "`, () => {
    expect(PinYin.getPinyin("孙先生", ", ")).toBe("sun, xian, sheng");
});

test(`宁 word`, () => {
    expect(PinYin.getPinyin("宁")).toBe("ning");
    expect(PinYin.getFirstLetter("宁")).toBe("N");
});