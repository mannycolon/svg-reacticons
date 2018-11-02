/* eslint react/prop-types: 0 */
import React from 'react'
import CreateSvgIcon from './utils/CreateSvgIcon'

const GiftOutlined = props => (
  <CreateSvgIcon
    name="giftOutlined"
    className={props.className}
    color={props.color}
    size={props.size}
    viewBox="-9 0 512 512"
    style={props.style}
  />
)

export default GiftOutlined
