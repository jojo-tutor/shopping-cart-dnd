import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import Image from '../components/Image'
import { auth } from '../api'

const Navigation = ({ location }) => {
  const isLinkActive = (pathname) => () => pathname === location.pathname
  return (
    <nav className='nav'>
      <NavLink
        className='nav_logo'
        activeClassName='active'
        to='/'>
        <Image
          src="/images/logo.png"
          alt="Logo"
        />
      </NavLink>
      <div className='nav_links'>
        <NavLink
          to='/'
          className='nav_link'
          activeClassName='active'
          isActive={isLinkActive('/')}
        >
          Home
        </NavLink>
        <NavLink
          to='/help'
          className='nav_link'
          activeClassName='active'
          isActive={isLinkActive('/help')}
        >
          Help
        </NavLink>
        <button
          className='btn btn-inverted-red nav_logout'
          onClick={auth.doSignOut}>
          Signout
        </button>
      </div>
    </nav>
  )
}

export default Navigation
