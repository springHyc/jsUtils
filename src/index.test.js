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

  // describe("isEmptyOneOfTwo", () => {
  it("第一个参数不是数组", () => {
    expect(jsUtils.test(3)).toBeTruthy();
  });
  // });
});
