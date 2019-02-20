import React from 'react'
import ProductItem from './ProductItem'

const ProductList = (props) => {
  const {
    products
    , onAddCartItem
  } = props

  return (
    <div className='product_list'>
      {products.map( product => (
        <ProductItem
          key={product.id}
          product={product}
          onAddCartItem={onAddCartItem}
        />
      ))}
    </div>
  )
}

export default ProductList
