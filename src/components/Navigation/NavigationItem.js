import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import Image from '../Image'

const NavigationItem = (props) => {
  const {
    navigation
    , isLinkActive
  } = props

  const {
    value
    , label
  } = navigation

  return (
    <div className='navigation_item'>
      <NavLink
        key={value}
        to={value}
        className='nav_link'
        activeClassName='active'
        isActive={isLinkActive(value)}
      >
        { label }
      </NavLink>
    </div>
  )
}

export default NavigationItem
