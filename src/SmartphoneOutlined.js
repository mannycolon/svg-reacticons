/* eslint react/prop-types: 0 */
import React from 'react'
import CreateSvgIcon from './utils/CreateSvgIcon'

const SmartphoneOutlined = props => (
  <CreateSvgIcon
    name="smartphoneOutlined"
    className={props.className}
    color={props.color}
    size={props.size}
    viewBox="0 0 60 60"
    style={props.style}
  />
)

export default SmartphoneOutlined
