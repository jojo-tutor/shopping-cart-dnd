import React from 'react';
import PropTypes from 'prop-types';
import Image from '../Image';

const CardImage = (props) => {
  const {
    imageSource,
    imageAlt,
    imageDragSource,
    imageDragAlt,
    dragLabel,
  } = props;

  return (
    <div className="productCard_img">
      <Image
        src={imageSource}
        alt={imageAlt}
      />
      <div className="productCard_action">
        <Image
          className="icon"
          src={imageDragSource}
          alt={imageDragAlt}
        />
        <p className="info">
          {dragLabel}
        </p>
      </div>
    </div>
  );
};

CardImage.defaultProps = {
  imageDragSource: 'images/drag_action.png',
  imageDragAlt: 'Drag Action',
  dragLabel: 'Drag this item to the cart to purchase',
};

CardImage.propTypes = {
  imageSource: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  imageDragSource: PropTypes.string,
  imageDragAlt: PropTypes.string,
  dragLabel: PropTypes.string,
};

export default CardImage;
