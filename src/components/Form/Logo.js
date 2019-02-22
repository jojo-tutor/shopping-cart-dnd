import React from 'react';
import PropTypes from 'prop-types';
import Image from '../Image';

const Logo = ({ src, alt }) => (
  <div className="auth_logo">
    <Image src={src} alt={alt} />
  </div>
);

Logo.defaultProps = {
  src: '/images/logo.png',
  alt: 'Branding Logo',
};

Logo.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
};

export default Logo;
