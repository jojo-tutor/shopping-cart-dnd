import React from 'react'
import DragSource from '../DnD/DragSource'

const ProductItem = (props) => {
  const {
    product
    , onAddCartItem
  } = props

  const {
    id
    , title
    , price
    , description
    , imageSource
    , compareAtPrice
  } = product

  const isDiscounted = Number(compareAtPrice) > Number(price)

  return (
    <DragSource hideHandle dropEffect='copy' dragItem={product}>
      {() => (
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
                  ${ compareAtPrice }
                </div>

                { isDiscounted && (
                  <div className='sale'>
                    ${ price }
                  </div>
                )}
              </div>

              <button className='productCard_buynow' onClick={() => onAddCartItem(id)}>
                <i className='wtfs wtf-shopping-cart'></i>
              </button>
            </div>

          </div>
        </div>
      )}
    </DragSource>
  )
}

export default ProductItem
