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
var PencilFilled = function PencilFilled(props) {
  return _react2.default.createElement(
    _CreateSvgIcon2.default,
    {
      name: 'PencilFilled',
      className: props.className,
      color: props.color,
      size: props.size,
      viewBox: '0 0 512 512',
      style: props.style
    },
    _react2.default.createElement('path', { fill: props.color, d: 'm201.753906 445.074219-134.816406-134.816407 35.589844-35.589843 134.816406 134.816406zm0 0' }),
    _react2.default.createElement('path', { fill: props.color, d: 'm507.605469 4.394531c-2.8125-2.816406-6.628907-4.394531-10.609375-4.394531h-113.605469c-3.980469 0-7.792969 1.582031-10.605469 4.394531l-249.050781 249.050781 56.804687 56.804688 202.230469-202.226562c5.855469-5.859376 15.351563-5.859376 21.210938 0 5.859375 5.855468 5.859375 15.355468 0 21.210937l-202.226563 202.226563 56.800782 56.804687 249.050781-249.046875c2.8125-2.8125 4.390625-6.628906 4.390625-10.605469v-113.613281c0-3.976562-1.578125-7.792969-4.390625-10.605469zm-25.609375 109.214844-83.605469-83.609375h46.953125l36.652344 36.65625zm0 0' }),
    _react2.default.createElement('path', { fill: props.color, d: 'm27.921875 349.257812c-18.007813 18.007813-27.921875 41.945313-27.921875 67.410157 0 25.464843 9.917969 49.40625 27.925781 67.410156 18 18.003906 41.9375 27.917969 67.40625 27.921875h.007813c25.460937 0 49.398437-9.917969 67.402344-27.925781l17.796874-17.792969-134.824218-134.816406zm0 0' })
  );
};

exports.default = PencilFilled;