"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoadingSpinner = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactJss = require("react-jss");

var _respinner = require("respinner");

var _styles_utils = require("../../../utils/styles/styles_utils");

var LoadingSpinnerComponent = function LoadingSpinnerComponent(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'primary' : _ref$color,
      height = _ref.height;
  var theme = (0, _reactJss.useTheme)();
  var colorHex = (0, _react.useMemo)(function () {
    return (0, _styles_utils.getHexFromPaletteColor)(theme, color);
  }, [theme, color]);
  return /*#__PURE__*/_react.default.createElement(_respinner.WaveLoading, {
    height: height,
    stroke: colorHex,
    strokeWidth: 3,
    count: 2
  });
};

var LoadingSpinner = LoadingSpinnerComponent;
exports.LoadingSpinner = LoadingSpinner;