import React from 'react'
import CartItem from './CartItem'
import DropTarget from '../DnD/DropTarget'
import cn from 'classnames'

const CartList = (props) => {
  const {
    list
    , onQuantityChange
    , onAddCartItem
    , onRemoveCartItem
  } = props

  return (
    <DropTarget onDrop={droppedProduct => onAddCartItem(droppedProduct.id)}>
      {({ droppedProduct, isOver }) => (
        <div className={cn('cart_list',{'cart_list-dropping': isOver})}>
        	{ isOver && droppedProduct && (
	        	<div className='cart_purchaseIndicator'>
              {droppedProduct.title}
	        	</div>
        	)}
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
