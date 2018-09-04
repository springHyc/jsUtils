const lodash = require("lodash");

const jsUtils = {
  ...lodash,
  isEmpty: value => {
    if (lodash.isNumber(value)) {
      return !lodash.isNumber(value);
    } else {
      return lodash.isEmpty(value);
    }
  },
  // 验证是否为100的倍数
  isHundred: value => {
    return /^[0-9]*[0-9]$/i.test(value) && value % 100 === 0;
  },
  //验证数字，支持小数点
  isDigit: value => {
    return /^[0-9]+(\.[0-9]+)?$/.test(value);
  },
  //验证数字，不支持小数点
  isInteger: value => {
    return /^[0-9]+$/.test(value);
  }
};

module.exports = jsUtils;
