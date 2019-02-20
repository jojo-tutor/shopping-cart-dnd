import React from 'react'
import CartList from './CartList'

const Counter = (props) => {
  const { count } = props

  return (
    <div className="cart_counter">
      <i className="wtfs wtf-shopping-cart cart_counter_icon"></i>
      <h2 className="cart_counter_label">
        <span className='label'>Cart</span>
        <span className='count'>
          { count }
        </span>
        <span className='suffix'>
          {`item${ count > 1 ? 's' : ''}`}
        </span>
      </h2>
    </div>
  )
}

export default Counter
