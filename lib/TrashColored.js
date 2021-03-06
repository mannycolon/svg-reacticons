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
var TrashColored = function TrashColored(props) {
  return _react2.default.createElement(
    _CreateSvgIcon2.default,
    {
      name: 'TrashColored',
      className: props.className,
      color: props.color,
      size: props.size,
      viewBox: '-31 0 512 512',
      style: props.style
    },
    _react2.default.createElement('path', { fill: props.color || "#68544f", d: 'm300 45v30c0 8.402344-6.597656 15-15 15s-15-6.597656-15-15v-30c0-8.402344-6.597656-15-15-15h-60c-8.402344 0-15 6.597656-15 15v30c0 8.402344-6.597656 15-15 15s-15-6.597656-15-15v-30c0-24.902344 20.097656-45 45-45h60c24.902344 0 45 20.097656 45 45zm0 0' }),
    _react2.default.createElement('path', { fill: props.color || "#3e322e", d: 'm255 30h-30v-30h30c24.902344 0 45 20.097656 45 45v30c0 8.402344-6.597656 15-15 15s-15-6.597656-15-15v-30c0-8.402344-6.597656-15-15-15zm0 0' }),
    _react2.default.createElement('path', { fill: props.color || "#a8ebfa", d: 'm420 166h-390c0-57.898438 47.101562-106 105-106h180c57.898438 0 105 48.101562 105 106zm0 0' }),
    _react2.default.createElement('path', { fill: props.color || "#25d9f8", d: 'm420 166h-195v-106h90c57.898438 0 105 48.101562 105 106zm0 0' }),
    _react2.default.createElement('path', { fill: props.color || "#a8ebfa", d: 'm390 166v301c0 24.898438-20.097656 45-45 45h-240c-24.902344 0-45-20.101562-45-45v-301c0-8.402344 6.597656-15 15-15h300c8.402344 0 15 6.597656 15 15zm0 0' }),
    _react2.default.createElement('path', { fill: props.color || "#25d9f8", d: 'm390 166v301c0 24.898438-20.097656 45-45 45h-120v-361h150c8.402344 0 15 6.597656 15 15zm0 0' }),
    _react2.default.createElement('path', { fill: props.color || "#73bcff", d: 'm150 422c-8.289062 0-15-6.710938-15-15v-151c0-8.289062 6.710938-15 15-15s15 6.710938 15 15v151c0 8.289062-6.710938 15-15 15zm0 0' }),
    _react2.default.createElement('path', { fill: props.color || "#73bcff", d: 'm240 256v151c0 8.398438-6.597656 15-15 15s-15-6.601562-15-15v-151c0-8.402344 6.597656-15 15-15s15 6.597656 15 15zm0 0' }),
    _react2.default.createElement('path', { fill: props.color || "#0095ff", d: 'm300 422c-8.289062 0-15-6.710938-15-15v-151c0-8.289062 6.710938-15 15-15s15 6.710938 15 15v151c0 8.289062-6.710938 15-15 15zm0 0' }),
    _react2.default.createElement('path', { fill: props.color || "#0095ff", d: 'm240 256v151c0 8.398438-6.597656 15-15 15v-181c8.402344 0 15 6.597656 15 15zm0 0' }),
    _react2.default.createElement('path', { fill: props.color || "#68544f", d: 'm450 166c0 8.398438-6.597656 15-15 15h-420c-8.402344 0-15-6.601562-15-15 0-8.402344 6.597656-15 15-15h420c8.402344 0 15 6.597656 15 15zm0 0' }),
    _react2.default.createElement('path', { fill: props.color || "#3e322e", d: 'm450 166c0 8.398438-6.597656 15-15 15h-210v-30h210c8.402344 0 15 6.597656 15 15zm0 0' })
  );
};

exports.default = TrashColored;