import React from 'react'

const CartItem = (props) => {
  const { item, onQuantityChange, onRemoveCartItem } = props
  const { id, quantity, product } = item
  const { title, description, sellPrice, imageSource } = product
  const total = Number(quantity) * Number(sellPrice)

  return (
    <div className="cartItem">
      <div className="section1">
        <img
          src={imageSource}
          alt="product"
          className='product'
        />
        <div className="title">
          { title }
        </div>
        <div className="description">
          { description }
        </div>
        <div className="quantity">
          <input
            type='number'
            min={0}
            value={quantity}
            onChange={(e) => onQuantityChange(e.target.value, id)}
          />
        </div>
      </div>
      <div className="section2">
        <div className="label">
          total:
        </div>
        <div className="total">
          { total }
        </div>
      </div>
      <div className="removeItem">
        <input
          type='button'
          value='Delete'
          onClick={onRemoveCartItem}
        />
      </div>
    </div>
  )
}

export default CartItem
