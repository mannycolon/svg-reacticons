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
var YelpColored = function YelpColored(props) {
  return _react2.default.createElement(
    _CreateSvgIcon2.default,
    {
      name: 'YelpColored',
      className: props.className,
      color: props.color,
      size: props.size,
      viewBox: '0 0 435.646 435.646',
      style: props.style
    },
    _react2.default.createElement('path', { fill: props.color || "#DC0000", d: 'M182.47,306.937l-60.235,73.351c-8.475,10.32-4.426,25.905,8,30.796l58.889,23.178 c12.704,5,26.514-4.141,26.875-17.789l2.539-96.083C219.05,301.021,194.766,291.964,182.47,306.937z' }),
    _react2.default.createElement('path', { fill: props.color || "#DC0000", d: 'M172.459,234.019l-89.331-32.073c-12.569-4.513-25.886,4.539-26.315,17.887l-2.033,63.253 c-0.439,13.646,12.813,23.58,25.788,19.331l91.345-29.907C190.327,266.482,190.694,240.566,172.459,234.019z' }),
    _react2.default.createElement('path', { fill: props.color || "#DC0000", d: 'M274.839,244.311l91.502-25.22c12.874-3.548,18.549-18.617,11.214-29.777l-34.762-52.883 c-7.499-11.408-24.054-11.899-32.215-0.954l-57.458,77.052C241.537,228.061,256.161,249.46,274.839,244.311z' }),
    _react2.default.createElement('path', { fill: props.color || "#DC0000", d: 'M208.574,24.431c0.728-15.826-14.185-27.765-29.469-23.591l-72.428,19.78 c-15.625,4.267-22.261,22.761-12.914,35.989l83.116,143.998c0.675,1.169,1.419,2.302,2.294,3.331 c12.309,14.465,35.417,9.105,41.113-7.828c1.023-3.042,1.311-6.284,1.059-9.484L208.574,24.431z' }),
    _react2.default.createElement('path', { fill: props.color || "#DC0000", d: 'M366.966,310.135l-91.883-28.213c-18.521-5.687-33.759,15.279-22.631,31.14l54.511,77.7 c7.669,10.932,23.77,11.211,31.813,0.551l38.12-50.516C385.12,329.899,380.017,314.143,366.966,310.135z' })
  );
};

exports.default = YelpColored;