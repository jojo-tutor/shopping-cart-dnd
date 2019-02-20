import React from 'react'
import PropTypes from 'prop-types' 

const Error = ({ label }) => (
  <div className='auth_error'>
    <p>{label}</p>
  </div>
)

Error.propTypes = {
  label: PropTypes.string.isRequired
}

export default Error
