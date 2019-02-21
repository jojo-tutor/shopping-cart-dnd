import React from 'react'
import PropTypes from 'prop-types' 

const Error = ({ visible, label }) => visible && (
  <div className='auth_error'>
    <p>{label}</p>
  </div>
)

Error.propTypes = {
  visible: PropTypes.bool,
  label: PropTypes.string.isRequired
}

export default Error
