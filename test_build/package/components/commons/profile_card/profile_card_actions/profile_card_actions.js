"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProfileCardActions = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactJss = require("react-jss");

var _profile_card_actions_styles = require("./profile_card_actions_styles");

var useStyles = (0, _reactJss.createUseStyles)(_profile_card_actions_styles.styles);

var ProfileCardActionsComponent = function ProfileCardActionsComponent(_ref) {
  var children = _ref.children;
  var classes = useStyles();
  return /*#__PURE__*/_react.default.createElement("div", {
    className: classes.container
  }, children);
};

var ProfileCardActions = ProfileCardActionsComponent;
exports.ProfileCardActions = ProfileCardActions;