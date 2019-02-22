import React from 'react';
import PropTypes from 'prop-types';

const ToastContent = ({ children, ...restProps }) => (
  <div className="toast-message">
    {children(restProps)}
  </div>
);

ToastContent.propTypes = {
  children: PropTypes.func.isRequired,
};

export default ToastContent;
