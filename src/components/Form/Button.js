import React from 'react'
import Image from '../Image'

const Button = ({ label }) => (
  <input
    className='btn btn-primary'
    type='submit'
    value={label}
  />
)

export default Button
