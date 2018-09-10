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

jsUtils.test = value => {
  return !!value;
};

jsUtils.isEmptyOneOfTwo = (value1, value2) => {
  if (lodash.isArray(value1)) {
    let result1 = false;
    value1.forEach(item => {
      if (jsUtils.isEmpty(item)) {
        result1 = true;
      }
    });
    if (result1 || jsUtils.isEmpty(value2)) {
      return true;
    } else {
      false;
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
