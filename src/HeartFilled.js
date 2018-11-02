/* eslint react/prop-types: 0 */
import React from 'react'
import CreateSvgIcon from './utils/CreateSvgIcon'

const HeartFilled = props => (
  <CreateSvgIcon
    name="heartFilled"
    className={props.className}
    color={props.color}
    size={props.size}
    viewBox="0 0 51.997 51.997"
    style={props.style}
  />
)

export default HeartFilled
