import React from 'react';
import PropTypes from 'prop-types';
import { formatCurrency } from '../../utils/tools';

const renderSalePrice = ({ price }) => ( // eslint-disable-line
  <div className="sale">
    { formatCurrency(price) }
  </div>
);

const renderAction = ({ id, onAddCartItem }) => ( // eslint-disable-line
  <button
    type="button"
    className="productCard_buynow"
    onClick={() => onAddCartItem(id)}
  >
    <i className="wtfs wtf-shopping-cart" />
  </button>
);

const ContentInfo = (props) => {
  const {
    id,
    title,
    vendor,
    price,
    compareAtPrice,
    isDiscounted,
    onAddCartItem,
  } = props;

  return (
    <div className="productCard_content">
      <h1 className="title">
        { title }
      </h1>
      <p className="vendor">
        { vendor }
      </p>
      <div className="row_action">
        <div className="prices">
          <div className="original">
            { formatCurrency(compareAtPrice) }
          </div>
          { isDiscounted && renderSalePrice({ price }) }
        </div>
        { renderAction({ id, onAddCartItem }) }
      </div>

    </div>
  );
};

ContentInfo.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  vendor: PropTypes.string.isRequired,
  isDiscounted: PropTypes.bool.isRequired,
  onAddCartItem: PropTypes.func.isRequired,
  price: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
  compareAtPrice: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
};

export default ContentInfo;
