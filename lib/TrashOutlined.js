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
var TrashOutlined = function TrashOutlined(props) {
  return _react2.default.createElement(
    _CreateSvgIcon2.default,
    {
      name: 'TrashOutlined',
      className: props.className,
      color: props.color,
      size: props.size,
      viewBox: '-31 0 512 512',
      style: props.style
    },
    _react2.default.createElement('path', { fill: props.color, d: 'm105 512h240c24.8125 0 45-20.1875 45-45v-286h45c8.285156 0 15-6.714844 15-15s-6.714844-15-15-15h-16.054688c-7.242187-51.371094-51.089843-91-103.945312-91h-15v-15c0-24.8125-20.1875-45-45-45h-60c-24.8125 0-45 20.1875-45 45v15h-15c-52.851562 0-96.703125 39.628906-103.945312 91h-16.054688c-8.285156 0-15 6.714844-15 15s6.714844 15 15 15h45v286c0 24.8125 20.1875 45 45 45zm255-45c0 8.269531-6.730469 15-15 15h-240c-8.269531 0-15-6.730469-15-15v-286h270zm-180-422c0-8.269531 6.730469-15 15-15h60c8.269531 0 15 6.730469 15 15v15h-90zm-45 45h180c36.289062 0 66.632812 26.253906 73.527344 61h-327.054688c6.894532-34.746094 37.238282-61 73.527344-61zm0 0' }),
    _react2.default.createElement('path', { fill: props.color, d: 'm150 422c8.285156 0 15-6.714844 15-15v-151c0-8.285156-6.714844-15-15-15s-15 6.714844-15 15v151c0 8.285156 6.714844 15 15 15zm0 0' }),
    _react2.default.createElement('path', { fill: props.color, d: 'm225 422c8.285156 0 15-6.714844 15-15v-151c0-8.285156-6.714844-15-15-15s-15 6.714844-15 15v151c0 8.285156 6.714844 15 15 15zm0 0' }),
    _react2.default.createElement('path', { fill: props.color, d: 'm300 422c8.285156 0 15-6.714844 15-15v-151c0-8.285156-6.714844-15-15-15s-15 6.714844-15 15v151c0 8.285156 6.714844 15 15 15zm0 0' })
  );
};

exports.default = TrashOutlined;