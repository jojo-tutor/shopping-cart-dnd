import React from 'react'
import PropTypes from 'prop-types'
import CartList from './CartList'

const Total = ({ total }) => (
  <div className='cart_grandtotal'>
    <h3 className='label'>
      Total
    </h3>
    <h2 className='value'>
      { total }
    </h2>
  </div>
)

Total.propTypes = {
  total: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]).isRequired
}

export default Total
