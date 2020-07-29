"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapStudiesToJsonResume = exports.mapStudiesFromJsonResume = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _moment = _interopRequireDefault(require("moment"));

var _v = _interopRequireDefault(require("uuid/v4"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var mapStudiesFromJsonResume = function mapStudiesFromJsonResume(jsonResume) {
  var _jsonResume$education;

  return {
    education: jsonResume === null || jsonResume === void 0 ? void 0 : (_jsonResume$education = jsonResume.education) === null || _jsonResume$education === void 0 ? void 0 : _jsonResume$education.map(function (study) {
      return _objectSpread({}, study, {
        // generating uuid for manipulating data if not present
        id: study.id || (0, _v.default)(),
        startDate: study.startDate && (0, _moment.default)(study.startDate),
        endDate: study.endDate && (0, _moment.default)(study.endDate)
      });
    })
  };
};

exports.mapStudiesFromJsonResume = mapStudiesFromJsonResume;

var mapStudiesToJsonResume = function mapStudiesToJsonResume(data) {
  var _data$education;

  return {
    education: (_data$education = data.education) === null || _data$education === void 0 ? void 0 : _data$education.map(function (study) {
      var _study$startDate, _study$endDate;

      return _objectSpread({}, study, {
        startDate: (_study$startDate = study.startDate) === null || _study$startDate === void 0 ? void 0 : _study$startDate.format('YYYY-MM-DD'),
        endDate: (_study$endDate = study.endDate) === null || _study$endDate === void 0 ? void 0 : _study$endDate.format('YYYY-MM-DD')
      });
    })
  };
};

exports.mapStudiesToJsonResume = mapStudiesToJsonResume;