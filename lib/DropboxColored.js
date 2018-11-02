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
var DropboxColored = function DropboxColored(props) {
  return _react2.default.createElement(
    _CreateSvgIcon2.default,
    {
      name: 'DropboxColored',
      className: props.className,
      color: props.color,
      size: props.size,
      viewBox: '0 0 447.232 447.232',
      style: props.style
    },
    _react2.default.createElement('path', { fill: props.color || "#1587EA", d: 'M207.527,251.676L92.903,177.758c-3.72-2.399-8.559-2.145-12.007,0.63L3.833,240.403 c-5.458,4.392-5.015,12.839,0.873,16.636l114.624,73.918c3.72,2.399,8.559,2.145,12.007-0.63l77.063-62.014 C213.858,263.92,213.415,255.473,207.527,251.676z' }),
    _react2.default.createElement('path', { fill: props.color || "#1587EA", d: 'M238.833,268.312l77.063,62.014c3.449,2.775,8.287,3.029,12.007,0.63l114.624-73.918 c5.888-3.797,6.331-12.244,0.873-16.636l-77.063-62.014c-3.449-2.775-8.287-3.029-12.007-0.63l-114.624,73.918 C233.819,255.473,233.375,263.92,238.833,268.312z' }),
    _react2.default.createElement('path', { fill: props.color || "#1587EA", d: 'M208.4,74.196l-77.063-62.014c-3.449-2.775-8.287-3.029-12.007-0.63L4.706,85.47 c-5.888,3.797-6.331,12.244-0.873,16.636l77.063,62.014c3.449,2.775,8.287,3.029,12.007,0.63l114.624-73.918 C213.415,87.035,213.858,78.588,208.4,74.196z' }),
    _react2.default.createElement('path', { fill: props.color || "#1587EA", d: 'M442.527,85.47L327.903,11.552c-3.72-2.399-8.559-2.145-12.007,0.63l-77.063,62.014 c-5.458,4.392-5.015,12.839,0.873,16.636l114.625,73.918c3.72,2.399,8.559,2.145,12.007-0.63l77.063-62.014 C448.858,97.713,448.415,89.266,442.527,85.47z' }),
    _react2.default.createElement('path', { fill: props.color || "#1587EA", d: 'M218,279.2l-86.3,68.841c-3.128,2.495-7.499,2.715-10.861,0.547L99.568,334.87 c-6.201-3.999-14.368,0.453-14.368,7.831v7.416c0,3.258,1.702,6.28,4.488,7.969l128.481,77.884c2.969,1.8,6.692,1.8,9.661,0 l128.481-77.884c2.786-1.689,4.488-4.71,4.488-7.969v-6.619c0-7.378-8.168-11.83-14.368-7.831l-20.024,12.913 c-3.368,2.172-7.748,1.947-10.876-0.559l-85.893-68.809C226.238,276.489,221.405,276.484,218,279.2z' })
  );
};

exports.default = DropboxColored;