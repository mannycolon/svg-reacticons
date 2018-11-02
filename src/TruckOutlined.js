/* eslint react/prop-types: 0 */
import React from 'react'
import CreateSvgIcon from './utils/CreateSvgIcon'

const TruckOutlined = props => (
  <CreateSvgIcon
    name="truckOutlined"
    className={props.className}
    color={props.color}
    size={props.size}
    viewBox="0 -96 480 480"
    style={props.style}
  />
)

export default TruckOutlined
