"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GifsSidesCommons = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactIntl = require("react-intl");

var _reactJss = require("react-jss");

var _profile_card_title = require("../../../../commons/profile_card/profile_card_title/profile_card_title");

var _gifs_sides_commons_styles = require("./gifs_sides_commons_styles");

var useStyles = (0, _reactJss.createUseStyles)(_gifs_sides_commons_styles.styles);

var GifsSidesCommonsComponent = function GifsSidesCommonsComponent(_ref) {
  var underLayer = _ref.underLayer,
      children = _ref.children,
      _ref$classes = _ref.classes,
      receivedClasses = _ref$classes === void 0 ? {} : _ref$classes;
  var classes = useStyles();
  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)(classes.container, receivedClasses.container)
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: classes.underLayerContainer
  }, underLayer), /*#__PURE__*/_react.default.createElement("div", {
    className: classes.darkenLayer
  }), /*#__PURE__*/_react.default.createElement(_profile_card_title.ProfileCardTitle, {
    overrideColor: "light",
    customClasses: {
      container: classes.title
    }
  }, /*#__PURE__*/_react.default.createElement(_reactIntl.FormattedMessage, {
    id: "Hobbies.side.commons",
    defaultMessage: "Hobbies"
  })), children);
};

var GifsSidesCommons = GifsSidesCommonsComponent;
exports.GifsSidesCommons = GifsSidesCommons;