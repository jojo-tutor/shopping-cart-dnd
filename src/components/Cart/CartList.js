import React from 'react'
import CartItem from './CartItem'

const CartList = (props) => {
  const {
    list
    , onQuantityChange
    , onRemoveCartItem
  } = props

  return (
    <div className='cart_list'>
      {list.map(item => (
        <CartItem
          key={item.id}
          item={item}
          onQuantityChange={onQuantityChange}
          onRemoveCartItem={onRemoveCartItem}
        />
      ))}
    </div>
  )
}

export default CartList
