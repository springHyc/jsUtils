const lodash = require("lodash");

class jsUtils extends lodash {
  constructor() {
    super();
  }
}

jsUtils.isEmpty = value => {
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
jsUtils.isHundred = value => {
  return /^[0-9]*[0-9]$/i.test(value) && value % 100 === 0;
};

/**
 * 验证数字，支持小数点
 * @param {Number | String} value
 * @returns {Boolean}
 */
jsUtils.isDigit = value => {
  return /^[0-9]+(\.[0-9]+)?$/.test(value);
};

/**
 * 验证数字，不支持小数点
 * @param {Number | String} value
 * @returns {Boolean}
 */
jsUtils.isInteger = value => {
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
      value1.forEach(item => {
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

/**
 * 如果输入内容，那么输入内容只能是汉字
 * @param {String} value
 * @returns {Boolean}
 */
jsUtils.isChinese = value => {
  return value && /^[\u0391-\uFFE5]+$/.test(value);
};
/**
 * 验证是否为邮箱
 * @param {String} value
 * @returns {Boolean}
 */
jsUtils.isEmail = value => {
  return (
    value &&
    /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/.test(
      value
    )
  );
};

/**
 * 验证是否为手机号码
 * @param {String} value
 * @returns {Boolean}
 */
jsUtils.isPhoneNumber = value => {
  return value && /^[1][0-9][0-9]{9}$/.test(value);
};
/**
 * 验证是否为有效的身份证号码，需要校验生日、出生地、性别等
 * @param {*} value
 * @returns {Boolean}
 */
jsUtils.isIdNumber = value => {};

/**
 * 校验IP地址是否正确
 * @param {String}} value
 * @returns {Boolean}
 */
jsUtils.isIp = value => {
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

module.exports = jsUtils;
