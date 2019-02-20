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
    value: '/about',
    label: 'About'
  }
]

const Navigation = (props) => {
  const {
    session
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

      <NavigationList
        navigations={navigationList}
        isLinkActive={isLinkActive}
      />

      <div className='nav_userActions'>
        { session.email && (
          <div className="nav_session">
            welcome back, 
            <span className="email"> { session.email } </span>
          </div>
        )}
        <button
          className='btn btn-inverted-red nav_logout'
          onClick={signOut}>
          Sign Out
        </button>
      </div>

    </nav>
  )
}

export default Navigation
