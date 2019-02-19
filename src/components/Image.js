import React from 'react'
import PropTypes from 'prop-types'
import ReactImage from 'react-image'

const Image = (props) => {
  const {
    src
    , alt
    , loader
    , unloader
    , className
    , ...restProps
  } = props

  return (
    <ReactImage
      src={src}
      loader={loader}
      unloader={unloader}
      className = {className}
      {...restProps}
    />
  )
}

Image.defaultProps = {
  unloader: <span>Image failed to load.</span>,
  loader: <span>Loading image...</span>
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  loader: PropTypes.element,
  unloader: PropTypes.element
}

export default Image
