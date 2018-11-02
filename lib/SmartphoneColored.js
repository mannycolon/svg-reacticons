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
var SmartphoneColored = function SmartphoneColored(props) {
  return _react2.default.createElement(
    _CreateSvgIcon2.default,
    {
      name: 'SmartphoneColored',
      className: props.className,
      color: props.color,
      size: props.size,
      viewBox: '0 0 58 58',
      style: props.style
    },
    _react2.default.createElement('path', { fill: props.color || "#424A60", d: 'M41.595,58H16.405C14.525,58,13,56.475,13,54.595V3.405C13,1.525,14.525,0,16.405,0h25.189 C43.475,0,45,1.525,45,3.405v51.189C45,56.475,43.475,58,41.595,58z' }),
    _react2.default.createElement('rect', { x: '13', y: '6', fill: props.color || "#E7ECED", width: '32', height: '40' }),
    _react2.default.createElement('circle', { fill: props.color || "#262B35", cx: '29', cy: '52', r: '3' }),
    _react2.default.createElement('path', { fill: props.color || "#262B35", d: 'M29,4h-4c-0.553,0-1-0.447-1-1s0.447-1,1-1h4c0.553,0,1,0.447,1,1S29.553,4,29,4z' }),
    _react2.default.createElement('path', { fill: props.color || "#262B35", d: 'M33,4h-1c-0.553,0-1-0.447-1-1s0.447-1,1-1h1c0.553,0,1,0.447,1,1S33.553,4,33,4z' }),
    _react2.default.createElement('path', { fill: props.color || "#3083C9", d: 'M30.962,17.019h-3.924c-0.573,0-1.038-0.465-1.038-1.038v-3.924c0-0.573,0.465-1.038,1.038-1.038 h3.924c0.573,0,1.038,0.465,1.038,1.038v3.924C32,16.554,31.535,17.019,30.962,17.019z' }),
    _react2.default.createElement('path', { fill: props.color || "#88C057", d: 'M21.962,17.019h-3.924c-0.573,0-1.038-0.465-1.038-1.038v-3.924c0-0.573,0.465-1.038,1.038-1.038 h3.924c0.573,0,1.038,0.465,1.038,1.038v3.924C23,16.554,22.535,17.019,21.962,17.019z' }),
    _react2.default.createElement('path', { fill: props.color || "#DC691D", d: 'M39.962,17.019h-3.924c-0.573,0-1.038-0.465-1.038-1.038v-3.924c0-0.573,0.465-1.038,1.038-1.038 h3.924c0.573,0,1.038,0.465,1.038,1.038v3.924C41,16.554,40.535,17.019,39.962,17.019z' }),
    _react2.default.createElement('path', { fill: props.color || "#EBBA16", d: 'M30.962,26h-3.924C26.465,26,26,25.535,26,24.962v-3.924C26,20.465,26.465,20,27.038,20h3.924 C31.535,20,32,20.465,32,21.038v3.924C32,25.535,31.535,26,30.962,26z' }),
    _react2.default.createElement('path', { fill: props.color || "#7383BF", d: 'M21.962,26h-3.924C17.465,26,17,25.535,17,24.962v-3.924C17,20.465,17.465,20,18.038,20h3.924 C22.535,20,23,20.465,23,21.038v3.924C23,25.535,22.535,26,21.962,26z' }),
    _react2.default.createElement('path', { fill: props.color || "#DD352E", d: 'M39.962,26h-3.924C35.465,26,35,25.535,35,24.962v-3.924C35,20.465,35.465,20,36.038,20h3.924 C40.535,20,41,20.465,41,21.038v3.924C41,25.535,40.535,26,39.962,26z' }),
    _react2.default.createElement('path', { fill: props.color || "#A485BE", d: 'M30.962,35h-3.924C26.465,35,26,34.535,26,33.962v-3.924C26,29.465,26.465,29,27.038,29h3.924 C31.535,29,32,29.465,32,30.038v3.924C32,34.535,31.535,35,30.962,35z' }),
    _react2.default.createElement('path', { fill: props.color || "#EA6248", d: 'M21.962,35h-3.924C17.465,35,17,34.535,17,33.962v-3.924C17,29.465,17.465,29,18.038,29h3.924 C22.535,29,23,29.465,23,30.038v3.924C23,34.535,22.535,35,21.962,35z' }),
    _react2.default.createElement('path', { fill: props.color || "#25AE88", d: 'M39.962,35h-3.924C35.465,35,35,34.535,35,33.962v-3.924C35,29.465,35.465,29,36.038,29h3.924 C40.535,29,41,29.465,41,30.038v3.924C41,34.535,40.535,35,39.962,35z' })
  );
};

exports.default = SmartphoneColored;