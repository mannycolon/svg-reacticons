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
var FlickrColored = function FlickrColored(props) {
  return _react2.default.createElement(
    _CreateSvgIcon2.default,
    {
      name: 'FlickrColored',
      className: props.className,
      color: props.color,
      size: props.size,
      viewBox: '0 0 362.68 362.68',
      style: props.style
    },
    _react2.default.createElement('circle', { fill: props.color || "#005DE1", cx: '85.8', cy: '181.34', r: '85.8' }),
    _react2.default.createElement('circle', { fill: props.color || "#FF007E", cx: '276.88', cy: '181.34', r: '85.8' })
  );
};

exports.default = FlickrColored;