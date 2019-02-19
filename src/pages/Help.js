import React from 'react'
import { AuthUserContext } from '../auth'


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
