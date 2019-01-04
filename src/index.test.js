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
    expect(jsUtils.isDigit(null)).toBeTruthy();
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

  describe("验证如果输入内容，那么输入内容只能是汉字", () => {
    it("没有输入内容", () => {
      expect(jsUtils.isChinese()).toBeFalsy();
      expect(jsUtils.isChinese(undefined)).toBeFalsy();
      expect(jsUtils.isChinese(null)).toBeFalsy();
    });
    it("输入有内容", () => {
      expect(jsUtils.isChinese("ddd")).toBeFalsy();
      expect(jsUtils.isChinese("")).toBeFalsy();
      expect(jsUtils.isChinese("3")).toBeFalsy();
      expect(jsUtils.isChinese(34)).toBeFalsy();
      expect(jsUtils.isChinese(34.9)).toBeFalsy();
      expect(
        jsUtils.isChinese("sdfawfsdaf.sfawfmkmoiaf--9werqe nkj")
      ).toBeFalsy();
      expect(jsUtils.isChinese("   ")).toBeFalsy();
      expect(jsUtils.isChinese("null")).toBeFalsy();
      expect(jsUtils.isChinese("undefined")).toBeFalsy();
      expect(jsUtils.isChinese("贺贺")).toBeTruthy();
      expect(jsUtils.isChinese("贺贺-贺贺")).toBeFalsy();
      expect(jsUtils.isChinese("工作每天顺利吗？")).toBeTruthy();
    });
    it("输入的为标点符号", () => {
      expect(jsUtils.isChinese("？")).toBeTruthy();
      expect(jsUtils.isChinese(".")).toBeFalsy();
      expect(jsUtils.isChinese("。")).toBeTruthy();
      expect(jsUtils.isChinese("，。、？")).toBeTruthy();
      expect(jsUtils.isChinese("，。 ？,")).toBeFalsy();
    });
  });

  describe("验证邮箱输入是否正确", () => {
    it("没有输入", () => {
      expect(jsUtils.isEmail()).toBeFalsy();
      expect(jsUtils.isEmail(null)).toBeFalsy();
      expect(jsUtils.isEmail(undefined)).toBeFalsy();
      expect(jsUtils.isEmail("")).toBeFalsy();
    });
    it("有输入", () => {
      expect(jsUtils.isEmail("zhulinger520@163.com")).toBeTruthy();
      expect(jsUtils.isEmail("spring.hehe.v5@gmail.com")).toBeTruthy();
      expect(jsUtils.isEmail("dddd@sss.com.cn")).toBeTruthy();
      expect(jsUtils.isEmail("ddd@qq.cn")).toBeTruthy();
      expect(jsUtils.isEmail("dddd@ddd")).toBeFalsy();
      expect(jsUtils.isEmail("zhulinger520@163.comm")).toBeFalsy();
    });
  });

  describe("验证是否为手机号码", () => {
    it("没有输入时", () => {
      expect(jsUtils.isPhoneNumber()).toBeFalsy();
      expect(jsUtils.isPhoneNumber(null)).toBeFalsy();
      expect(jsUtils.isPhoneNumber(undefined)).toBeFalsy();
      expect(jsUtils.isPhoneNumber("")).toBeFalsy();
    });
    it("有输入值时", () => {
      expect(jsUtils.isPhoneNumber("12312898934")).toBeTruthy();
      expect(jsUtils.isPhoneNumber(12319345627)).toBeTruthy();
      expect(jsUtils.isPhoneNumber("023-3745453")).toBeFalsy();
      expect(jsUtils.isPhoneNumber(8723983)).toBeFalsy();
      expect(jsUtils.isPhoneNumber(8723983.342)).toBeFalsy();
      expect(jsUtils.isPhoneNumber("21345787635")).toBeFalsy();
    });
  });

  describe("校验是否为正确的IP地址", () => {
    it("没有输入时", () => {
      expect(jsUtils.isIp()).toBeFalsy();
      expect(jsUtils.isIp(null)).toBeFalsy();
      expect(jsUtils.isIp(undefined)).toBeFalsy();
    });
    it("有内容输入时", () => {
      expect(jsUtils.isIp("192.168.90.124")).toBeTruthy();
      expect(jsUtils.isIp("192.168.90.257")).toBeFalsy();
      expect(jsUtils.isIp("1.2.3")).toBeFalsy();
      expect(jsUtils.isIp("0.2.3.0")).toBeTruthy();
      expect(jsUtils.isIp("1111")).toBeFalsy();
    });
  });

  describe("校验有效身份证号码", () => {
    it("18位身份证号码", () => {
      expect(jsUtils.isIdNumber("131182199003241223")).toBeTruthy();
      expect(jsUtils.isIdNumber("1311829003241223")).toBeTruthy();
      expect(jsUtils.isIdNumber("131182900324122X")).toBeTruthy();
      expect(jsUtils.isIdNumber("141182900324122X")).toBeTruthy();
      expect(jsUtils.isIdNumber("631182209003241223")).toBeFalsy();
      expect(jsUtils.isIdNumber("631182219003241223")).toBeFalsy();
      expect(jsUtils.isIdNumber("631182199101321223")).toBeFalsy();
      expect(jsUtils.isIdNumber("131182199101311221")).toBeTruthy();
      expect(jsUtils.isIdNumber("131182199101321221")).toBeFalsy();
      expect(jsUtils.isIdNumber("131182199102021221")).toBeFalsy(); // 校验位不对
      expect(jsUtils.isIdNumber("131182199102021226")).toBeTruthy(); // 校验位正确
    });
  });

  describe("校验输入为字母，数字，下划线，减号,点，输入长度为4-16位", () => {
    it("无输入", () => {
      expect(jsUtils.isUserName(null)).toBeFalsy();
      expect(jsUtils.isUserName(undefined)).toBeFalsy();
      expect(jsUtils.isUserName("")).toBeFalsy();
    });
    it("有输入", () => {
      expect(jsUtils.isUserName("heh")).toBeFalsy();
      expect(jsUtils.isUserName("hehe")).toBeTruthy();
      expect(jsUtils.isUserName("spring.hehe.v5")).toBeFalsy();
      expect(jsUtils.isUserName("spring-hehe_v5")).toBeTruthy();
      expect(jsUtils.isUserName("spring-hehe@v5")).toBeFalsy();
      expect(jsUtils.isUserName("234q_sdfaw-werq")).toBeTruthy();
    });
  });

  describe("校验密码强度", () => {
    it("无输入", () => {
      expect(jsUtils.isPassword("")).toBeFalsy();
      expect(jsUtils.isPassword(null)).toBeFalsy();
      expect(jsUtils.isPassword(undefined)).toBeFalsy();
    });
    it("有输入", () => {
      expect(jsUtils.isPassword("ASD")).toBeFalsy();
      expect(jsUtils.isPassword("aA34_sdw#dd")).toBeTruthy();
      expect(jsUtils.isPassword("aA34_sdwdd")).toBeFalsy();
    });
  });
});
