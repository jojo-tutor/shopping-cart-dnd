import React from 'react';
import PropTypes from 'prop-types';
import DragSource from '../DnD/DragSource';
import CardImage from './CardImage';
import SaleBadge from './SaleBadge';
import ContentInfo from './ContentInfo';

const ProductItem = (props) => {
  const {
    product,
    onAddCartItem,
  } = props;

  const {
    title,
    price,
    imageSource,
    compareAtPrice,
  } = product;

  const isDiscounted = Number(compareAtPrice) > Number(price);

  return (
    <DragSource hideHandle dragItem={product}>
      {() => (
        <div className="productCard product_list_item">
          <CardImage
            imageSource={imageSource}
            imageAlt={title}
          />
          <SaleBadge visible={isDiscounted} />
          <ContentInfo
            {...product}
            isDiscounted={isDiscounted}
            onAddCartItem={onAddCartItem}
          />
        </div>
      )}
    </DragSource>
  );
};

ProductItem.propTypes = {
  product: PropTypes.object.isRequired,
  onAddCartItem: PropTypes.func.isRequired,
};

export default ProductItem;
