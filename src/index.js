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

module.exports = jsUtils;
