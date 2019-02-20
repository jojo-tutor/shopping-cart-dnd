import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import Image from '../Image'
import NavigationList from './NavigationList'

const navigationList = [
  {
    value: '/',
    label: 'Home'
  },
  {
    value: '/help',
    label: 'Help'
  }
]

const Navigation = (props) => {
  const {
    user
    , signOut
    , location
  } = props

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
      <div className="session_email">
        { user.email }
      </div>
      <div className='nav_links'>
        <NavigationList
          navigations={navigationList}
          isLinkActive={isLinkActive}
        />
        <button
          className='btn btn-inverted-red nav_logout'
          onClick={signOut}>
          Signout
        </button>
      </div>
    </nav>
  )
}

export default Navigation
