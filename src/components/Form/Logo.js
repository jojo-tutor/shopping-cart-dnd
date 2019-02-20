import React from 'react'
import Image from '../Image'

const Logo = ({ src, alt }) => (
  <div className='auth_logo'>
    <Image src={src} alt={alt} />
  </div>
)

Logo.defaultProps = {
  src: '/images/logo.png',
  alt: 'Branding Logo'
}

export default Logo
