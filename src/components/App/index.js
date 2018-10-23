import React from 'react'
import { renderRoutes } from 'react-router-config'
import { NavLink, Link } from 'react-router-dom'
import { AuthUserContext } from '../Session'
import { auth } from '../../firebase'

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
          <div>
            {user ? (
              <>
                <div>
                  <NavLink to='/' activeStyle={activeStyle}>Home</NavLink>
                  <NavLink to='/todo' activeStyle={activeStyle}>Todos</NavLink>
                </div>
                <button onClick={auth.doSignOut}>Signout</button>
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