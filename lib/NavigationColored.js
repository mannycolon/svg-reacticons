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
var NavigationColored = function NavigationColored(props) {
  return _react2.default.createElement(
    _CreateSvgIcon2.default,
    {
      name: 'NavigationColored',
      className: props.className,
      color: props.color,
      size: props.size,
      viewBox: '0 0 512 512',
      style: props.style
    },
    _react2.default.createElement('path', { fill: props.color || "#68544f", d: 'm256 0c-140.699219 0-256 115.300781-256 256s115.300781 256 256 256 256-115.300781 256-256-115.300781-256-256-256zm0 0' }),
    _react2.default.createElement('path', { fill: props.color || "#53433f", d: 'm512 256c0 140.699219-115.300781 256-256 256v-512c140.699219 0 256 115.300781 256 256zm0 0' }),
    _react2.default.createElement('path', { fill: props.color || "#ede9e8", d: 'm256 61c-107.402344 0-195 87.597656-195 195 0 107.398438 87.597656 195 195 195s195-87.601562 195-195c0-107.402344-87.597656-195-195-195zm0 0' }),
    _react2.default.createElement('path', { fill: props.color || "#dfd7d5", d: 'm451 256c0 107.398438-87.597656 195-195 195v-390c107.402344 0 195 87.597656 195 195zm0 0' }),
    _react2.default.createElement('path', { fill: props.color || "#68544f", d: 'm271 436v61c0 8.398438-6.597656 15-15 15s-15-6.601562-15-15v-61c0-8.402344 6.597656-15 15-15s15 6.597656 15 15zm0 0' }),
    _react2.default.createElement('path', { fill: props.color || "#68544f", d: 'm271 15v61c0 8.398438-6.597656 15-15 15s-15-6.601562-15-15v-61c0-8.402344 6.597656-15 15-15s15 6.597656 15 15zm0 0' }),
    _react2.default.createElement('path', { fill: props.color || "#53433f", d: 'm497 271h-61c-8.289062 0-15-6.710938-15-15s6.710938-15 15-15h61c8.289062 0 15 6.710938 15 15s-6.710938 15-15 15zm0 0' }),
    _react2.default.createElement('path', { fill: props.color || "#68544f", d: 'm76 271h-61c-8.289062 0-15-6.710938-15-15s6.710938-15 15-15h61c8.289062 0 15 6.710938 15 15s-6.710938 15-15 15zm0 0' }),
    _react2.default.createElement('path', { fill: props.color || "#53433f", d: 'm271 15v61c0 8.398438-6.597656 15-15 15v-91c8.402344 0 15 6.597656 15 15zm0 0' }),
    _react2.default.createElement('path', { fill: props.color || "#53433f", d: 'm271 436v61c0 8.398438-6.597656 15-15 15v-91c8.402344 0 15 6.597656 15 15zm0 0' }),
    _react2.default.createElement('path', { fill: props.color || "#70da40", d: 'm358.898438 339.398438-89.097657-207.898438c-2.402343-5.402344-8.101562-8.101562-13.800781-8.101562s-11.398438 2.699218-13.800781 8.101562l-89.097657 207.898438c-2.703124 5.699218-1.199218 12.300781 3.296876 16.800781 4.503906 4.199219 11.402343 5.398437 17.101562 2.402343l82.5-40.800781 82.5 40.800781c5.699219 2.996094 12.597656 1.796876 17.101562-2.402343 4.496094-4.5 6-11.101563 3.296876-16.800781zm0 0' }),
    _react2.default.createElement('path', { fill: props.color || "#49a520", d: 'm355.601562 356.199219c-4.503906 4.199219-11.402343 5.398437-17.101562 2.402343l-82.5-40.800781v-194.402343c5.699219 0 11.398438 2.703124 13.800781 8.101562l89.097657 207.898438c2.703124 5.699218 1.199218 12.300781-3.296876 16.800781zm0 0' })
  );
};

exports.default = NavigationColored;