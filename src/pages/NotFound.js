import React from 'react'
import { Link } from 'react-router-dom'
import 'scss/404/index.scss'

const Notfound = () => (
  <div className='page notFoundPage'>
    <div className="container">
      <div className="row">
        <div className="col col-sm-6 col_content">
          <h1 className="title">Oops looks like you're lost</h1>
          <p className="desc">The page you requested is either down or does not exist</p>
          <Link 
            className='btn btn-primary'
            to='/'>
            Take me back
          </Link>
        </div>
        <div className="col col-sm-6 col_graphic">
          <img src="images/404.gif" alt=""/>
        </div>
      </div>
    </div>
  </div>
)

export default Notfound
