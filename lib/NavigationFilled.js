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
var NavigationFilled = function NavigationFilled(props) {
  return _react2.default.createElement(
    _CreateSvgIcon2.default,
    {
      name: 'NavigationFilled',
      className: props.className,
      color: props.color,
      size: props.size,
      viewBox: '0 0 512 512',
      style: props.style
    },
    _react2.default.createElement('path', { fill: props.color, d: 'm196.644531 313.6875 52.691407-26.121094c2.09375-1.039062 4.378906-1.566406 6.664062-1.566406s4.570312.527344 6.664062 1.566406l52.691407 26.121094-59.355469-138.179688zm0 0' }),
    _react2.default.createElement('path', { fill: props.color, d: 'm91 256c0 90.980469 74.019531 165 165 165s165-74.019531 165-165-74.019531-165-165-165-165 74.019531-165 165zm178.785156-124.410156 89.238282 207.730468c2.472656 5.769532 1.097656 12.480469-3.472657 16.816407-4.492187 4.261719-11.269531 5.367187-16.980469 2.535156l-82.570312-40.929687-82.574219 40.929687c-5.640625 2.78125-12.40625 1.800781-16.976562-2.535156-4.570313-4.335938-5.945313-11.042969-3.472657-16.816407l89.238282-207.726562c4.746094-11.019531 22.824218-11.019531 27.570312-.003906zm0 0' }),
    _react2.default.createElement('path', { fill: props.color, d: 'm271 0v61.761719c95.546875 7.328125 171.910156 83.691406 179.238281 179.238281h61.761719c-7.539062-128.625-112.375-233.460938-241-241zm0 0' }),
    _react2.default.createElement('path', { fill: props.color, d: 'm0 241h61.761719c7.328125-95.546875 83.691406-171.910156 179.238281-179.238281v-61.761719c-128.625 7.539062-233.460938 112.375-241 241zm0 0' }),
    _react2.default.createElement('path', { fill: props.color, d: 'm241 512v-61.761719c-95.546875-7.328125-171.910156-83.691406-179.238281-179.238281h-61.761719c7.539062 128.625 112.375 233.460938 241 241zm0 0' }),
    _react2.default.createElement('path', { fill: props.color, d: 'm271 450.238281v61.761719c128.625-7.539062 233.460938-112.375 241-241h-61.761719c-7.328125 95.546875-83.691406 171.910156-179.238281 179.238281zm0 0' })
  );
};

exports.default = NavigationFilled;