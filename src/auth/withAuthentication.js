import React from 'react'
import AuthUserContext from './AuthUserContext'
import { firebase } from '../api'

export default function withAuthentication(Component) {
  return class WithAuthentication extends React.Component {
    state = {
      authUser: null
    }

    componentDidMount() {
      this.authListener = firebase.auth.onAuthStateChanged(authUser => {
        this.setState({ authUser: authUser || null })
      })
    }

    componentWillUnmount() {
      this.authListener = null
    }

    render() {

      if (!this.authListener) {
        return ( 
          <div className="page_loader">
            <div class="loader">
              <hr/><hr/><hr/><hr/>
            </div>
          </div> 
        )
      }

      const { authUser } = this.state

      return (
        <AuthUserContext.Provider value={authUser}>
          <Component {...this.props} />
        </AuthUserContext.Provider>
      )
    }
  }
}