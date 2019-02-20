import React from 'react'
import PropTypes from 'prop-types' 
import ProductList from './ProductList'
import Image from '../Image'
import '../../scss/product/index.scss'

const Product = (props) => {
  const { 
    className
    , productList
    , onAddCartItem
  } = props

  return (
    <div className={`product ${className}`}>
      <div className='product_hero'>
        <Image
          src='/images/hero.jpg'
          alt='Product Hero'
        />
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

Product.defaultProps = {
  className: 'col col-md-9 col-sm-8'
}

Product.propTypes = {
  className: PropTypes.string,
  onAddCartItem: PropTypes.func.isRequired,
  productList: PropTypes.arrayOf(PropTypes.object)
}

export default Product
