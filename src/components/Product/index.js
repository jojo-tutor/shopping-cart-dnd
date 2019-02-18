import React from 'react'
import ProductList from './ProductList'
import '../../scss/product/product.scss'

const Product = ({ 
    productList
    , productHero
  }) => {
  return (
    <div className='product'>
      <div className='product_hero'>
        <img 
          src={productHero} 
          alt=''/>
      </div>
      <ProductList 
        products={productList} 
      />
    </div>
  )
}

export default Product
