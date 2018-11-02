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
var WikipediaColored = function WikipediaColored(props) {
  return _react2.default.createElement(
    _CreateSvgIcon2.default,
    {
      name: 'WikipediaColored',
      className: props.className,
      color: props.color,
      size: props.size,
      viewBox: '0 0 458.723 458.723',
      style: props.style
    },
    _react2.default.createElement('path', { fill: props.color || "#222A30", d: 'M455.724,93.489H367.32h-3v3v9.613v3h3h6.143c7.145,0,13.588,3.667,17.237,9.81 c3.648,6.143,3.786,13.555,0.368,19.829l-98.3,180.432l-44.769-106.727l42.169-77.382c8.727-16.014,25.477-25.962,43.714-25.962 h1.992h3v-3v-9.613v-3h-3H247.47h-3v3v9.613v3h3h6.143c7.145,0,13.588,3.667,17.237,9.81c3.648,6.143,3.786,13.555,0.368,19.829 l-30.587,56.143L213.372,129.9c-1.976-4.71-1.487-9.852,1.341-14.105s7.38-6.693,12.488-6.693h6.988h3v-3v-9.613v-3h-3H128.46h-3v3 v9.613v3h3h1.454c20.857,0,39.546,12.428,47.615,31.661l40.277,96.018l-44.887,82.392L93.523,129.9 c-1.976-4.71-1.487-9.852,1.341-14.105s7.38-6.693,12.488-6.693h10.737h3v-3v-9.613v-3h-3H3H0v3v9.613v3h3h7.064 c20.857,0,39.547,12.428,47.615,31.661l91.526,218.191c1.601,3.816,5.313,6.282,9.458,6.282c3.804,0,7.163-1.998,8.986-5.344 l11.939-21.91l45.582-83.646l43.884,104.617c1.601,3.816,5.313,6.282,9.458,6.282c3.804,0,7.163-1.998,8.986-5.344l11.939-21.91 l110.58-202.919c8.727-16.014,25.477-25.962,43.714-25.962h1.992h3v-3v-9.613v-3h-2.999L455.724,93.489L455.724,93.489z' })
  );
};

exports.default = WikipediaColored;