import React from 'react'
import PropTypes from 'prop-types'
import Image from '../Image'

const QuickTip = (props) => {
  const {
    label
    , description
    , imageSource
    , imageAlt
  } = props

  return (
    <div className='cart_quicktip'>
      <div className='icon'>
        <img
          src={imageSource}
          alt={imageAlt}
        />
      </div>
      <div className='tip'>
        <h3 className='tip_header'>
          {label}
        </h3>
        <p className='tip_note'>
          {description}
        </p>
      </div>
    </div>
  )
}

QuickTip.defaultProps = {
  label: 'Quick Tip:',
  description: 'You can drag the items you want to add in this area.',
  imageSource: 'images/drag_icon.png',
  imageAlt: 'Drag Icon'
}

QuickTip.propTypes = {
  label: PropTypes.string,
  description: PropTypes.string,
  imageSource: PropTypes.string,
  imageAlt: PropTypes.string
}

export default QuickTip
