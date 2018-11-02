/* eslint react/prop-types: 0 */
import React from 'react'
import CreateSvgIcon from './utils/CreateSvgIcon'

const MediumColored = props => (
  <CreateSvgIcon
    name="MediumColored"
    className={props.className}
    color={props.color}
    size={props.size}
    viewBox="0 0 393.541 393.541"
    style={props.style}
  >
    <path fill={props.color || "#00FD8D"} d="M384.045,363.079L262.84,304.812L261.927,40.68c-0.021-6.166,6.416-10.229,11.973-7.557
      l114.908,55.256c2.893,1.391,4.733,4.318,4.733,7.528v261.201C393.54,361.989,388.443,365.194,384.045,363.079z"/>
    <path fill={props.color || "#00E470"} d="M262.84,304.812L131.66,241.74L257.948,33.818c2.231-3.673,6.886-5.054,10.759-3.192l116.514,56.029
      c4.454,2.142,6.085,7.661,3.51,11.879L262.84,304.812z"/>
    <path fill={props.color || "#00C967"} d="M262.84,304.812L131.66,241.74L11.421,45.942c-3.35-5.455,2.479-11.914,8.248-9.14L131.66,90.655
      L262.84,304.812z"/>
    <path fill={props.color || "#00AD6C"} d="M122.164,363.078l-118.41-56.94C1.459,305.034,0,302.713,0,300.167V37.548
      c0-4.726,4.937-7.831,9.197-5.782L131.66,90.655v266.452C131.66,361.988,126.562,365.193,122.164,363.078z"/>
  </CreateSvgIcon>
)

export default MediumColored
