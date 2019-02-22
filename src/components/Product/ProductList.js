import React from 'react';
import PropTypes from 'prop-types';
import ProductItem from './ProductItem';

const ProductList = (props) => {
  const {
    products,
    onAddCartItem,
  } = props;

  return (
    <div className="product_list">
      {products.map(product => (
        <ProductItem
          key={product.id}
          product={product}
          onAddCartItem={onAddCartItem}
        />
      ))}
    </div>
  );
};

ProductList.propTypes = {
  onAddCartItem: PropTypes.func.isRequired,
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ProductList;
