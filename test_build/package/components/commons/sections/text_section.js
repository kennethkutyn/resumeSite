"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextSection = void 0;

var _reactJss = require("react-jss");

var _react = _interopRequireDefault(require("react"));

var _text_section_styles = _interopRequireDefault(require("./text_section_styles"));

var useStyles = (0, _reactJss.createUseStyles)(_text_section_styles.default);

var TextSection = function TextSection(_ref) {
  var icon = _ref.icon,
      children = _ref.children;
  var classes = useStyles();
  return /*#__PURE__*/_react.default.createElement("div", {
    className: classes.section
  }, icon && /*#__PURE__*/_react.default.createElement("div", {
    className: classes.icon
  }, icon), /*#__PURE__*/_react.default.createElement("div", {
    className: classes.sectionContent
  }, children));
};

exports.TextSection = TextSection;