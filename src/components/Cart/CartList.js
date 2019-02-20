import React from 'react'
import CartItem from './CartItem'
import DropTarget from '../DnD/DropTarget'
import cn from 'classnames'

const renderDropProductPreview = (product) => (
  <div className='cart_purchaseIndicator'>
    add 
    <div className='item'>
      { product.title }
    </div>
    to cart
  </div>
)

const CartList = (props) => {
  const {
    carts
    , onQuantityChange
    , onAddCartItem
    , onRemoveCartItem
  } = props

  return (
    <DropTarget onDrop={droppedProduct => onAddCartItem(droppedProduct.id)}>
      {({ sourceItem, isOver }) => (
        <div className={cn('cart_list',{'cart_list-dropping': isOver})}>
        	{(isOver && sourceItem) && renderDropProductPreview(sourceItem)}
          {carts.map(cart => (
            <CartItem
              key={cart.id}
              cart={cart}
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
