import React from 'react'
import { renderRoutes } from 'react-router-config'
import { Redirect } from 'react-router'
import { Link } from 'react-router-dom'
import Navigation from './components/Navigation'
import { AuthUserContext } from './auth'
import { auth } from './api'

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

const renderLoginPage = () => <Redirect to='/login' />

const renderAuthenticatedPage = (props) => {
  const {
    route
    , location
    , session
  } = props

  return (
    <>
      <Navigation
        session={session}
        location={location}
        handleSignOut={auth.doSignOut}
        navigationList={navigationList}
      />
      {renderRoutes(route.routes, { session })}
    </>
  )
}

const Main = (props) => (
  <AuthUserContext.Consumer>
    {session => session
      ? renderAuthenticatedPage({ ...props, session })
      : renderLoginPage()
    }
  </AuthUserContext.Consumer>
)

export default Main
