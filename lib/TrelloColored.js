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
var TrelloColored = function TrelloColored(props) {
  return _react2.default.createElement(
    _CreateSvgIcon2.default,
    {
      name: 'TrelloColored',
      className: props.className,
      color: props.color,
      size: props.size,
      viewBox: '0 0 404 404',
      style: props.style
    },
    _react2.default.createElement('path', { fill: props.color || "#518FE1", d: 'M354.752,0H49.248C22.049,0,0,22.049,0,49.248v305.504C0,381.951,22.049,404,49.248,404h305.504 C381.951,404,404,381.951,404,354.752V49.248C404,22.049,381.951,0,354.752,0z M175.74,314.888 c0,12.633-10.241,22.873-22.873,22.873H75.394c-12.633,0-22.873-10.241-22.873-22.873V78.827c0-12.633,10.241-22.873,22.873-22.873 h77.473c12.633,0,22.873,10.241,22.873,22.873V314.888z M351.48,213.336c0,12.633-10.241,22.873-22.873,22.873h-77.473 c-12.633,0-22.873-10.241-22.873-22.873V78.827c0-12.633,10.241-22.873,22.873-22.873h77.473c12.633,0,22.873,10.241,22.873,22.873 V213.336z' })
  );
};

exports.default = TrelloColored;