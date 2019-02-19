import React from 'react'
import CartItem from './CartItem'
import DropTarget from '../DnD/DropTarget'

const CartList = (props) => {
  const {
    list
    , onQuantityChange
    , onAddCartItem
    , onRemoveCartItem
  } = props

  return (
    <DropTarget onDrop={droppedProduct => onAddCartItem(droppedProduct.id)}>
      {({ style }) => (
        <div className='cart_list' style={style}>
          {list.map(item => (
            <CartItem
              key={item.id}
              item={item}
              onQuantityChange={onQuantityChange}
              onRemoveCartItem={onRemoveCartItem}
            />
          ))}
        </div>
      )}
    </DropTarget>
  )
}

export default CartList
