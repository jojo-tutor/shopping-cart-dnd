import React from 'react'
import { renderRoutes } from 'react-router-config'
import { NavLink, Link } from 'react-router-dom'
import { AuthUserContext } from '../auth'
import { auth } from '../api'

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
    <div>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/help'>Help</NavLink>
    </div>
    <button onClick={auth.doSignOut}>
      Signout
    </button>
    { renderRoutes(route.routes) }
  </>
)

const Authenticated = ({ route }) => {
  return(
    <AuthUserContext.Consumer>
      {user => user ? renderAuthenticated(route) : renderLogin()}
    </AuthUserContext.Consumer>
  )
}

export default Authenticated
