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
var TruckOutlined = function TruckOutlined(props) {
  return _react2.default.createElement(_CreateSvgIcon2.default, {
    name: 'truckOutlined',
    className: props.className,
    color: props.color,
    size: props.size,
    viewBox: '0 -96 480 480',
    style: props.style
  });
};

exports.default = TruckOutlined;