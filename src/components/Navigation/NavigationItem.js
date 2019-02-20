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
    <NavLink
      key={value}
      to={value}
      className='nav_link'
      activeClassName='active'
      isActive={isLinkActive(value)}>
      { label }
    </NavLink>
  )
}

export default NavigationItem
