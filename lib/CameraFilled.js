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
var CameraFilled = function CameraFilled(props) {
  return _react2.default.createElement(
    _CreateSvgIcon2.default,
    {
      name: 'CameraFilled',
      className: props.className,
      color: props.color,
      size: props.size,
      viewBox: '0 -8 512 512',
      style: props.style
    },
    _react2.default.createElement('path', { fill: props.color, d: 'm256 174.601562c-58.171875 0-105.5 47.324219-105.5 105.5 0 58.171876 47.328125 105.5 105.5 105.5 58.175781 0 105.5-47.328124 105.5-105.5 0-58.175781-47.324219-105.5-105.5-105.5zm0 0' }),
    _react2.default.createElement('path', { fill: props.color, d: 'm456.835938 80.332031h-51.972657l-5.777343-28.886719c-5.769532-28.847656-33.332032-51.445312-62.75-51.445312h-160.667969c-29.421875 0-56.984375 22.597656-62.753907 51.445312l-5.777343 28.886719h-51.96875c-30.421875 0-55.167969 24.75-55.167969 55.167969v305.265625c0 30.421875 24.746094 55.167969 55.167969 55.167969h401.667969c30.417968 0 55.164062-24.746094 55.164062-55.167969v-305.265625c0-30.417969-24.746094-55.167969-55.164062-55.167969zm-200.835938 335.269531c-74.714844 0-135.5-60.785156-135.5-135.5 0-74.714843 60.785156-135.5 135.5-135.5s135.5 60.785157 135.5 135.5c0 74.714844-60.785156 135.5-135.5 135.5zm171.273438-229.328124c-2.789063 2.789062-6.660157 4.390624-10.609376 4.390624-3.941406 0-7.808593-1.601562-10.609374-4.390624-2.789063-2.789063-4.390626-6.660157-4.390626-10.609376 0-3.941406 1.601563-7.8125 4.390626-10.601562 2.800781-2.800781 6.671874-4.398438 10.609374-4.398438 3.949219 0 7.820313 1.601563 10.609376 4.398438 2.792968 2.789062 4.390624 6.660156 4.390624 10.601562 0 3.949219-1.597656 7.820313-4.390624 10.609376zm0 0' })
  );
};

exports.default = CameraFilled;