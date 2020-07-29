"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SoundtrackFront = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _reactIntl = require("react-intl");

var _reactJss = require("react-jss");

var _ui = require("@welovedevs/ui");

var _profile_card_padding_front = require("../../../../commons/profile_card/profile_card_padded_front/profile_card_padding_front");

var _center_content_container = require("../../../../commons/center_content_container/center_content_container");

var _profile_card_front_vector = require("../../../../commons/profile_card/profile_card_front_vector/profile_card_front_vector");

var _profile_card_front_typography = require("../../../../commons/profile_card/profile_card_front_typography/profile_card_front_typography");

var _profile_card_actions = require("../../../../commons/profile_card/profile_card_actions/profile_card_actions");

var _profile_card_button = require("../../../../commons/profile_card/profile_card_button/profile_card_button");

var _side = require("../../../../commons/profile_card/profile_card_side/side");

var _soundtrack_front_styles = require("./soundtrack_front_styles");

var _use_card_side = require("../../../../hooks/profile_card_hooks/use_card_side");

var _no_data_button = require("../../../../commons/no_data_button/no_data_button");

var SpotifyLogo = function SpotifyLogo(props) {
  return /*#__PURE__*/_react.default.createElement("svg", props, /*#__PURE__*/_react.default.createElement("path", {
    fill: "#fff",
    d: "M83.996.277C37.747.277.253 37.77.253 84.019c0 46.251 37.494 83.741 83.743 83.741 46.254 0 83.744-37.49 83.744-83.741 0-46.246-37.49-83.738-83.745-83.738l.001-.004zm38.404 120.78a5.217 5.217 0 0 1-7.18 1.73c-19.662-12.01-44.414-14.73-73.564-8.07a5.222 5.222 0 0 1-6.249-3.93 5.213 5.213 0 0 1 3.926-6.25c31.9-7.291 59.263-4.15 81.337 9.34 2.46 1.51 3.24 4.72 1.73 7.18zm10.25-22.805c-1.89 3.075-5.91 4.045-8.98 2.155-22.51-13.839-56.823-17.846-83.448-9.764-3.453 1.043-7.1-.903-8.148-4.35a6.538 6.538 0 0 1 4.354-8.143c30.413-9.228 68.222-4.758 94.072 11.127 3.07 1.89 4.04 5.91 2.15 8.976v-.001zm.88-23.744c-26.99-16.031-71.52-17.505-97.289-9.684-4.138 1.255-8.514-1.081-9.768-5.219a7.835 7.835 0 0 1 5.221-9.771c29.581-8.98 78.756-7.245 109.83 11.202a7.823 7.823 0 0 1 2.74 10.733c-2.2 3.722-7.02 4.949-10.73 2.739z"
  }));
};

SpotifyLogo.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  height: "168",
  width: "168",
  viewBox: "0 0 168 168"
};
var useStyles = (0, _reactJss.createUseStyles)(_soundtrack_front_styles.styles);

var SoundtrackFrontComponent = function SoundtrackFrontComponent(_ref) {
  var data = _ref.data,
      handleAddButtonClick = _ref.handleAddButtonClick;
  var classes = useStyles();

  var _useCardSide = (0, _use_card_side.useCardSide)(),
      _useCardSide2 = (0, _slicedToArray2.default)(_useCardSide, 2),
      side = _useCardSide2[0],
      setSide = _useCardSide2[1];

  var handleButtonClick = (0, _react.useCallback)(function () {
    return setSide(side === _side.SIDES.FRONT ? _side.SIDES.BACK : _side.SIDES.FRONT);
  }, [side, setSide]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_profile_card_padding_front.ProfileCardPaddedFront, null, /*#__PURE__*/_react.default.createElement(_center_content_container.CenterContentContainer, {
    customClasses: {
      container: classes.container
    }
  }, /*#__PURE__*/_react.default.createElement(Content, {
    data: data,
    handleAddButtonClick: handleAddButtonClick,
    classes: classes
  }))), (data === null || data === void 0 ? void 0 : data.embedUrl) && /*#__PURE__*/_react.default.createElement(_profile_card_actions.ProfileCardActions, null, /*#__PURE__*/_react.default.createElement(_profile_card_button.ProfileCardButton, {
    onClick: handleButtonClick
  }, /*#__PURE__*/_react.default.createElement(_reactIntl.FormattedMessage, {
    id: "Soundtrack.front.button",
    defaultMessage: "My playlist"
  }))));
};

var Content = function Content(_ref2) {
  var data = _ref2.data,
      handleAddButtonClick = _ref2.handleAddButtonClick,
      classes = _ref2.classes;

  if (!(data === null || data === void 0 ? void 0 : data.embedUrl)) {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: classes.noSoundTrack
    }, /*#__PURE__*/_react.default.createElement(_ui.Typography, {
      variant: "h3",
      component: "h3",
      customClasses: {
        container: classes.noSoundTrackTypography
      }
    }, /*#__PURE__*/_react.default.createElement(_reactIntl.FormattedMessage, {
      id: "SoundTrack.front.noSoundTrack",
      defaultMessage: "Vous n'avez pas encore ajout\xE9 de playlist !"
    })), /*#__PURE__*/_react.default.createElement(_no_data_button.NoDataButton, {
      handleAddButtonClick: handleAddButtonClick,
      classes: {
        container: classes.addButton
      }
    }, /*#__PURE__*/_react.default.createElement(_reactIntl.FormattedMessage, {
      id: "SoundTrack.noSoundTrack.buttonLabel",
      defaultMessage: "Ajouter une playlist"
    })));
  }

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_profile_card_front_vector.ProfileCardFrontVector, {
    customClasses: {
      container: classes.logo
    },
    vector: SpotifyLogo
  }), /*#__PURE__*/_react.default.createElement(_profile_card_front_typography.ProfileCardFrontTypography, {
    classes: {
      container: classes.typography
    }
  }, /*#__PURE__*/_react.default.createElement(_reactIntl.FormattedMessage, {
    id: "Soundtrack.front.title",
    defaultMessage: "Discover my favourite tracks"
  })));
};

var SoundtrackFront = (0, _react.memo)(SoundtrackFrontComponent);
exports.SoundtrackFront = SoundtrackFront;