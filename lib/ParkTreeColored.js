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
var ParkTreeColored = function ParkTreeColored(props) {
  return _react2.default.createElement(
    _CreateSvgIcon2.default,
    {
      name: 'ParkTreeColored',
      className: props.className,
      color: props.color,
      size: props.size,
      viewBox: '0 0 512 512',
      style: props.style
    },
    _react2.default.createElement('path', { fill: props.color || "#ff9f00", d: 'm467 512c-8.289062 0-15-6.710938-15-15v-61h-61v61c0 8.289062-6.710938 15-15 15s-15-6.710938-15-15v-121c0-8.289062 6.710938-15 15-15h91c8.289062 0 15 6.710938 15 15v121c0 8.289062-6.710938 15-15 15zm0 0' }),
    _react2.default.createElement('path', { fill: props.color || "#68544f", d: 'm226 376h60v121h-60zm0 0' }),
    _react2.default.createElement('path', { fill: props.color || "#3e322e", d: 'm256 376h30v121h-30zm0 0' }),
    _react2.default.createElement('path', { fill: props.color || "#00b44b", d: 'm357.101562 171.398438c2.699219-11.996094 3.898438-23.699219 3.898438-35.398438 0-74.398438-47.101562-136-105-136s-105 61.601562-105 136c0 11.699219 1.199219 23.402344 3.898438 35.398438-21.898438 27.601562-33.898438 62.703124-33.898438 99.601562 0 82.800781 60.601562 150 135 150s135-67.199219 135-150c0-36.898438-12-72-33.898438-99.601562zm0 0' }),
    _react2.default.createElement('path', { fill: props.color || "#00a03c", d: 'm391 271c0 82.800781-60.601562 150-135 150v-421c57.898438 0 105 61.601562 105 136 0 11.699219-1.199219 23.402344-3.898438 35.398438 21.898438 27.601562 33.898438 62.703124 33.898438 99.601562zm0 0' }),
    _react2.default.createElement('path', { fill: props.color || "#725d57", d: 'm106 376h60v121h-60zm0 0' }),
    _react2.default.createElement('path', { fill: props.color || "#53433f", d: 'm136 376h30v121h-30zm0 0' }),
    _react2.default.createElement('path', { fill: props.color || "#70da40", d: 'm237.101562 171.398438c2.699219-11.996094 3.898438-23.699219 3.898438-35.398438 0-74.398438-47.101562-136-105-136s-105 61.601562-105 136c0 11.699219 1.199219 23.402344 3.898438 35.398438-21.898438 27.601562-34.898438 62.703124-34.898438 99.601562 0 82.800781 61.601562 150 136 150s135-67.199219 135-150c0-36.898438-12-72-33.898438-99.601562zm0 0' }),
    _react2.default.createElement('path', { fill: props.color || "#90e36a", d: 'm512 497c0 8.402344-6.597656 15-15 15h-482c-8.402344 0-15-6.597656-15-15s6.597656-15 15-15h482c8.402344 0 15 6.597656 15 15zm0 0' }),
    _react2.default.createElement('path', { fill: props.color || "#fdbf00", d: 'm497 451h-151c-8.289062 0-15-6.710938-15-15s6.710938-15 15-15h151c8.289062 0 15 6.710938 15 15s-6.710938 15-15 15zm0 0' }),
    _react2.default.createElement(
      'g',
      { fill: props.color || "#56c225" },
      _react2.default.createElement('path', { d: 'm271 271c0 82.800781-60.601562 150-135 150v-421c57.898438 0 105 61.601562 105 136 0 11.699219-1.199219 23.402344-3.898438 35.398438 21.898438 27.601562 33.898438 62.703124 33.898438 99.601562zm0 0' }),
      _react2.default.createElement('path', { d: 'm512 497c0 8.402344-6.597656 15-15 15h-241v-30h241c8.402344 0 15 6.597656 15 15zm0 0' })
    )
  );
};

exports.default = ParkTreeColored;