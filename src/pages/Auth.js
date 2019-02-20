import React from 'react'
import { renderRoutes } from 'react-router-config'
import Navigation from '../components/Navigation/index'
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

const renderAuthenticated = ({ route, location, user }) => (
  <>
    <Navigation
      user={user}
      location={location}
      signOut={auth.doSignOut}
    />
    {renderRoutes(route.routes)}
  </>
)

const Auth = (props) => (
  <AuthUserContext.Consumer>
    {user => user ? renderAuthenticated({ ...props, user }) : renderLogin()}
  </AuthUserContext.Consumer>
)

export default Auth
