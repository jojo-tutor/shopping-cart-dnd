import React from 'react';
import PropTypes from 'prop-types';

const Preloader = ({ visible, label }) => visible && (
  <div className="auth_progressLoader">
    <div className="loader">
      <hr />
      <hr />
      <hr />
      <hr />
    </div>
    <h1>{label}</h1>
  </div>
);

Preloader.propTypes = {
  visible: PropTypes.bool,
  label: PropTypes.string.isRequired,
};

export default Preloader;
