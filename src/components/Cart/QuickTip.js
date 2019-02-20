import React from 'react'
import Image from '../Image'

const QuickTip = (props) => {
  return (
    <div className='cart_quicktip'>
      <div className='icon'>
        <Image
          src='images/drag_icon.png'
          alt='Drag Icon'
        />
      </div>
      <div className='tip'>
        <h3 className='tip_header'>Quick Tip:</h3>
        <p className='tip_note'>
          You can drag the items you want to add in this area.
        </p>
      </div>
    </div>
  )
}

QuickTip.propTypes = {

}

export default QuickTip
