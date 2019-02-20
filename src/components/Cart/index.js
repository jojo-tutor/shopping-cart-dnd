import React from 'react'
import cn from 'classnames'
import Counter from './Counter'
import QuickTip from './QuickTip'
import CartList from './CartList'
import Total from './Total'
import { formatCurrency } from '../../utils/tools'

import 'scss/cart/index.scss'

const numberFormat = {
  locale: 'en-ph',
  options: {
    style: 'currency',
    currency: 'Php'
  }
}

const getTotal = (list) => {
  const total = list.reduce((acc, curr) => {
    const { quantity, product = {} } = curr
    return acc + (Number(quantity) * Number(product.price))
  }, 0)

  return formatCurrency(total)
}

const getItems = (list) => {
  return list.reduce((acc, curr) => {
    const { quantity, product = {} } = curr
    return acc + Number(quantity)
  }, 0)
}

const Cart = (props) => {
  const { 
    cartList
    , className
    , onQuantityChange
    , onAddCartItem
    , onRemoveCartItem 
  } = props
    
  return (
    <div className={cn('cart', className)}>
      <Counter count={getItems(cartList)} />
      <QuickTip />
      <div className='cart_listContainer'>
        <CartList
          carts={cartList}
          onQuantityChange={onQuantityChange}
          onAddCartItem={onAddCartItem}
          onRemoveCartItem={onRemoveCartItem}
        />
      </div>
      <Total total={getTotal(cartList)} />
    </div>
  )
}

export default Cart
