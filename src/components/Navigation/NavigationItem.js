import React from 'react'
import PropTypes from 'prop-types' 
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

NavigationItem.propTypes = {
  navigation: PropTypes.object.isRequired,
  isLinkActive: PropTypes.func.isRequired
}

export default NavigationItem
