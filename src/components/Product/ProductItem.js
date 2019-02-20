import React from 'react'
import DragSource from '../DnD/DragSource'
import Image from '../Image'
import { formatCurrency } from '../../utils/tools'

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
    , vendor
  } = product

  const isDiscounted = Number(compareAtPrice) > Number(price)

  return (
    <DragSource hideHandle dragItem={product}>
      {() => (
        <div className='productCard product_list_item'>
          <div className='productCard_img'>
            <Image
              src={imageSource}
              alt='Product'
            />

            <div className='productCard_action'>
              <Image
                className='icon' 
                src='images/drag_action.png' 
                alt='Drag Action'
              />
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
            <p className='vendor'>
              { vendor }
            </p>


            <div className='row_action'>
              <div className='prices'>

                <div className='original'>
                  { formatCurrency(compareAtPrice) }
                </div>

                { isDiscounted && (
                  <div className='sale'>
                    { formatCurrency(price) }
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
