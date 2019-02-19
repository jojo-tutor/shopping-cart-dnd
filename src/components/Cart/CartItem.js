import React from 'react'

const CartItem = (props) => {
  const { item, onQuantityChange, onRemoveCartItem } = props
  const { id, quantity, product } = item
  const { title, description, sellPrice, imageSource } = product
  const total = Number(quantity) * Number(sellPrice)

  return (
    <div className="cart_item">

      <div className="row row_main">
        <div className="cart_item_graphic">
          <img
            src={imageSource}
            alt="product"
          />
        </div>

        <div className="cart_item_content">
          <h1 className="title">{ title }</h1>
          <div className="quantity">
            <label>
              Qty
              <input
                type='number'
                min={0}
                value={quantity}
                onChange={(e) => onQuantityChange(e.target.value, id)}
              />
            </label>
          </div>
        </div>

        <div className="cart_item_total">
          <span className="label">total :</span>
          <h1 className="total">${ total }</h1>
        </div>
      </div>

      <div className="row row_actions">
        <button 
          onClick={onRemoveCartItem}
          className="cart_item_remove">
          remove item
        </button> 
      </div>
 

    </div>
  )
}

export default CartItem
