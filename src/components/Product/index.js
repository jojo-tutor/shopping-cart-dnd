import React from 'react'
import ProductList from './ProductList'
import '../../scss/product/index.scss'

const Product = ({ 
    productList
    , productHero
    , className
  }) => {
  return (
    <div className={`product ${className}`}>
      <div className='product_hero'>
        <img 
          src={productHero} 
          alt=''/>
      </div>
      <h1 className='product_list_header c_primary'>
        Fresh Tees
      </h1>
      <ProductList 
        products={productList} 
      />
    </div>
  )
}

export default Product
