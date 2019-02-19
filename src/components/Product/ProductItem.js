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

        <div className='productCard_action'>
          <img
            className='icon' 
            src='images/drag_action.png' 
            alt=''/>
          <p className='info'>
            Drag this item to the cart to purchase
          </p>
        </div>

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


        <div className='row_action'>
          <div className='prices'>

            <div className='original'>
              ${ originalPrice }
            </div>

            { isDiscounted && (
              <div className='sale'>
                ${ sellPrice }
              </div>
            )}
          </div>

          <button className='productCard_buynow'>
            <i className='wtfs wtf-shopping-cart'></i>
          </button>
        </div>

      </div>
    </div>
  )
}

export default ProductItem
