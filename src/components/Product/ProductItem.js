import React from 'react'
import PropTypes from 'prop-types' 
import DragSource from '../DnD/DragSource'
import Image from '../Image'
import CardImage from './CardImage'
import SaleBadge from './SaleBadge'
import ContentInfo from './ContentInfo'

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
          <CardImage
            imageSource={imageSource}
            imageAlt={title}
          />
          { isDiscounted && <SaleBadge />}
          <ContentInfo
            {...product}
            isDiscounted={isDiscounted}
            onAddCartItem={onAddCartItem}
          />
        </div>
      )}
    </DragSource>
  )
}

export default ProductItem
