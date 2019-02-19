import React from 'react'
import { NavLink, Link } from 'react-router-dom'


function Navigation({ doSignout }) {
  return (
    <nav className='nav'>
      <NavLink 
        className='nav_logo'
        activeClassName='active'
        to='/'>
        <img src="/images/logo.png" alt=""/>
      </NavLink>
      <div className='nav_links'>
        <NavLink 
          to='/' 
          className='nav_link'
          activeClassName='active'>
          Home
        </NavLink>
        <NavLink 
          to='/todo' 
          className='nav_link'
          activeClassName='active'>
          Todos
        </NavLink>
        <button
          className='btn btn-inverted-red nav_logout' 
          onClick={() => doSignout() }>
          Signout
        </button>
      </div>
    </nav>
  )
}
export default Navigation