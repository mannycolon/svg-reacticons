/* eslint react/prop-types: 0 */
import React from 'react'
import CreateSvgIcon from './utils/CreateSvgIcon'

const FlickrColored = props => (
  <CreateSvgIcon
    name="FlickrColored"
    className={props.className}
    color={props.color}
    size={props.size}
    viewBox="0 0 362.68 362.68"
    style={props.style}
  >
    <circle fill={props.color || "#005DE1"} cx="85.8" cy="181.34" r="85.8"/>
    <circle fill={props.color || "#FF007E"} cx="276.88" cy="181.34" r="85.8"/>
  </CreateSvgIcon>
)

export default FlickrColored
