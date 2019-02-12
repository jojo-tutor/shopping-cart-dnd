import React from 'react'

const ProductItem = (props) => {
  const { title, description, originalPrice, sellPrice, imageSource } = props.product

  return (
    <div className="product-item">
      <img
        src={imageSource}
        alt="product"
        className='product'
      />
      <div className="sale">
        Sale
      </div>
      <div className="title">
        { title }
      </div>
      <div className="description">
        { description }
      </div>
      <div className="prices">
        <div className="originalPrice">
          { originalPrice }
        </div>
        <div className="salePrice">
          { sellPrice }
        </div>
      </div>
    </div>
  )
}

export default ProductItem
