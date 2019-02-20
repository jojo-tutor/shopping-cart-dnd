import React from 'react'
import { Link } from 'react-router-dom'
import Image from '../Image'

const Button = ({ to, label }) => (
  <div className='auth_extras'>
    <Link to={to} className='noAccount'>
      {label}
    </Link>
  </div>
)

export default Button
