import React from 'react'
import ProductItem from './ProductItem'

const ProductList = (props) => {
  const { products } = props
  return (
    <div className='productList'>
      {products.map(product => (
        <ProductItem
          key={product.id}
          product={product}
        />
      ))}
    </div>
  )
}

export default ProductList
