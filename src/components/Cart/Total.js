import React from 'react'
import CartList from './CartList'

const Total = (props) => {
  const { total } = props

  return (
    <div className="cart_grandtotal">
      <h3 className="label">
        Total
      </h3>
      <h2 className="value">
        { total }
      </h2>
    </div>
  )
}

export default Total
