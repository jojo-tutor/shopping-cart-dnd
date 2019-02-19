import React from 'react'
import { renderRoutes } from 'react-router-config'
import Navigation from '../components/Navigation'
import { AuthUserContext } from '../auth'

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

const renderAuthenticated = ({ route, location }) => (
  <>
    <Navigation location={location} />
    {renderRoutes(route.routes)}
  </>
)

const Auth = (props) => (
  <AuthUserContext.Consumer>
    {user => user ? renderAuthenticated(props) : renderLogin()}
  </AuthUserContext.Consumer>
)

export default Auth
