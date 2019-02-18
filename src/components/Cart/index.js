import React from 'react'
import Counter from './Counter'
import QuickTip from './QuickTip'
import CartList from './CartList'
import Total from './Total'

import 'scss/cart/index.scss'

const getTotal = (list) => {
  return list.reduce((acc, cur) => {
    const { quantity, product } = cur
    return acc + (Number(quantity) * Number(product.sellPrice))
  }, 0)
}

const Cart = ({ 
    list, 
    onQuantityChange,
    className 
  }) => {
  return (
    <div className={`cart ${className}`}>
      <Counter count={list.length} />
      <QuickTip />
      <CartList
        list={list}
        onQuantityChange={onQuantityChange}
      />
      <Total total={getTotal(list)} />
    </div>
  )
}

export default Cart
