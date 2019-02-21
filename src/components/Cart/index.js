import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import Counter from './Counter'
import QuickTip from './QuickTip'
import CartList from './CartList'
import Total from './Total'
import { formatCurrency, getCartTotalCount, getCartTotalPrice } from '../../utils/tools'
import 'scss/cart/index.scss'

const Cart = (props) => {
  const { 
    cartList
    , className
    , onQuantityChange
    , onBuyProduct
    , onAddCartItem
    , onRemoveCartItem 
  } = props
    
  return (
    <div className={cn('cart', className)}>
      <Counter count={getCartTotalCount(cartList)} />
      <QuickTip />
      <div className='cart_listContainer'>
        <CartList
          carts={cartList}
          onQuantityChange={onQuantityChange}
          onAddCartItem={onAddCartItem}
          onRemoveCartItem={onRemoveCartItem}
        />
      </div>
      <Total total={getCartTotalPrice(cartList)} />
      <input
        type='button'
        value='Buy it now!'
        onClick={onBuyProduct}
        disabled={!cartList.length}
        className='btn btn-primary'
      />
    </div>
  )
}

Cart.defaultProps = {
  className: 'col col-md-3 col-sm-4'
}

Cart.propTypes = {
  className: PropTypes.string,
  onBuyProduct: PropTypes.func.isRequired,
  cartList: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default Cart
