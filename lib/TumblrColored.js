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
var TumblrColored = function TumblrColored(props) {
  return _react2.default.createElement(
    _CreateSvgIcon2.default,
    {
      name: 'TumblrColored',
      className: props.className,
      color: props.color,
      size: props.size,
      viewBox: '0 0 352 352',
      style: props.style
    },
    _react2.default.createElement('path', { fill: props.color || "#2A445D", d: 'M259.104,279.929c0,0-10.445,12.012-30.291,12.012s-28.724-12.012-28.724-29.768 c0-7.134,0-50.861,0-100.619h64.17v-60.977h-64.17c0-53.98,0-100.577,0-100.577h-48.321c-7.551,45.134-37.31,82.718-77.674,101.165 v60.388h47.135c0,58.694,0,111.822,0,115.87c0,16.085,15.145,74.577,92.439,74.577c45.436,0,64.237-29.246,64.237-29.246 L259.104,279.929z' })
  );
};

exports.default = TumblrColored;