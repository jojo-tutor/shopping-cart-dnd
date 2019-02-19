import React from 'react'
import { renderRoutes } from 'react-router-config'
import { BrowserRouter } from 'react-router-dom'
import { hot } from 'react-hot-loader/root'
import flow from 'lodash/flow'
import { withAuthentication } from './auth'
import routes from './routes'

const Root = () => (
  <BrowserRouter>
    {renderRoutes(routes)}
  </BrowserRouter>
)

export default flow(
  withAuthentication,
  hot
)(Root)
