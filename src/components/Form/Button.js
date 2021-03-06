import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ label }) => (
  <input
    className="btn btn-primary"
    type="submit"
    value={label}
  />
);

Button.propTypes = {
  label: PropTypes.string.isRequired,
};

export default Button;
