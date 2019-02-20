import React from 'react'
import Counter from './Counter'
import QuickTip from './QuickTip'
import CartList from './CartList'
import Total from './Total'

import 'scss/cart/index.scss'

const getTotal = (list) => {
  return list.reduce((acc, curr) => {
    const { quantity, product = {} } = curr
    return acc + (Number(quantity) * Number(product.price))
  }, 0).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
}

const Cart = (props) => {
  const { 
    list
    , className
    , onQuantityChange
    , onAddCartItem
    , onRemoveCartItem 
  } = props
    
  return (
    <div className={`cart ${className}`}>
      <Counter count={list.length} />
      <QuickTip />
      <div className='cart_listContainer'>
        <CartList
          list={list}
          onQuantityChange={onQuantityChange}
          onAddCartItem={onAddCartItem}
          onRemoveCartItem={onRemoveCartItem}
        />
      </div>
      <Total total={getTotal(list)} />
    </div>
  )
}

export default Cart
