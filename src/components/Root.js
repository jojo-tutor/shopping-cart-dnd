import React from 'react'
import { renderRoutes } from 'react-router-config'
import { BrowserRouter } from 'react-router-dom'
import routes from './routes'
import { withAuthentication } from './Session'
import { hot } from 'react-hot-loader/root'
import flow from 'lodash/flow'

function Root() {
  return (
    <BrowserRouter>
      {renderRoutes(routes)}
    </BrowserRouter>
  )
}

export default flow(
  withAuthentication,
  hot
)(Root)
