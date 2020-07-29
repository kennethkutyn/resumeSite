"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _styles_utils = require("../../../../../utils/styles/styles_utils");

var styles = function styles(theme) {
  var palette = theme.palette,
      spacing = theme.miscellaneous.spacing;
  var QUERY_SMALL = (0, _styles_utils.createScreenWidthMediaQuery)('max-width', theme.screenSizes.small);
  return {
    paper: {
      maxWidth: [900, '!important']
    },
    itemContainer: (0, _defineProperty2.default)({
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      margin: [spacing * 2, 0]
    }, QUERY_SMALL, {
      flexDirection: 'column',
      alignItems: 'unset'
    }),
    header: {
      display: 'flex',
      alignItems: 'unset'
    },
    divider: {
      margin: [0, spacing * 2],
      height: 50,
      width: 1,
      backgroundColor: palette.dark[50]
    },
    dragHandleButton: {
      display: 'flex'
    },
    dragHandle: {
      width: 32,
      height: 32
    },
    listItem: {
      display: 'flex',
      alignItems: 'center',
      flexWrap: 'wrap',
      width: '100%'
    },
    fieldGroup: (0, _defineProperty2.default)({
      display: 'flex',
      width: '100%'
    }, QUERY_SMALL, {
      flexDirection: 'column'
    }),
    field: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      margin: spacing
    },
    button: {
      padding: spacing * 2,
      margin: spacing * 2
    },
    warningIcon: {
      marginLeft: spacing * 2
    },
    listItemError: {
      backgroundColor: [palette.danger[50], '!important']
    },
    sortableHelper: {
      zIndex: 1301
    },
    arrowContainer: {
      display: 'flex',
      alignItems: 'center'
    },
    smallTitle: {
      marginLeft: spacing * 2,
      textOverflow: 'ellipsis',
      wordWrap: 'break-word',
      overflow: 'hidden',
      maxHeight: 20 * 2,
      lineHeight: '20px',
      animation: 'fade-in-translate-left 500ms',
      display: '-webkit-box',
      '-webkit-line-clamp': 2,
      '-webkit-box-orient': 'vertical'
    },
    removeButton: {
      display: 'flex'
    },
    removeIcon: {
      fill: palette.danger[500]
    }
  };
};

exports.styles = styles;