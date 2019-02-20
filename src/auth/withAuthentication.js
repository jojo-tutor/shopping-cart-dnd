import React from 'react'
import AuthUserContext from './AuthUserContext'
import { firebase } from '../api'

export default function withAuthentication(Component) {
  return class WithAuthentication extends React.Component {
    state = {
      session: null
    }

    componentDidMount() {
      this.authListener = firebase.auth.onAuthStateChanged(session => {
        this.setState({ session: session || null })
      })
    }

    componentWillUnmount() {
      this.authListener = null
    }

    registerUserSession = (session) => {
      this.authListener = session
      this.setState({ session })
    }

    render() {

      if (!this.authListener) {
        return <div className="loader">Loading...</div>
      }

      const { session } = this.state
      const childProps = {
        ...this.props,
        session,
        registerUserSession: this.registerUserSession
      }

      return (
        <AuthUserContext.Provider value={session}>
          <Component {...childProps} />
        </AuthUserContext.Provider>
      )
    }
  }
}