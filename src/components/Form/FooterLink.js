import React from 'react'
import PropTypes from 'prop-types' 
import { Link } from 'react-router-dom'
import Image from '../Image'

const FooterLink = ({ to, label }) => (
  <div className='auth_extras'>
    <Link to={to} className='noAccount'>
      {label}
    </Link>
  </div>
)

FooterLink.propTypes = {
  to: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
}

export default FooterLink
