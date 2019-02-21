import React from 'react'
import PropTypes from 'prop-types'
import CartList from './CartList'

const Total = ({ label, total }) => (
  <div className='cart_grandtotal'>
    <h3 className='label'>
      { label }
    </h3>
    <h2 className='value'>
      { total }
    </h2>
  </div>
)

Total.defaultProps = {
  label: 'Total'
}

Total.propTypes = {
  label: PropTypes.string,
  total: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]).isRequired
}

export default Total
