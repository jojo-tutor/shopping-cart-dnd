import React from 'react'
import PropTypes from 'prop-types'
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

const getTotalPrice = (list) => {
  const total = list.reduce((acc, curr) => {
    const { quantity, product = {} } = curr
    return acc + (Number(quantity) * Number(product.price))
  }, 0)

  return formatCurrency(total)
}

const getTotalCount = (list) => {
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
      <Counter count={getTotalCount(cartList)} />
      <QuickTip />
      <div className='cart_listContainer'>
        <CartList
          carts={cartList}
          onQuantityChange={onQuantityChange}
          onAddCartItem={onAddCartItem}
          onRemoveCartItem={onRemoveCartItem}
        />
      </div>
      <Total total={getTotalPrice(cartList)} />
    </div>
  )
}

Cart.defaultProps = {
  className: 'col col-md-3 col-sm-4'
}

Cart.propTypes = {
  className: PropTypes.string,
  cartList: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default Cart
