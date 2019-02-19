import React from 'react'
import ProductList from './ProductList'
import '../../scss/product/index.scss'

const Product = (props) => {
  const { 
    productList
    , productHero
    , className
    , onAddCartItem
  } = props

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
        onAddCartItem={onAddCartItem}
      />
    </div>
  )
}

export default Product
