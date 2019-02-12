import React from 'react'
import ProductList from './ProductList'

const Product = (props) => {
  const { productList } = props

  return (
    <div className="product">
      <ProductList products={productList} />
    </div>
  )
}

export default Product
