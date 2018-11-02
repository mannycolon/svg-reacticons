/* eslint react/prop-types: 0 */
import React from 'react'
import CreateSvgIcon from './utils/CreateSvgIcon'

const PeriscopeColored = props => (
  <CreateSvgIcon
    name="PeriscopeColored"
    className={props.className}
    color={props.color}
    size={props.size}
    viewBox="0 0 404.425 404.425"
    style={props.style}
  >
    <path fill={props.color || "#00A4C3"} d="M202.213,0C114.396,0,43.206,71.189,43.206,159.006c0,104.378,129.295,245.419,159.006,245.419
      s159.006-137.069,159.006-245.419C361.219,71.189,290.03,0,202.213,0z M201.494,278.023c-62.507,0-113.178-50.672-113.178-113.179
      c0-62.506,50.672-113.178,113.178-113.178c62.507,0,113.178,50.672,113.178,113.178
      C314.672,227.351,264.001,278.023,201.494,278.023z"/>
    <path fill={props.color || "#FF4B30"} d="M201.494,73.529c-2.809,0-5.583,0.147-8.328,0.395c6.741,7.785,10.828,17.93,10.828,29.036
      c0,24.518-19.875,44.393-44.393,44.393c-17.169,0-32.051-9.753-39.436-24.015c-6.37,12.457-9.987,26.555-9.987,41.507
      c0,50.432,40.883,91.315,91.315,91.315s91.315-40.883,91.315-91.315C292.809,114.412,251.926,73.529,201.494,73.529z"/>
  </CreateSvgIcon>
)

export default PeriscopeColored
