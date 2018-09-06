"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var lodash = require("lodash");

var jsUtils = _extends({}, lodash, {
  isEmpty: function isEmpty(value) {
    if (lodash.isNumber(value)) {
      return !lodash.isNumber(value);
    } else {
      return lodash.isEmpty(value);
    }
  },
  // 验证是否为100的倍数
  isHundred: function isHundred(value) {
    return (/^[0-9]*[0-9]$/i.test(value) && value % 100 === 0
    );
  },
  //验证数字，支持小数点
  isDigit: function isDigit(value) {
    return (/^[0-9]+(\.[0-9]+)?$/.test(value)
    );
  },
  //验证数字，不支持小数点
  isInteger: function isInteger(value) {
    return (/^[0-9]+$/.test(value)
    );
  }
});

// const jsUtils = Object.assign({}, lodash, self);

module.exports = jsUtils;