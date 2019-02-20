import React from 'react'
import { renderRoutes } from 'react-router-config'
import { BrowserRouter } from 'react-router-dom'
import { hot } from 'react-hot-loader/root'
import flow from 'lodash/flow'
import { withAuthentication } from './auth'
import routes from './routes'
import 'scss/base.scss'

const Root = ({ session, registerUserSession }) => (
  <BrowserRouter>
    {renderRoutes(routes, { session, registerUserSession })}
  </BrowserRouter>
)

export default flow(
  withAuthentication,
  hot
)(Root)
