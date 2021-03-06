/* eslint react/prop-types: 0 */
import React from 'react'
import CreateSvgIcon from './utils/CreateSvgIcon'

const KickstarterColored = props => (
  <CreateSvgIcon
    name="KickstarterColored"
    className={props.className}
    color={props.color}
    size={props.size}
    viewBox="0 0 347.065 347.065"
    style={props.style}
  >
   <path fill={props.color || "#00CE62"} d="M226.923,173.532l69.413-92.246c16.856-22.401,12.361-54.226-10.04-71.082
    c-22.402-16.858-54.228-12.361-71.084,10.04l-73.163,97.23V50.765c0-28.035-22.727-50.762-50.762-50.762S40.525,22.73,40.525,50.765
    v245.534c0,28.035,22.727,50.762,50.762,50.762s50.762-22.727,50.762-50.762V229.59l73.163,97.231
    c9.977,13.258,25.194,20.244,40.601,20.244c10.623,0,21.339-3.324,30.483-10.204c22.401-16.856,26.896-48.682,10.04-71.082
    L226.923,173.532z"/>
  </CreateSvgIcon>
)

export default KickstarterColored
