/* eslint react/prop-types: 0 */
import React from 'react'
import CreateSvgIcon from './utils/CreateSvgIcon'

const MicrowaveOutlined = props => (
  <CreateSvgIcon
    name="microwaveOutlined"
    className={props.className}
    color={props.color}
    size={props.size}
    viewBox="0 0 463 463"
    style={props.style}
  />
)

export default MicrowaveOutlined
