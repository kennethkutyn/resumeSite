"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LocationField = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactJss = require("react-jss");

var _reactIntl = require("react-intl");

var _ui = require("@welovedevs/ui");

var _use_google_maps_predictions = require("../../hooks/location/use_google_maps_predictions");

var _location_field_style = require("./location_field_style");

var _location_field_translations = require("./location_field_translations");

var useStyles = (0, _reactJss.createUseStyles)(_location_field_style.styles);

var LocationFieldComponent = function LocationFieldComponent(_ref) {
  var variant = _ref.variant,
      onLocationSelected = _ref.onLocationSelected,
      value = _ref.value,
      clearOnSelect = _ref.clearOnSelect,
      onChange = _ref.onChange,
      fullWidth = _ref.fullWidth;
  var classes = useStyles();

  var _useIntl = (0, _reactIntl.useIntl)(),
      locale = _useIntl.locale,
      formatMessage = _useIntl.formatMessage;

  var inputRef = (0, _react.useRef)();

  var _useState = (0, _react.useState)(value),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      input = _useState2[0],
      setInput = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      preventBlur = _useState4[0],
      setPreventBlur = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
      isFocused = _useState6[0],
      setIsFocused = _useState6[1];

  var _useGoogleMapsPredict = (0, _use_google_maps_predictions.useGoogleMapsPredictions)(input),
      predictions = _useGoogleMapsPredict.predictions;

  (0, _react.useEffect)(function () {
    setInput(value);
  }, [value]);
  var clear = (0, _react.useCallback)(function () {
    return setInput('');
  }, []);
  var handleChange = (0, _react.useCallback)(function (event) {
    setInput(event.target.value);

    if (typeof onChange === 'function') {
      event.persist();
      onChange(event);
    }
  }, [onChange, onLocationSelected]);
  var onPredictionSelected = (0, _react.useCallback)(function (placeId, description) {
    if (typeof onLocationSelected === 'function') {
      onLocationSelected({
        name: description,
        placeId: placeId,
        locale: locale
      });
    }

    setIsFocused(false);
    setInput('');
  }, [locale, onLocationSelected]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_ui.TextField, {
    fullWidth: fullWidth,
    className: classes.input,
    onClick: function onClick(e) {
      return e.target && e.target.select && e.target.select();
    },
    value: input,
    onChange: handleChange,
    placeholder: formatMessage(_location_field_translations.translations.placeholder),
    onBlur: function onBlur() {
      if (!preventBlur) {
        setIsFocused(false);
      }
    },
    onFocus: function onFocus() {
      return setIsFocused(true);
    },
    variant: variant || 'outlined',
    label: formatMessage(_location_field_translations.translations.title),
    containerRef: inputRef
  }), isFocused && /*#__PURE__*/_react.default.createElement(PredictionsList, (0, _extends2.default)({
    setPreventBlur: setPreventBlur,
    input: inputRef.current
  }, {
    predictions: predictions,
    classes: classes,
    onPredictionSelected: onPredictionSelected,
    locale: locale,
    setIsFocused: setIsFocused,
    setInput: setInput,
    clear: clear,
    clearOnSelect: clearOnSelect
  })));
};

var PredictionsList = function PredictionsList(_ref2) {
  var _ref2$predictions = _ref2.predictions,
      predictions = _ref2$predictions === void 0 ? [] : _ref2$predictions,
      setPreventBlur = _ref2.setPreventBlur,
      input = _ref2.input,
      onPredictionSelected = _ref2.onPredictionSelected,
      classes = _ref2.classes,
      setInput = _ref2.setInput;
  var onMouseUp = (0, _react.useCallback)(function () {
    setPreventBlur(false);

    if (input && input.focus) {
      input.focus();
    }
  }, []);
  return /*#__PURE__*/_react.default.createElement(_ui.PopperCard, {
    open: true,
    anchorElement: input,
    customClasses: {
      popper: classes.popperCard
    }
  }, /*#__PURE__*/_react.default.createElement(_ui.List, null, predictions.filter(function (item) {
    return item;
  }).map(function (_ref3) {
    var description = _ref3.description,
        placeId = _ref3.place_id;
    return /*#__PURE__*/_react.default.createElement(_ui.ListItem, {
      key: "prediction_".concat(placeId),
      onMouseDown: function onMouseDown() {
        return setPreventBlur(true);
      },
      onMouseUp: onMouseUp,
      onClick: function onClick() {
        if (!placeId) {
          return;
        }

        setInput(description);
        onPredictionSelected(placeId, description);
      }
    }, /*#__PURE__*/_react.default.createElement(_ui.Typography, null, description || ''));
  })));
};

var StubLocationField = function StubLocationField(_ref4) {
  var variant = _ref4.variant,
      onLocationSelected = _ref4.onLocationSelected,
      value = _ref4.value,
      clearOnSelect = _ref4.clearOnSelect,
      onChange = _ref4.onChange,
      fullWidth = _ref4.fullWidth;

  var _useIntl2 = (0, _reactIntl.useIntl)(),
      formatMessage = _useIntl2.formatMessage;

  var _useState7 = (0, _react.useState)(value),
      _useState8 = (0, _slicedToArray2.default)(_useState7, 2),
      input = _useState8[0],
      setInput = _useState8[1];

  (0, _react.useEffect)(function () {
    setInput(value);
  }, [value]);
  var handleChange = (0, _react.useCallback)(function (e) {
    setInput(e.target.value);

    if (typeof onChange === 'function') {
      e.persist();
      onChange(e);
    }
  }, [onChange]);
  var onKeyDown = (0, _react.useCallback)(function (e) {
    if (e.keyCode === 13) {
      onLocationSelected({
        name: input
      });

      if (clearOnSelect) {
        setInput('');
      }
    }
  }, [onLocationSelected, input]);
  return /*#__PURE__*/_react.default.createElement(_ui.TextField, {
    variant: variant || 'outlined',
    value: input,
    onChange: handleChange,
    onKeyDown: onKeyDown,
    placeholder: formatMessage(_location_field_translations.translations.stubPlaceholder),
    clearOnSelect: clearOnSelect,
    fullWidth: fullWidth
  });
};

var LocationField = function LocationField(_ref5) {
  var variant = _ref5.variant,
      onLocationSelected = _ref5.onLocationSelected,
      value = _ref5.value,
      clearOnSelect = _ref5.clearOnSelect,
      onChange = _ref5.onChange,
      fullWidth = _ref5.fullWidth,
      _ref5$classes = _ref5.classes,
      receivedClasses = _ref5$classes === void 0 ? {} : _ref5$classes;

  var _useGoogleMapsPredict2 = (0, _use_google_maps_predictions.useGoogleMapsPredictions)(),
      ready = _useGoogleMapsPredict2.ready;

  var classes = useStyles();

  if (!ready) {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: (0, _classnames.default)(classes.container, receivedClasses.container)
    }, /*#__PURE__*/_react.default.createElement(StubLocationField, {
      variant: variant,
      onLocationSelected: onLocationSelected,
      value: value,
      clearOnSelect: clearOnSelect,
      onChange: onChange,
      fullWidth: fullWidth,
      classes: classes
    }));
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)(classes.container, receivedClasses.container)
  }, /*#__PURE__*/_react.default.createElement(LocationFieldComponent, {
    variant: variant,
    onLocationSelected: onLocationSelected,
    value: value,
    clearOnSelect: clearOnSelect,
    onChange: onChange,
    fullWidth: fullWidth,
    classes: classes
  }));
};

exports.LocationField = LocationField;