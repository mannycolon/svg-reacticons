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
var TrashFilled = function TrashFilled(props) {
  return _react2.default.createElement(
    _CreateSvgIcon2.default,
    {
      name: 'TrashFilled',
      className: props.className,
      color: props.color,
      size: props.size,
      viewBox: '-31 0 512 512',
      style: props.style
    },
    _react2.default.createElement('path', { fill: props.color, d: 'm105 512h240c24.8125 0 45-20.1875 45-45v-257h45c8.289062 0 15-6.710938 15-15s-6.710938-15-15-15h-420c-8.289062 0-15 6.710938-15 15s6.710938 15 15 15h45v257c0 24.8125 20.1875 45 45 45zm180-242c0-8.289062 6.710938-15 15-15s15 6.710938 15 15v152c0 8.289062-6.710938 15-15 15s-15-6.710938-15-15zm-75 0c0-8.289062 6.710938-15 15-15s15 6.710938 15 15v152c0 8.289062-6.710938 15-15 15s-15-6.710938-15-15zm-75 0c0-8.289062 6.710938-15 15-15s15 6.710938 15 15v152c0 8.289062-6.710938 15-15 15s-15-6.710938-15-15zm0 0' }),
    _react2.default.createElement('path', { fill: props.color, d: 'm315 60h-15v-15c0-24.8125-20.1875-45-45-45h-60c-24.8125 0-45 20.1875-45 45v15h-15c-52.753906 0-96.128906 39.25-103.484375 90h386.96875c-7.355469-50.75-50.730469-90-103.484375-90zm-135-15c0-8.277344 6.722656-15 15-15h60c8.277344 0 15 6.722656 15 15v15h-90zm0 0' })
  );
};

exports.default = TrashFilled;