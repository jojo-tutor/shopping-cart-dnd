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
  }, 0)
}

const Cart = (props) => {
  const { 
    list
    , className
    , onQuantityChange
    , onRemoveCartItem 
  } = props
    
  return (
    <div className={`cart ${className}`}>
      <Counter count={list.length} />
      <QuickTip />
      <CartList
        list={list}
        onQuantityChange={onQuantityChange}
        onRemoveCartItem={onRemoveCartItem}
      />
      <Total total={getTotal(list)} />
    </div>
  )
}

export default Cart
