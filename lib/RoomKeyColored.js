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
var RoomKeyColored = function RoomKeyColored(props) {
  return _react2.default.createElement(
    _CreateSvgIcon2.default,
    {
      name: 'roomKeyColored',
      className: props.className,
      color: props.color,
      size: props.size,
      viewBox: '0 -31 512 512',
      style: props.style
    },
    _react2.default.createElement('path', { fill: props.color || "#ede9e8", d: 'm287 240h-182c-57.898438 0-105 47.101562-105 105s47.101562 105 105 105h182c57.898438 0 105-47.101562 105-105s-47.101562-105-105-105zm0 0' }),
    _react2.default.createElement('path', { fill: props.color || "#dfd7d5", d: 'm392 345c0 57.898438-47.101562 105-105 105h-182c-57.898438 0-105-47.101562-105-105zm0 0' }),
    _react2.default.createElement(
      'g',
      { fill: props.color || "#fdbf00" },
      _react2.default.createElement('path', { d: 'm75 180c-8.289062 0-15-6.710938-15-15v-30c0-8.289062 6.710938-15 15-15s15 6.710938 15 15v30c0 8.289062-6.710938 15-15 15zm0 0' }),
      _react2.default.createElement('path', { d: 'm135 180c-8.289062 0-15-6.710938-15-15v-30c0-8.289062 6.710938-15 15-15s15 6.710938 15 15v30c0 8.289062-6.710938 15-15 15zm0 0' }),
      _react2.default.createElement('path', { d: 'm196 180c-8.289062 0-15-6.710938-15-15v-30c0-8.289062 6.710938-15 15-15s15 6.710938 15 15v30c0 8.289062-6.710938 15-15 15zm0 0' })
    ),
    _react2.default.createElement('path', { fill: props.color || "#ffd400", d: 'm347 0c-40.5 0-77.101562 23.699219-94.5 60h-207.5c-3.898438 0-7.800781 1.5-10.5 4.5l-30 30c-3 2.699219-4.5 6.601562-4.5 10.5s1.5 7.800781 4.5 10.5l30 30c2.699219 3 6.601562 4.5 10.5 4.5h207.5c17.398438 36.300781 54 60 94.5 60 57.898438 0 105-47.101562 105-105s-47.101562-105-105-105zm0 0' }),
    _react2.default.createElement('path', { fill: props.color || "#fdbf00", d: 'm452 105c0 57.898438-47.101562 105-105 105-40.5 0-77.101562-23.699219-94.5-60h-207.5c-3.898438 0-7.800781-1.5-10.5-4.5l-30-30c-3-2.699219-4.5-6.601562-4.5-10.5zm0 0' }),
    _react2.default.createElement('path', { fill: props.color || "#d2c5c2", d: 'm257 330h-152c-8.289062 0-15-6.710938-15-15s6.710938-15 15-15h152c8.289062 0 15 6.710938 15 15s-6.710938 15-15 15zm0 0' }),
    _react2.default.createElement('path', { fill: props.color || "#c4b3af", d: 'm257 390h-152c-8.289062 0-15-6.710938-15-15s6.710938-15 15-15h152c8.289062 0 15 6.710938 15 15s-6.710938 15-15 15zm0 0' }),
    _react2.default.createElement('path', { fill: props.color || "#53433f", d: 'm332 315v60c0 8.398438-6.597656 15-15 15s-15-6.601562-15-15v-60c0-8.402344 6.597656-15 15-15s15 6.597656 15 15zm0 0' }),
    _react2.default.createElement('path', { fill: props.color || "#3e322e", d: 'm332 345v30c0 8.398438-6.597656 15-15 15s-15-6.601562-15-15v-30zm0 0' }),
    _react2.default.createElement('path', { fill: props.color || "#68544f", d: 'm302 330h165c8.402344 0 15-6.601562 15-15v-180c0-8.402344-6.597656-15-15-15h-90c-8.402344 0-15-6.601562-15-15 0-8.402344 6.597656-15 15-15h90c24.902344 0 45 20.097656 45 45v180c0 11.699219-4.5 22.199219-11.699219 30-8.101562 9.300781-20.101562 15-33.300781 15h-165zm0 0' })
  );
};

exports.default = RoomKeyColored;