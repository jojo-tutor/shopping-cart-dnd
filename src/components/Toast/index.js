import React from 'react'
import PropTypes from 'prop-types' 
import { ToastContainer } from 'react-toastify'

const Toast = (props) => (
  <ToastContainer
    draggable
    newestOnTop
    closeOnClick
    pauseOnHover
    pauseOnVisibilityChange
    rtl={false}
    autoClose={5000}
    hideProgressBar={false}
    position='bottom-left'
    {...props}
  />
)

export default Toast
