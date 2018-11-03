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
var RoomKeyFilled = function RoomKeyFilled(props) {
  return _react2.default.createElement(
    _CreateSvgIcon2.default,
    {
      name: 'RoomKeyFilled',
      className: props.className,
      color: props.color,
      size: props.size,
      viewBox: '0 -31 512 512',
      style: props.style
    },
    _react2.default.createElement('path', { fill: props.color, d: 'm332 375c0 8.398438-6.597656 15-15 15s-15-6.601562-15-15v-60c0-8.402344 6.597656-15 15-15s15 6.597656 15 15v15h58.800781c-7.203125-50.699219-51-90-103.800781-90h-182c-57.898438 0-105 47.101562-105 105s47.101562 105 105 105h182c52.800781 0 96.597656-39.300781 103.800781-90h-58.800781zm-75 15h-152c-8.402344 0-15-6.601562-15-15 0-8.402344 6.597656-15 15-15h152c8.402344 0 15 6.597656 15 15 0 8.398438-6.597656 15-15 15zm0-60h-152c-8.402344 0-15-6.601562-15-15 0-8.402344 6.597656-15 15-15h152c8.402344 0 15 6.597656 15 15 0 8.398438-6.597656 15-15 15zm0 0' }),
    _react2.default.createElement('path', { fill: props.color, d: 'm362 105c0-8.402344 6.597656-15 15-15h73.800781c-7.203125-50.699219-51-90-103.800781-90-40.5 0-77.101562 23.699219-94.5 60h-207.5c-3.898438 0-7.800781 1.5-10.5 4.5l-30 30c-6 5.699219-6 15.300781 0 21l30 30c2.699219 3 6.601562 4.5 10.5 4.5h15v15c0 8.289062 6.710938 15 15 15s15-6.710938 15-15v-15h30v15c0 8.289062 6.710938 15 15 15s15-6.710938 15-15v-15h30v15c0 8.289062 7.710938 15 16 15s15-6.710938 15-15v-15h41.5c17.398438 36.300781 54 60 94.5 60 52.800781 0 96.597656-39.300781 103.800781-90h-73.800781c-8.402344 0-15-6.601562-15-15zm0 0' }),
    _react2.default.createElement('path', { fill: props.color, d: 'm467 90h-16.199219c.898438 4.800781 1.199219 9.898438 1.199219 15 0 5.097656-.300781 10.199219-1.199219 15h16.199219c8.402344 0 15 6.597656 15 15v180c0 8.398438-6.597656 15-15 15h-76.199219c.898438 4.800781 1.199219 9.898438 1.199219 15 0 5.097656-.300781 10.199219-1.199219 15h76.199219c24.902344 0 45-20.101562 45-45v-180c0-24.902344-20.097656-45-45-45zm0 0' })
  );
};

exports.default = RoomKeyFilled;