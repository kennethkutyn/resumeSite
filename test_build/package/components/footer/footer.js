"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Footer = void 0;

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactJss = require("react-jss");

var _core = require("@material-ui/core");

var _share_links = require("./share_links/share_links");

var _footer_styles = require("./footer_styles");

// import { FormattedMessage } from 'react-intl';
// import { Tooltip } from '@welovedevs/ui';
// import { ReactComponent as Logo } from '../../assets/icons/brands/welovedevs.svg';
// import { ReactComponent as GithubLogo } from '../../assets/icons/brands/github.svg';
var useStyles = (0, _reactJss.createUseStyles)(_footer_styles.styles);

var FooterComponent = function FooterComponent() {
  var classes = useStyles();

  var _useTheme = (0, _reactJss.useTheme)(),
      screenSizes = _useTheme.screenSizes;

  var useSmallLayout = (0, _core.useMediaQuery)("(max-width: ".concat(screenSizes.medium - (screenSizes.medium - screenSizes.small) / 2, "px)"), {
    defaultMatches: true
  });

  if (useSmallLayout) {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: (0, _classnames.default)(classes.container, useSmallLayout && classes.smallLayoutContainer)
    }, /*#__PURE__*/_react.default.createElement(_share_links.ShareLinks, {
      useSmallLayout: true
    }));
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    className: classes.container
  }, /*#__PURE__*/_react.default.createElement(_share_links.ShareLinks, null));
};

var Footer = (0, _react.memo)(FooterComponent);
exports.Footer = Footer;