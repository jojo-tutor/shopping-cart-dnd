import React from 'react'
import NavigationItem from './NavigationItem'

const NavigationList = (props) => {
  const {
    navigations
    , isLinkActive
  } = props

  return (
    <div className='navigation_list'>
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

export default NavigationList
