import React from 'react';
import PropTypes from 'prop-types';
import ReactImage from 'react-image';

const Image = (props) => {
  const {
    src,
    alt,
    loader,
    unloader,
    className,
    ...restProps
  } = props;

  return (
    <ReactImage
      src={src}
      loader={loader}
      unloader={unloader}
      className={className}
      {...restProps}
    />
  );
};

Image.defaultProps = {
  unloader: <span>Image failed to load.</span>,
  loader: <img src="/images/image_placeholder.gif" alt="" />,
  className: '',
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  loader: PropTypes.element,
  unloader: PropTypes.element,
  className: PropTypes.string,
};

export default Image;
