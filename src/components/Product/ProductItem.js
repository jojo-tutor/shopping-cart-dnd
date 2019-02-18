import React from 'react'

const ProductItem = (props) => {
  const { title, description, originalPrice, sellPrice, imageSource } = props.product

  const isDiscounted = originalPrice > sellPrice

  return (
    <div className='productCard product_list_item'>

      <div className='productCard_img'>
        <img
          src={imageSource}
          alt='product'
        />
      </div>

      { isDiscounted && (
        <div className='productCard_sale'>
          Sale
        </div>
      )}

      <div className='productCard_content'>
        <h1 className='title'>
            { title }
        </h1>
        <p className='desc'>
          { description }
        </p>

        <div className='prices'>

          <div className='original'>
            { originalPrice }
          </div>

          { isDiscounted && (
            <div className='sale'>
              { sellPrice }
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProductItem
