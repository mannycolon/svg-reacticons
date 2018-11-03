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
var GraduationCapOutlined = function GraduationCapOutlined(props) {
  return _react2.default.createElement(
    _CreateSvgIcon2.default,
    {
      name: 'GraduationCapOutlined',
      className: props.className,
      color: props.color,
      size: props.size,
      viewBox: '0 -35 512 512',
      style: props.style
    },
    _react2.default.createElement('path', { fill: props.color, d: 'm512 135.5c0-13.242188-8.941406-25.304688-24.53125-33.101562l-185.394531-92.695313c-12.515625-6.257813-28.878907-9.703125-46.078125-9.703125-17.203125 0-33.570313 3.445312-46.085938 9.703125l-185.378906 92.695313c-15.589844 7.796874-24.53125 19.863281-24.53125 33.105468 0 13.242188 8.941406 25.304688 24.53125 33.097656l40.382812 20.191407v105.1875c0 29.882812 20.933594 63.757812 47.660157 77.125l97.347656 48.667969c12.921875 6.460937 29.5 9.691406 46.082031 9.691406 16.582032 0 33.164063-3.230469 46.085938-9.691406l97.332031-48.667969c26.726563-13.367188 47.664063-47.242188 47.664063-77.125v-105.183594l34.910156-17.457031v254.707031c0 8.285156 6.714844 15 15 15s15-6.714844 15-15v-290.476563c0-.023437.003906-.046874.003906-.070312zm-481.964844 0c.339844-.804688 2.25-3.441406 7.914063-6.273438l185.378906-92.6875c8.308594-4.15625 20.214844-6.539062 32.667969-6.539062 12.449218 0 24.355468 2.382812 32.664062 6.535156l167.929688 83.964844h-144.261719c-7.515625-20.386719-29.921875-35.214844-56.332031-35.214844-32.539063 0-59.019532 22.527344-59.019532 50.214844 0 27.691406 26.476563 50.21875 59.019532 50.21875 26.410156 0 48.820312-14.832031 56.332031-35.21875h144.269531l-167.925781 83.960938c-8.3125 4.15625-20.214844 6.539062-32.664063 6.539062-.003906 0-.003906 0-.003906 0-12.449218 0-24.355468-2.382812-32.664062-6.535156l-185.390625-92.695313c-5.664063-2.832031-7.574219-5.464843-7.914063-6.269531zm254.984375 0c0 10.960938-13.289062 20.21875-29.023437 20.21875-15.726563 0-29.019532-9.257812-29.019532-20.21875 0-10.957031 13.292969-20.214844 29.019532-20.214844 15.734375 0 29.023437 9.257813 29.023437 20.214844zm132.066407 158.480469c0 18.511719-14.523438 42.011719-31.082032 50.292969l-97.332031 48.667968c-17.402344 8.699219-47.933594 8.699219-65.332031 0l-97.347656-48.667968c-16.554688-8.28125-31.082032-31.78125-31.082032-50.292969v-90.1875l115.011719 57.503906c12.515625 6.257813 28.878906 9.703125 46.082031 9.703125s33.566406-3.449219 46.082032-9.707031l115-57.5zm0 0' })
  );
};

exports.default = GraduationCapOutlined;