'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _CreateSvgIcon = require('./utils/CreateSvgIcon');

var _CreateSvgIcon2 = _interopRequireDefault(_CreateSvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint react/prop-types: 0 */
var YouTubeColored = function YouTubeColored(props) {
  return _react2.default.createElement(
    _CreateSvgIcon2.default,
    {
      name: 'YouTubeColored',
      className: props.className,
      color: props.color,
      size: props.size,
      viewBox: '0 0 461.001 461.001',
      style: props.style
    },
    _react2.default.createElement('path', { fill: props.color || "#F61C0D", d: 'M365.257,67.393H95.744C42.866,67.393,0,110.259,0,163.137v134.728 c0,52.878,42.866,95.744,95.744,95.744h269.513c52.878,0,95.744-42.866,95.744-95.744V163.137 C461.001,110.259,418.135,67.393,365.257,67.393z M300.506,237.056l-126.06,60.123c-3.359,1.602-7.239-0.847-7.239-4.568V168.607 c0-3.774,3.982-6.22,7.348-4.514l126.06,63.881C304.363,229.873,304.298,235.248,300.506,237.056z' })
  );
};

exports.default = YouTubeColored;