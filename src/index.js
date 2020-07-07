// const lodash = require('lodash');

import lodash from "lodash";

export default class jsUtils extends lodash {
  constructor() {
    super();
  }
}

jsUtils.isEmpty = (value) => {
  if (lodash.isNumber(value)) {
    return !lodash.isNumber(value);
  } else {
    return lodash.isEmpty(value);
  }
};

/**
 * 验证是否为100的倍数
 * @param {Number | String} value
 * @returns {Boolean}
 */
jsUtils.isHundred = (value) => {
  return /^[0-9]*[0-9]$/i.test(value) && value % 100 === 0;
};

/**
 * 验证数字，支持小数点
 * @param {Number | String} value
 * @returns {Boolean}
 */
jsUtils.isDigit = (value) => {
  return /^[0-9]+(\.[0-9]+)?$/.test(value);
};

/**
 * 验证数字，不支持小数点
 * @param {Number | String} value
 * @returns {Boolean}
 */
jsUtils.isInteger = (value) => {
  return /^[0-9]+$/.test(value);
};

/**
 * 验证value1和value2二者有一个不为空即可返回true
 * 当value1为数组时，必须数组中的每个值都不为空，value1才不为空
 * @param {String | Number | Array} value1
 * @param {String | Number} value2
 * @returns {Boolean}
 */
jsUtils.isEmptyOneOfTwo = (value1, value2) => {
  if (lodash.isArray(value1)) {
    if (jsUtils.isEmpty(value2)) {
      let result = false;
      value1.forEach((item) => {
        if (jsUtils.isEmpty(item)) {
          result = true;
        }
      });
      return result;
    } else {
      return false;
    }
  } else {
    if (jsUtils.isEmpty(value1) || jsUtils.isEmpty(value2)) {
      return true;
    } else {
      return false;
    }
  }
};

// 有一个不为空则返回true
jsUtils.isEmptyOfMany = (...values) => {
  let result = false;
  values.forEach((value) => {
    if (!jsUtils.isEmpty(value)) {
      result = true;
    }
  });
  return result;
};
/**
 * 如果输入内容，那么输入内容只能是汉字
 * @param {String} value
 * @returns {Boolean}
 */
jsUtils.isChinese = (value) => {
  return value && /^[\u0391-\uFFE5]+$/.test(value);
};
/**
 * 验证是否为邮箱
 * @param {String} value
 * @returns {Boolean}
 */
jsUtils.isEmail = (value) => {
  return (
    value &&
    /^([a-zA-Z0-9]+[_|\-|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\-|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/.test(
      value
    )
  );
};

/**
 * 验证是否为手机号码
 * @param {String} value
 * @returns {Boolean}
 */
jsUtils.isPhoneNumber = (value) => {
  return value && /^[1][0-9][0-9]{9}$/.test(value);
};
/**
 * 验证是否为有效的身份证号码，需要校验生日、出生地、校验位等
 * @param {*} value
 * @returns {Boolean}
 */
jsUtils.isIdNumber = (code) => {
  var city = {
    11: "北京",
    12: "天津",
    13: "河北",
    14: "山西",
    15: "内蒙古",
    21: "辽宁",
    22: "吉林",
    23: "黑龙江 ",
    31: "上海",
    32: "江苏",
    33: "浙江",
    34: "安徽",
    35: "福建",
    36: "江西",
    37: "山东",
    41: "河南",
    42: "湖北 ",
    43: "湖南",
    44: "广东",
    45: "广西",
    46: "海南",
    50: "重庆",
    51: "四川",
    52: "贵州",
    53: "云南",
    54: "西藏 ",
    61: "陕西",
    62: "甘肃",
    63: "青海",
    64: "宁夏",
    65: "新疆",
    71: "台湾",
    81: "香港",
    82: "澳门",
    91: "国外 ",
  };
  var tip = "";
  var pass = true;

  if (
    !code ||
    !/^\d{6}(18|19|20)?\d{2}(0[1-9]|1[12])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i.test(
      code
    )
  ) {
    tip = "身份证号格式错误";
    pass = false;
  } else if (!city[code.substr(0, 2)]) {
    tip = "地址编码错误";
    pass = false;
  } else {
    //18位身份证需要验证最后一位校验位
    if (code.length == 18) {
      code = code.split("");
      //∑(ai×Wi)(mod 11)
      //加权因子
      var factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
      //校验位
      var parity = [1, 0, "X", 9, 8, 7, 6, 5, 4, 3, 2];
      var sum = 0;
      var ai = 0;
      var wi = 0;
      for (var i = 0; i < 17; i++) {
        ai = code[i];
        wi = factor[i];
        sum += ai * wi;
      }
      var last = parity[sum % 11];
      if (parity[sum % 11] != code[17]) {
        tip = "校验位错误";
        pass = false;
      }
    }
  }
  if (!pass) console.log(tip);
  return pass;
};

/**
 * 校验IP地址是否正确
 * @param {String}} value
 * @returns {Boolean}
 */
jsUtils.isIp = (value) => {
  if (lodash.isNull(value)) {
    return false;
  } else {
    var re = /^(\d+)\.(\d+)\.(\d+)\.(\d+)$/g; //匹配IP地址的正则表达式
    if (re.test(value)) {
      if (
        RegExp.$1 < 256 &&
        RegExp.$2 < 256 &&
        RegExp.$3 < 256 &&
        RegExp.$4 < 256
      )
        return true;
    }
    return false;
  }
};

/**
 * 校验输入为字母，数字，下划线，减号，输入长度为4-16位
 * @param {*} value
 */
jsUtils.isUserName = (value) => {
  return value && /^[a-zA-Z0-9_-]{4,16}$/.test(value);
};

/**
 * 校验密码强度
 * 最少6位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符
 * 如果有其他的常用需要，再添加
 * @param {String}} value
 */
jsUtils.isPassword = (value) => {
  return (
    value &&
    /^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/.test(
      value
    )
  );
};

// module.exports = jsUtils;
