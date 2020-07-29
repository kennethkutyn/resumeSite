"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ShareLinks = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactJss = require("react-jss");

var _reactSpring = require("react-spring");

var _ui = require("@welovedevs/ui");

var _share_links_data = require("./share_links_data");

var _share_links_spring_props = require("./share_links_spring_props");

var _share_links_styles = require("./share_links_styles");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// import { translations } from './share_links_translations';
var useStyles = (0, _reactJss.createUseStyles)(_share_links_styles.styles);

var ShareLinksComponent = function ShareLinksComponent(_ref) {
  var useSmallLayout = _ref.useSmallLayout;
  var classes = useStyles(); // const { formatMessage } = useIntl();

  var _useState = (0, _react.useState)(),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      link = _useState2[0],
      setLink = _useState2[1]; // const [setLink] = useState();


  var _useSpring = (0, _reactSpring.useSpring)(function () {
    return _objectSpread({}, _share_links_spring_props.BACKGROUND_LINE_SPRING_PROPS.default, {
      config: _reactSpring.config.slow
    });
  }),
      _useSpring2 = (0, _slicedToArray2.default)(_useSpring, 2),
      backgroundLineSpringProps = _useSpring2[0],
      setBackgroundLineSpringProps = _useSpring2[1];

  (0, _react.useEffect)(function () {
    var _location;

    setLink((_location = (typeof window === 'undefined' ? {} : window).location) === null || _location === void 0 ? void 0 : _location.href);
  }, []); // const translatedMessage = useMemo(() => formatMessage(translations.linkMessage, { link }), [link]);

  (0, _react.useEffect)(function () {
    if (!('IntersectionObserver' in (typeof window !== 'undefined' ? window : {}))) {
      return;
    } // eslint-disable-next-line no-undef


    var observer = new IntersectionObserver(function (entries) {
      if (entries[0].isIntersecting === true) {
        setBackgroundLineSpringProps(_share_links_spring_props.BACKGROUND_LINE_SPRING_PROPS.active);
      } else {
        setBackgroundLineSpringProps(_share_links_spring_props.BACKGROUND_LINE_SPRING_PROPS.default);
      }
    }, {
      threshold: [0]
    });
    observer.observe(document.querySelector('#footer-share-links'));
  }, []);
  return /*#__PURE__*/_react.default.createElement("div", {
    id: "footer-share-links",
    className: (0, _classnames.default)(classes.container, useSmallLayout && classes.smallLayoutContainer)
  }, !useSmallLayout && /*#__PURE__*/_react.default.createElement(_reactSpring.animated.div, {
    className: classes.backgroundLine,
    style: backgroundLineSpringProps
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: classes.icons
  }, Object.entries(_share_links_data.SHARE_LINKS_DATA).map(function (_ref2) {
    var _ref3 = (0, _slicedToArray2.default)(_ref2, 2),
        entryId = _ref3[0],
        _ref3$ = _ref3[1],
        Icon = _ref3$.icon,
        tooltipTranslation = _ref3$.tooltipTranslation;

    var content = /*#__PURE__*/_react.default.createElement(Icon, {
      key: "share_link_icon_".concat(entryId),
      className: classes.icon
    });

    if (content.key === 'share_link_icon_linkedIn') {
      content = /*#__PURE__*/_react.default.createElement("a", {
        key: "share_link_link_".concat(entryId),
        className: classes.link,
        href: "https://www.linkedin.com/in/kennethkutyn/",
        target: "_blank",
        rel: "noreferrer noopener"
      }, content);
    }

    if (content.key === 'share_link_icon_twitter') {
      content = /*#__PURE__*/_react.default.createElement("a", {
        key: "share_link_link_".concat(entryId),
        className: classes.link,
        href: "https://www.twitter.com/kennethmarshall",
        target: "_blank",
        rel: "noreferrer noopener"
      }, content);
    }

    if (content.key === 'share_link_icon_mail') {
      content = /*#__PURE__*/_react.default.createElement("a", {
        key: "share_link_link_".concat(entryId),
        className: classes.link,
        href: "mailto:kennethkutyn@gmail.com",
        target: "_blank",
        rel: "noreferrer noopener"
      }, content);
    }

    if (content.key === 'share_link_icon_github') {
      console.log({
        link: link
      });
      console.log(content.key);
      content = /*#__PURE__*/_react.default.createElement("a", {
        key: "share_link_link_".concat(entryId),
        className: classes.link,
        href: "https://github.com/kennethkutyn",
        target: "_blank",
        rel: "noreferrer noopener"
      }, content);
    }

    if (tooltipTranslation) {
      content = /*#__PURE__*/_react.default.createElement(_ui.Tooltip, {
        key: "share_link_tooltip_".concat(entryId),
        title: tooltipTranslation
      }, /*#__PURE__*/_react.default.createElement("button", {
        className: classes.button,
        type: "button"
      }, content));
    }

    return content;
  })));
};

var ShareLinks = (0, _react.memo)(ShareLinksComponent);
exports.ShareLinks = ShareLinks;