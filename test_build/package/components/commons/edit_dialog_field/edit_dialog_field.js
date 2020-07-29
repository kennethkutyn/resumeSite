"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EditDialogField = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactJss = require("react-jss");

var _reactIntl = require("react-intl");

var _ui = require("@welovedevs/ui");

var _edit_dialog_field_styles = require("./edit_dialog_field_styles");

var useStyles = (0, _reactJss.createUseStyles)(_edit_dialog_field_styles.styles);

var EditDialogFieldComponent = function EditDialogFieldComponent(_ref) {
  var title = _ref.title,
      subtitle = _ref.subtitle,
      children = _ref.children,
      error = _ref.error,
      _ref$classes = _ref.classes,
      receivedClasses = _ref$classes === void 0 ? {} : _ref$classes;
  var classes = useStyles();
  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)(classes.container, receivedClasses.container)
  }, title && /*#__PURE__*/_react.default.createElement(_ui.Typography, {
    customClasses: {
      container: classes.title
    },
    component: "h3",
    variant: "h4",
    color: "dark"
  }, title), subtitle && /*#__PURE__*/_react.default.createElement(_ui.Typography, {
    customClasses: {
      container: classes.subtitle
    },
    component: "p",
    variant: "body2",
    color: "dark"
  }, subtitle), /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)(classes.componentErrorContainer, receivedClasses.componentErrorContainer)
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)(classes.component, receivedClasses.component)
  }, children), error && /*#__PURE__*/_react.default.createElement(_ui.Typography, {
    color: "danger",
    variant: "helper",
    component: "p"
  }, typeof error === 'string' ? error : /*#__PURE__*/_react.default.createElement(_reactIntl.FormattedMessage, {
    id: "Main.lang.error",
    defaultMessage: "Error"
  }))));
};

var EditDialogField = EditDialogFieldComponent;
exports.EditDialogField = EditDialogField;