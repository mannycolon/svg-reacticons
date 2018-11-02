'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _paths = require('./paths');

var _paths2 = _interopRequireDefault(_paths);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CreateSvgIcon = function CreateSvgIcon(_ref) {
  var name = _ref.name,
      color = _ref.color,
      size = _ref.size,
      fill = _ref.fill,
      viewBox = _ref.viewBox,
      style = _ref.style,
      className = _ref.className,
      children = _ref.children;

  var d = _paths2.default[name] || '';
  var styles = _extends({
    display: 'inline-block',
    verticalAlign: 'middle'
  }, style);

  return _react2.default.createElement(
    'svg',
    { className: className, width: '' + size, height: '' + size, fill: fill, viewBox: viewBox, style: _extends({}, styles), color: color },
    children || _react2.default.createElement('path', { d: d })
  );
};

CreateSvgIcon.propTypes = {
  name: _propTypes2.default.string.isRequired,
  color: _propTypes2.default.string.isRequired,
  size: _propTypes2.default.number.isRequired,
  fill: _propTypes2.default.string.isRequired,
  viewBox: _propTypes2.default.string.isRequired,
  style: _propTypes2.default.object,
  className: _propTypes2.default.string,
  children: _propTypes2.default.node
};

CreateSvgIcon.defaultProps = {
  size: 65,
  fill: 'currentcolor',
  color: '#000000'
};

exports.default = CreateSvgIcon;