import React from 'react'
import PropTypes from 'prop-types' 
import NavigationItem from './NavigationItem'

const NavigationList = (props) => {
  const {
    navigations
    , isLinkActive
  } = props

  return (
    <div className='nav_links'>
      {navigations.map(navigationItem => (
        <NavigationItem
          key={navigationItem.value}
          navigation={navigationItem}
          isLinkActive={isLinkActive}
        />
      ))}
    </div>
  )
}

NavigationList.propTypes = {
  isLinkActive: PropTypes.func.isRequired,
  navigations: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default NavigationList
