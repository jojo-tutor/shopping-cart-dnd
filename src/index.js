import React from 'react'
import ReactDOM from 'react-dom'
import Root from './Root'
import { loadableReady } from '@loadable/component'


loadableReady().then(() => {
  ReactDOM.render(
    <Root />, document.getElementById('root')
  )
})


