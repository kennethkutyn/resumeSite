"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BasicsBack = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _reactJss = require("react-jss");

var _reactIntl = require("react-intl");

var _profile_card_animated_back = require("../../../../commons/profile_card/profile_card_animated_back/profile_card_animated_back");

var _profile_card_section_title = require("../../../../commons/profile_card/profile_card_section_title/profile_card_section_title");

var _profile_card_section_text = require("../../../../commons/profile_card/profile_card_section_text/profile_card_section_text");

var _profile_card_section = require("../../../../commons/profile_card/profile_card_section/profile_card_section");

var _basics_back_styles = require("./basics_back_styles");

var _no_data_button = require("../../../../commons/no_data_button/no_data_button");

var _use_mode = require("../../../../hooks/use_mode");

// import { ContractType } from '../../../../commons/fields/contract_types/contract_types';
// import { existsAndNotEmpty } from '../../../utils/exists_and_not_empty';
// import { translations } from '../../../../../utils/enums/job_serachstate/job_search_state_translations';
// import { ExperienceYears } from './fields/professional_experience';
// import { CodingYears } from './fields/coding_years';
// import { StudiesLevel } from './fields/studies_level';
var useStyles = (0, _reactJss.createUseStyles)(_basics_back_styles.styles);

var BasicsBackComponent = function BasicsBackComponent(_ref) {
  var data = _ref.data,
      handleAddButtonClick = _ref.handleAddButtonClick;

  var _useMode = (0, _use_mode.useMode)(),
      _useMode2 = (0, _slicedToArray2.default)(_useMode, 1),
      mode = _useMode2[0];

  var classes = useStyles();
  var currentCityName = data.currentCity.name,
      experienceYears = data.experienceYears,
      contractTypes = data.contractTypes,
      studiesLevel = data.studiesLevel,
      codingYears = data.codingYears,
      codingReason = data.codingReason,
      searchState = data.searchState,
      visaSponsorship = data.visaSponsorship,
      personalDescription = data.personalDescription;
  var descriptionContent = (0, _react.useMemo)(function () {
    if (!personalDescription && mode === 'edit') {
      return /*#__PURE__*/_react.default.createElement(_no_data_button.NoDataButton, {
        handleAddButtonClick: handleAddButtonClick,
        classes: {
          container: classes.addButton
        }
      }, /*#__PURE__*/_react.default.createElement(_reactIntl.FormattedMessage, {
        id: "Basics.noDescription.buttonLabel",
        defaultMessage: "Ajouter une description"
      }));
    }

    return /*#__PURE__*/_react.default.createElement("span", null, personalDescription);
  }, [personalDescription, mode, handleAddButtonClick, classes]);
  var sections = (0, _react.useMemo)(function () {
    return {
      personalDescription: {
        title: null,
        hide: false,
        value: descriptionContent
      }
    };
  }, [currentCityName, experienceYears, contractTypes, studiesLevel, codingYears, codingReason, visaSponsorship, personalDescription, descriptionContent, searchState]);
  return /*#__PURE__*/_react.default.createElement(_profile_card_animated_back.ProfileCardAnimatedBack, {
    title: /*#__PURE__*/_react.default.createElement(_reactIntl.FormattedMessage, {
      id: "Basics.Back.Title",
      defaultMessage: "Who?"
    })
  }, Object.entries(sections).filter(function (_ref2) {
    var _ref3 = (0, _slicedToArray2.default)(_ref2, 2),
        hide = _ref3[1].hide;

    return !hide;
  }).map(function (_ref4) {
    var _ref5 = (0, _slicedToArray2.default)(_ref4, 2),
        id = _ref5[0],
        _ref5$ = _ref5[1],
        title = _ref5$.title,
        value = _ref5$.value;

    return /*#__PURE__*/_react.default.createElement(_profile_card_section.ProfileCardSection, {
      key: id
    }, title && /*#__PURE__*/_react.default.createElement(_profile_card_section_title.ProfileCardSectionTitle, null, title), /*#__PURE__*/_react.default.createElement(_profile_card_section_text.ProfileCardSectionText, null, value));
  }));
}; // const JobSearchState = ({ searchState }) => {
//     const { formatMessage } = useIntl();
//     if (!searchState) {
//        return null;
//    }
//    return <span>{formatMessage(translations[searchState] || translations.unknown)}</span>;
// };


var BasicsBack = (0, _react.memo)(BasicsBackComponent);
exports.BasicsBack = BasicsBack;