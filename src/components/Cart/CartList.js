import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import CartItem from './CartItem';
import DropTarget from '../DnD/DropTarget';

const renderDropProductPreview = ({ title }) => ( // eslint-disable-line
  <div className="cart_purchaseIndicator">
    add
    <div className="item">
      { title }
    </div>
    to cart
  </div>
);

const CartList = (props) => {
  const {
    carts,
    onAddCartItem,
    ...restProps
  } = props;

  return (
    <DropTarget onDrop={droppedProduct => onAddCartItem(droppedProduct.id)}>
      {({ sourceItem, isOver }) => (
        <div className={cn('cart_list', { 'cart_list-dropping': isOver })}>
          {(isOver && sourceItem) && renderDropProductPreview(sourceItem)}
          {carts.map(cart => (
            <CartItem
              key={cart.id}
              cart={cart}
              {...restProps}
            />
          ))}
        </div>
      )}
    </DropTarget>
  );
};

CartList.propTypes = {
  carts: PropTypes.arrayOf(PropTypes.object).isRequired,
  onAddCartItem: PropTypes.func.isRequired,
};

export default CartList;
