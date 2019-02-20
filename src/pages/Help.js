import React from 'react'
import { AuthUserContext } from '../auth'

function Help() {
  return (
    <AuthUserContext.Consumer>
      {user => (
        <div>
          Help Page
        </div>
      )}
    </AuthUserContext.Consumer>
  )
}

export default Help
