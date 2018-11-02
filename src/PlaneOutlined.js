/* eslint react/prop-types: 0 */
import React from 'react'
import CreateSvgIcon from './utils/CreateSvgIcon'

const PlaneOutlined = props => (
  <CreateSvgIcon
    name="planeOutlined"
    className={props.className}
    color={props.color}
    size={props.size}
    viewBox="0 0 511.99996 511"
    style={props.style}
  />
)

export default PlaneOutlined
