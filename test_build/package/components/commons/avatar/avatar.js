"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Avatar = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactJss = require("react-jss");

var _use_additional_nodes = require("../../hooks/use_additional_nodes");

var _use_received_global_classes = require("../../hooks/use_received_global_classes");

var _avatar_styles = require("./avatar_styles");

var useStyles = (0, _reactJss.createUseStyles)(_avatar_styles.styles);
var DEFAULT_IMAGE = 'https://media-exp1.licdn.com/dms/image/C4E03AQH394Pjyw2FLA/profile-displayphoto-shrink_400_400/0?e=1600905600&v=beta&t=1kcy69aN0T8WqRwbTQxzN5RxL5uu5sXVYl6vn-J7mw0';

var AvatarComponent = function AvatarComponent(_ref) {
  var src = _ref.src,
      displayedName = _ref.displayedName;
  var classes = useStyles();

  var _useReceivedGlobalCla = (0, _use_received_global_classes.useReceivedGlobalClasses)('banner.avatar'),
      _useReceivedGlobalCla2 = (0, _slicedToArray2.default)(_useReceivedGlobalCla, 1),
      receivedGlobalClasses = _useReceivedGlobalCla2[0];

  var _useAdditionalNodes = (0, _use_additional_nodes.useAdditionalNodes)('banner.avatar', null),
      _useAdditionalNodes2 = (0, _slicedToArray2.default)(_useAdditionalNodes, 1),
      nodes = _useAdditionalNodes2[0];

  var pictureSource = (0, _react.useMemo)(function () {
    return src || DEFAULT_IMAGE;
  }, [src]);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)(classes.container, receivedGlobalClasses.container)
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)(classes.imageContainer, classes.imageContainer)
  }, /*#__PURE__*/_react.default.createElement("img", {
    className: (0, _classnames.default)(classes.image, receivedGlobalClasses.image),
    src: pictureSource,
    alt: displayedName
  })), nodes);
};

var Avatar = AvatarComponent;
exports.Avatar = Avatar;