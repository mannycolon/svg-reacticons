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
var GiftFilled = function GiftFilled(props) {
  return _react2.default.createElement(
    _CreateSvgIcon2.default,
    {
      name: 'giftFilled',
      className: props.className,
      color: props.color,
      size: props.size,
      viewBox: '0 -31 512 512',
      style: props.style
    },
    _react2.default.createElement('path', { fill: props.color, d: 'm207.601562 158.699219h79.097657v353.300781h-79' }),
    _react2.default.createElement('path', { fill: props.color, d: 'm177.300781 280h-130.699219v216.898438c0 8.402343 6.796876 15.101562 15.097657 15.101562h115' }),
    _react2.default.createElement('path', { fill: props.color, d: 'm316.898438 280v232h115.5c8.402343 0 15.101562-6.800781 15.101562-15.101562v-216' }),
    _react2.default.createElement('path', { fill: props.color, d: 'm0 158.699219h177.300781v91.101562h-177' }),
    _react2.default.createElement('path', { fill: props.color, d: 'm316.898438 158.699219h177.300781v91.101562h-177' }),
    _react2.default.createElement('path', { fill: props.color, d: 'm133.800781 79.300781c0-13.101562 5.097657-25.402343 14.398438-34.699219 9.300781-9.300781 21.601562-14.402343 34.699219-14.402343 27.101562 0 49.101562 22 49.101562 49.101562v49.097657h30.199219v-49.097657c0-27.101562 22-49.101562 49.101562-49.101562 13.097657 0 25.398438 5.101562 34.699219 14.402343 9.300781 9.296876 14.398438 21.597657 14.398438 34.699219 0 27.097657-22 49.097657-49.097657 49.097657h62.300781c10.699219-13.5 17.097657-30.597657 17.097657-49.097657 0-21.199219-8.300781-41.101562-23.199219-56.101562-15.101562-14.898438-35-23.199219-56.199219-23.199219-26.402343 0-49.800781 13-64.199219 32.800781-14.402343-19.800781-37.800781-32.800781-64.203124-32.800781-21.199219 0-41.097657 8.300781-56.097657 23.199219-15 15-23.199219 34.902343-23.199219 56.101562 0 18.5 6.398438 35.597657 17.097657 49.097657h62.199219c-27.097657 0-49.097657-22-49.097657-49' })
  );
};

exports.default = GiftFilled;