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
var WeightColored = function WeightColored(props) {
  return _react2.default.createElement(
    _CreateSvgIcon2.default,
    {
      name: 'WeightColored',
      className: props.className,
      color: props.color,
      size: props.size,
      viewBox: '0 -2 512.00102 512',
      style: props.style
    },
    _react2.default.createElement('path', { fill: props.color || "#ffa426", d: 'm447.339844 507.816406h-382.679688c-35.652344 0-64.660156-29.003906-64.660156-64.660156v-378.496094c0-35.652344 29.007812-64.660156 64.660156-64.660156h382.679688c35.652344 0 64.660156 29.007812 64.660156 64.660156v378.496094c0 35.65625-29.007812 64.660156-64.660156 64.660156zm0 0' }),
    _react2.default.createElement('path', { fill: props.color || "#cff9ff", d: 'm314.285156 171h-116.570312c-31.117188 0-56.433594-25.316406-56.433594-56.433594 0-31.121094 25.316406-56.4375 56.433594-56.4375h116.570312c31.117188 0 56.433594 25.316406 56.433594 56.4375 0 31.117188-25.316406 56.433594-56.433594 56.433594zm0 0' }),
    _react2.default.createElement('path', { fill: props.color || "#ff6c52", d: 'm256.003906 102.996094c-8.449218 0-15.296875 6.847656-15.296875 15.296875v52.707031h30.59375v-52.707031c0-8.449219-6.851562-15.296875-15.296875-15.296875zm0 0' }),
    _react2.default.createElement('path', { fill: props.color || "#fe8205", d: 'm447.339844 0h-191.335938v507.816406h191.335938c35.65625 0 64.660156-29.003906 64.660156-64.660156v-378.496094c0-35.652344-29.007812-64.660156-64.660156-64.660156zm0 0' }),
    _react2.default.createElement('path', { fill: props.color || "#b5efff", d: 'm314.285156 58.128906h-58.28125v112.871094h58.28125c31.117188 0 56.433594-25.316406 56.433594-56.433594 0-31.121094-25.316406-56.4375-56.433594-56.4375zm0 0' }),
    _react2.default.createElement('path', { fill: props.color || "#ff432e", d: 'm271.300781 171v-52.707031c0-8.449219-6.851562-15.296875-15.296875-15.296875v68.003906zm0 0' })
  );
};

exports.default = WeightColored;