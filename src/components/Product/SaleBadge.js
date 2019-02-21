import React from 'react'
import PropTypes from 'prop-types' 

const SaleBadge = ({ visible, label }) => visible && (
  <div className='productCard_sale'>
    {label}
  </div>
)

SaleBadge.defaultProps = {
  label: 'Sale'
}

SaleBadge.propTypes = {
  visible: PropTypes.bool,
  label: PropTypes.string
}

export default SaleBadge
