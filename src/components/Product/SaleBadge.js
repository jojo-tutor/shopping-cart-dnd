import React from 'react'
import PropTypes from 'prop-types' 

const SaleBadge = ({ label }) => (
  <div className='productCard_sale'>
    {label}
  </div>
)

SaleBadge.defaultProps = {
  label: 'Sale'
}

SaleBadge.propTypes = {
  label: PropTypes.string
}

export default SaleBadge
