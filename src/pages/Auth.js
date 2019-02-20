import React from 'react'
import { renderRoutes } from 'react-router-config'
import { Redirect } from 'react-router'
import { Link } from 'react-router-dom'
import Navigation from '../components/Navigation/index'
import { AuthUserContext } from '../auth'
import { auth } from '../api'

const renderLogin = () => <Redirect to='/login' />

const renderAuthenticated = ({ route, location, session }) => (
  <>
    <Navigation
      session={session}
      location={location}
      signOut={auth.doSignOut}
    />
    {renderRoutes(route.routes)}
  </>
)

const Auth = (props) => (
  <AuthUserContext.Consumer>
    {session => session ? renderAuthenticated({ ...props, session }) : renderLogin()}
  </AuthUserContext.Consumer>
)

export default Auth
