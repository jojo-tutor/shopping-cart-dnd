import React from 'react'
import CartList from './CartList'

const Counter = (props) => {
  const { count } = props

  return (
    <div className="counter">
      <div className="icon">
        ICON
      </div>
      <h2 className="label">
        Cart
      </h2>
      <div className="count">
        { count }
      </div>
      <div className="unitLabel">
        items/s
      </div>
    </div>
  )
}

export default Counter
