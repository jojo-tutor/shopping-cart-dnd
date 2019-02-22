import React from 'react';
import PropTypes from 'prop-types';

const HeaderTitle = ({ label }) => (
  <h1 className="auth_header">
    {label}
  </h1>
);

HeaderTitle.propTypes = {
  label: PropTypes.string.isRequired,
};

export default HeaderTitle;
