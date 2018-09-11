const jsUtils = require("..");

describe("测试jsUtils", () => {
  it("isEmpty", () => {
    expect(jsUtils.isEmpty(0)).toBeFalsy();
    expect(jsUtils.isEmpty("")).toBeTruthy();
    expect(jsUtils.isEmpty("0")).toBeFalsy();
    expect(jsUtils.isEmpty(undefined)).toBeTruthy();
    expect(jsUtils.isEmpty(null)).toBeTruthy();
    expect(jsUtils.isEmpty("ss")).not.toBeTruthy();
  });

  it("验证是否为100的整数倍", () => {
    expect(jsUtils.isHundred(0)).toBeTruthy();
    expect(jsUtils.isHundred(101)).toBeFalsy();
    expect(jsUtils.isHundred(200)).toBeTruthy();
    expect(jsUtils.isHundred("0")).toBeTruthy();
    expect(jsUtils.isHundred("200")).toBeTruthy();
    expect(jsUtils.isHundred("100d")).toBeFalsy();
    expect(jsUtils.isHundred("100d00")).toBeFalsy();
    expect(jsUtils.isHundred("00100")).toBeTruthy();
    expect(jsUtils.isHundred("1200dd")).toBeFalsy();
  });

  it("验证是否为数字，支持小数点的", () => {
    expect(jsUtils.isDigit(0)).toBeTruthy();
    expect(jsUtils.isDigit(12)).toBeTruthy();
    expect(jsUtils.isDigit(0.34)).toBeTruthy();
    expect(jsUtils.isDigit(12.3)).toBeTruthy();
    expect(
      jsUtils.isDigit(12.388888888888888888888888888888888888888888888)
    ).toBeTruthy();
    expect(jsUtils.isDigit("12")).toBeTruthy();
    expect(jsUtils.isDigit("12.34")).toBeTruthy();
    expect(jsUtils.isDigit("12.3.4.5")).toBeFalsy();
    expect(jsUtils.isDigit("0.345")).toBeTruthy();
    expect(jsUtils.isDigit(".345")).toBeFalsy();
    expect(jsUtils.isDigit("ddd")).toBeFalsy();
    expect(jsUtils.isDigit("3de")).toBeFalsy();
    expect(jsUtils.isDigit("3d4")).toBeFalsy();
    expect(jsUtils.isDigit("3drr4")).toBeFalsy();
    expect(jsUtils.isDigit("")).toBeFalsy();
    expect(jsUtils.isDigit(null)).toBeFalsy();
    expect(jsUtils.isDigit(undefined)).toBeFalsy();
  });

  it("验证是否为数字，不支持小数点", () => {
    expect(jsUtils.isInteger(0)).toBeTruthy();
    expect(jsUtils.isInteger(100)).toBeTruthy();
    // expect(jsUtils.isInteger(100.0)).toBeFalsy();
    expect(jsUtils.isInteger(100.2)).toBeFalsy();
    expect(jsUtils.isInteger(100.0111)).toBeFalsy();
    expect(jsUtils.isInteger("10")).toBeTruthy();
    expect(jsUtils.isInteger("10.0")).toBeFalsy();
    expect(jsUtils.isInteger("ddd")).toBeFalsy();
    expect(jsUtils.isInteger("11ddd")).toBeFalsy();
    expect(jsUtils.isInteger("11d23")).toBeFalsy();
    expect(jsUtils.isInteger("11dd45")).toBeFalsy();
    expect(jsUtils.isDigit("")).toBeFalsy();
    expect(jsUtils.isDigit(null)).toBeFalsy();
    expect(jsUtils.isDigit(undefined)).toBeFalsy();
  });

  describe("isEmptyOneOfTwo", () => {
    it("第一个参数不是数组", () => {
      expect(jsUtils.isEmptyOneOfTwo(3, 4)).toBeFalsy();
      expect(jsUtils.isEmptyOneOfTwo(3, "hehe")).toBeFalsy();
      expect(jsUtils.isEmptyOneOfTwo("name", "age")).toBeFalsy();
      expect(jsUtils.isEmptyOneOfTwo(3, null)).toBeTruthy();
      expect(jsUtils.isEmptyOneOfTwo(3, undefined)).toBeTruthy();
      expect(jsUtils.isEmptyOneOfTwo(3, "")).toBeTruthy();
    });
    it("第一个参数是数组,数组中有2个数据", () => {
      expect(jsUtils.isEmptyOneOfTwo([3, 4], 5)).toBeFalsy();
      expect(jsUtils.isEmptyOneOfTwo([3, "name"], 5)).toBeFalsy();
      expect(jsUtils.isEmptyOneOfTwo(["3", "4"], "23")).toBeFalsy();
      expect(jsUtils.isEmptyOneOfTwo([4, "4"], "23")).toBeFalsy();
      expect(jsUtils.isEmptyOneOfTwo(["56", 4], "23")).toBeFalsy();
      expect(jsUtils.isEmptyOneOfTwo(["56", "null"], "23")).toBeFalsy();
      expect(jsUtils.isEmptyOneOfTwo([3, ""], 5)).toBeFalsy();
      expect(jsUtils.isEmptyOneOfTwo([3, null], 5)).toBeFalsy();
      expect(jsUtils.isEmptyOneOfTwo([3, undefined], 5)).toBeFalsy();
      expect(jsUtils.isEmptyOneOfTwo([null, undefined], 5)).toBeFalsy();
      expect(jsUtils.isEmptyOneOfTwo([null, "89"], 5)).toBeFalsy();
      expect(jsUtils.isEmptyOneOfTwo([null, "89"], null)).toBeTruthy();
      expect(jsUtils.isEmptyOneOfTwo(["", ""], null)).toBeTruthy();
      expect(jsUtils.isEmptyOneOfTwo(["", ""], "")).toBeTruthy();
      expect(jsUtils.isEmptyOneOfTwo(["", ""], undefined)).toBeTruthy();
      expect(jsUtils.isEmptyOneOfTwo(["", ""], 90)).toBeFalsy();
    });
    it("第一个参数是数组，数组中有多个数据", () => {
      expect(jsUtils.isEmptyOneOfTwo([3, 4, 5], 5)).toBeFalsy();
      expect(jsUtils.isEmptyOneOfTwo([3, 4, 5, "ddd"], 5)).toBeFalsy();
      expect(jsUtils.isEmptyOneOfTwo([3, null, 5], 5)).toBeFalsy();
      expect(jsUtils.isEmptyOneOfTwo([3, null, null], 5)).toBeFalsy();
      expect(jsUtils.isEmptyOneOfTwo([null, null, null], 5)).toBeFalsy();
      expect(
        jsUtils.isEmptyOneOfTwo([undefined, undefined, undefined, undefined], 5)
      ).toBeFalsy();
      expect(jsUtils.isEmptyOneOfTwo(["", null, undefined], 5)).toBeFalsy();
      expect(jsUtils.isEmptyOneOfTwo(["", null, undefined], "")).toBeTruthy();
      expect(jsUtils.isEmptyOneOfTwo(["", null, 5], "")).toBeTruthy();
      expect(jsUtils.isEmptyOneOfTwo(["", null, 5], null)).toBeTruthy();
      expect(jsUtils.isEmptyOneOfTwo(["", "90", 5], null)).toBeTruthy();
      expect(jsUtils.isEmptyOneOfTwo(["name", "90", 5], null)).toBeFalsy();
      expect(
        jsUtils.isEmptyOneOfTwo(["89", "90", "34"], undefined)
      ).toBeFalsy();
      expect(jsUtils.isEmptyOneOfTwo(["89", "90", "34"], "")).toBeFalsy();
      expect(jsUtils.isEmptyOneOfTwo(["89", "90", "34", "45"], "")).toBeFalsy();
      expect(
        jsUtils.isEmptyOneOfTwo(["89", "90", "34", "45", "450"], "")
      ).toBeFalsy();
      expect(
        jsUtils.isEmptyOneOfTwo(["89", "", "34", "45", "450"], "")
      ).toBeTruthy();
      expect(
        jsUtils.isEmptyOneOfTwo(["89", undefined, "34", "45", "450"], undefined)
      ).toBeTruthy();
    });
  });
});
