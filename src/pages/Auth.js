import React from 'react'
import { renderRoutes } from 'react-router-config'
import { NavLink, Link } from 'react-router-dom'
import Image from '../components/Image'
import { AuthUserContext } from '../auth'
import { auth } from '../api'

const Navigation = () => (
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
        activeClassName='active'>
        Home
      </NavLink>
      <NavLink
        to='/todo'
        className='nav_link'
        activeClassName='active'>
        Todos
      </NavLink>
      <button
        className='btn btn-inverted-red nav_logout'
        onClick={auth.doSignOut}>
        Signout
      </button>
    </div>
  </nav>
)

const renderLogin = () => (
  <div>
    <p>Log in and explore</p>
    <div>
      <Link to='/login'>Login</Link>
    </div>
    <div>
      <Link to='/signup'>Signup</Link>
    </div>
  </div>
)

const renderAuthenticated = (route) => (
  <>
    <Navigation />
    { renderRoutes(route.routes) }
  </>
)

const Auth = ({ route }) => {
  return(
    <AuthUserContext.Consumer>
      {user => user ? renderAuthenticated(route) : renderLogin()}
    </AuthUserContext.Consumer>
  )
}

export default Auth
