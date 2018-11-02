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
var WeightFilled = function WeightFilled(props) {
  return _react2.default.createElement(
    _CreateSvgIcon2.default,
    {
      name: 'WeightFilled',
      className: props.className,
      color: props.color,
      size: props.size,
      viewBox: '-33 -37 1065.0001 1065',
      style: props.style
    },
    _react2.default.createElement('path', { fill: props.color, d: 'm610.859375 170.644531h-227.320313c-27.785156 0-50.394531 22.601563-50.394531 50.390625 0 27.785156 22.609375 50.394532 50.394531 50.394532h83.839844v-43.125c0-16.472657 13.355469-29.832032 29.828125-29.832032 16.472657 0 29.824219 13.359375 29.824219 29.832032v43.125h83.828125c27.789063 0 50.398437-22.609376 50.398437-50.394532 0-27.789062-22.609374-50.390625-50.398437-50.390625zm0 0' }),
    _react2.default.createElement('path', { fill: props.color, d: 'm870.328125-2.371094h-746.253906c-69.527344 0-126.09375 56.5625-126.09375 126.089844v738.097656c0 69.519532 56.566406 126.089844 126.09375 126.089844h746.253906c69.527344 0 126.089844-56.570312 126.089844-126.089844v-738.097656c0-69.527344-56.5625-126.089844-126.089844-126.089844zm-259.46875 333.460938h-227.320313c-60.679687 0-110.046874-49.375-110.046874-110.054688 0-60.683594 49.367187-110.054687 110.046874-110.054687h227.320313c60.6875 0 110.050781 49.371093 110.050781 110.054687 0 60.675782-49.363281 110.054688-110.050781 110.054688zm0 0' })
  );
};

exports.default = WeightFilled;