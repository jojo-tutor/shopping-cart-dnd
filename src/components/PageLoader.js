import React from 'react';
import PropTypes from 'prop-types';

const PageLoader = ({ className }) => (
  <div className={className}>
    <div className="loader">
      <hr />
      <hr />
      <hr />
      <hr />
    </div>
  </div>
);

PageLoader.defaultProps = {
  className: 'page_loader',
};

PageLoader.propTypes = {
  className: PropTypes.string,
};

export default PageLoader;
