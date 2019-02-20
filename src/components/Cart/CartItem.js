import React from 'react'
import PropTypes from 'prop-types'
import Image from '../Image'
import { formatCurrency } from '../../utils/tools'

const CartItem = (props) => {
  const { cart, onQuantityChange, onRemoveCartItem } = props
  const { id, quantity, product } = cart
  const { title, description, price, imageSource, vendor } = product || {}
  const total = formatCurrency(Number(quantity) * Number(price))

  return (
    <div className="cart_item">

      <div className="row row_main">
        <div className="cart_item_graphic">
          <Image
            src={imageSource}
            alt='Product'
          />
        </div>

        <div className="cart_item_content">
          <h1 className="title">{ title }</h1>
          <p className="vendor">{ vendor }</p>
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
          <span className="label">Sub-total</span>
          <h1 className="total">{ total }</h1>
        </div>
      </div>

      <div className="row row_actions">
        <button 
          onClick={() => onRemoveCartItem(id)}
          className="cart_item_remove">
          remove item
        </button> 
      </div>
 

    </div>
  )
}

CartItem.propTypes = {
  cart: PropTypes.object.isRequired,
  onQuantityChange: PropTypes.func.isRequired,
  onRemoveCartItem: PropTypes.func.isRequired
}

export default CartItem
