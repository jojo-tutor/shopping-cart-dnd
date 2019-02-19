import React from 'react'
import { AuthUserContext } from './Session'


function Home() {
  return (
    <AuthUserContext.Consumer>
      {user => (
        <div>
          Home Page
        </div>
      )}
    </AuthUserContext.Consumer>
  )
}
export default Home