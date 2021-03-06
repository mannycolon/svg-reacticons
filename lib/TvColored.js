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
var TvColored = function TvColored(props) {
  return _react2.default.createElement(
    _CreateSvgIcon2.default,
    {
      name: 'TvColored',
      className: props.className,
      color: props.color,
      size: props.size,
      viewBox: '0 0 512 512.00025',
      style: props.style
    },
    _react2.default.createElement('path', { fill: props.color || "#465a61", d: 'm75 512c-3.835938 0-7.675781-1.464844-10.605469-4.394531-5.859375-5.859375-5.859375-15.351563 0-21.210938l30-30c5.859375-5.859375 15.351563-5.859375 21.210938 0s5.859375 15.351563 0 21.210938l-30 30c-2.929688 2.929687-6.765625 4.394531-10.605469 4.394531zm0 0' }),
    _react2.default.createElement('path', { fill: props.color || "#3b4a51", d: 'm437 512c-3.835938 0-7.675781-1.464844-10.605469-4.394531l-30-30c-5.859375-5.859375-5.859375-15.351563 0-21.210938s15.351563-5.859375 21.210938 0l30 30c5.859375 5.859375 5.859375 15.351563 0 21.210938-2.929688 2.929687-6.765625 4.394531-10.605469 4.394531zm0 0' }),
    _react2.default.createElement('path', { fill: props.color || "#465a61", d: 'm326.5 25.5-90 90c-2.699219 3-6.601562 4.5-10.5 4.5s-7.800781-1.5-10.5-4.5l-90-90c-6-5.699219-6-15.300781 0-21 5.699219-6 15.300781-6 21 0l79.5 79.199219s0 0 .300781-.300781l79.199219-78.898438c5.699219-6 15.296875-6 21 0 6 5.699219 6 15.300781 0 21zm0 0' }),
    _react2.default.createElement('path', { fill: props.color || "#3b4a51", d: 'm236.5 115.5c-2.699219 3-6.601562 4.5-10.5 4.5v-36.300781s0 0 .300781-.300781l79.199219-78.898438c5.699219-6 15.296875-6 21 0 6 5.699219 6 15.300781 0 21zm0 0' }),
    _react2.default.createElement('path', { fill: props.color || "#e63950", d: 'm467 90h-422c-24.902344 0-45 20.097656-45 45v302c0 24.898438 20.097656 45 45 45h422c24.902344 0 45-20.101562 45-45v-302c0-24.902344-20.097656-45-45-45zm0 0' }),
    _react2.default.createElement('path', { fill: props.color || "#cc2e43", d: 'm512 135v302c0 24.898438-20.097656 45-45 45h-241v-392h241c24.902344 0 45 20.097656 45 45zm0 0' }),
    _react2.default.createElement('path', { fill: props.color || "#c6e2e7", d: 'm317 150h-212c-24.902344 0-45 20.097656-45 45v182c0 24.898438 20.097656 45 45 45h212c24.902344 0 45-20.101562 45-45v-182c0-24.902344-20.097656-45-45-45zm0 0' }),
    _react2.default.createElement('path', { fill: props.color || "#c6e2e7", d: 'm422 225c-16.539062 0-30-13.460938-30-30s13.460938-30 30-30 30 13.460938 30 30-13.460938 30-30 30zm0 0' }),
    _react2.default.createElement(
      'g',
      { fill: props.color || "#465a61" },
      _react2.default.createElement('path', { d: 'm437 285h-30c-8.289062 0-15-6.707031-15-15 0-8.289062 6.710938-15 15-15h30c8.292969 0 15 6.710938 15 15 0 8.292969-6.707031 15-15 15zm0 0' }),
      _react2.default.createElement('path', { d: 'm437 347h-30c-8.289062 0-15-6.707031-15-15 0-8.289062 6.710938-15 15-15h30c8.292969 0 15 6.710938 15 15 0 8.292969-6.707031 15-15 15zm0 0' }),
      _react2.default.createElement('path', { d: 'm437 407h-30c-8.289062 0-15-6.707031-15-15 0-8.289062 6.710938-15 15-15h30c8.292969 0 15 6.710938 15 15 0 8.292969-6.707031 15-15 15zm0 0' })
    ),
    _react2.default.createElement('path', { fill: props.color || "#a8d3d8", d: 'm362 195v182c0 24.898438-20.097656 45-45 45h-91v-272h91c24.902344 0 45 20.097656 45 45zm0 0' })
  );
};

exports.default = TvColored;