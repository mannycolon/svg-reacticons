import React from 'react'
import PropTypes from 'prop-types'
import paths from './paths'

const CreateSvgIcon = ({name, color, size, fill, viewBox, style, className, children}) => {
  const d = paths[name] || ''
  const styles = {
    display: 'inline-block',
    verticalAlign: 'middle',
    ...style
  }

  return (
    <svg className={className} width={`${size}`} height={`${size}`} fill={fill} viewBox={viewBox} style={{...styles}} color={color}>
      {
        children || <path d={d} />
      }
    </svg>
  )
}

CreateSvgIcon.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  fill: PropTypes.string.isRequired,
  viewBox: PropTypes.string.isRequired,
  style: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.node,
}

CreateSvgIcon.defaultProps = {
  size: 65,
  fill: 'currentcolor',
  color: '#000000',
}

export default CreateSvgIcon
