import React from 'react'
import AuthUserContext from './AuthUserContext'
import { firebase } from '../../firebase'

export default function withAuthentication(Component) {
  return class WithAuthentication extends React.Component {
    state={
      authUser: null,
    }
    componentDidMount() {
      this.authListener = firebase.auth.onAuthStateChanged(authUser => {
        authUser
          ? this.setState(() => ({ authUser }))
          : this.setState(() => ({ authUser: null }));
      })
    }
    componentWillUnmount() {
      console.log('@unmounted')
      this.authListener = null
    }
    render() {
      const { authUser } = this.state
      return (
        <AuthUserContext.Provider value={authUser}>
          <Component {...this.props} />
        </AuthUserContext.Provider>
      )
    }
  }
}