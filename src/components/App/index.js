import React from 'react'
import { renderRoutes } from 'react-router-config'
import { NavLink, Link } from 'react-router-dom'
import { AuthUserContext } from '../Session'
import Navigation from '../Navigation'
import { auth } from '../../firebase'
import 'scss/base.scss'

class App extends React.Component {
  render() {
    const { route } = this.props
    const activeStyle= {
      fontWeight: "bold",
      color: "red"
    }
    return(
      <AuthUserContext>
        {user => (
          <div className='appContainer'>
            {user ? (
              <>
                <Navigation doSignout={auth.doSignOut}/>
                {renderRoutes(route.routes)}
              </>
            ): (
              <div>
                <p>Log in and explore</p>
                <div>
                  <Link to='/login'>Login</Link>
                </div>
                <div>
                  <Link to='/signup'>Signup</Link>
                </div>
              </div>
            )}
          </div>
        )}
      </AuthUserContext>
    )
  }
}

export default App