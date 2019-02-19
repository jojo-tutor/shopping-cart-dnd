import React from 'react'
import { renderRoutes } from 'react-router-config'
import { BrowserRouter } from 'react-router-dom'
import { withAuthentication } from './auth'
import routes from './routes'

const Root = () => (
  <BrowserRouter>
    {renderRoutes(routes)}
  </BrowserRouter>
)

export default withAuthentication(Root)
