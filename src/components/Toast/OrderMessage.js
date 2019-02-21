import React from 'react'
import PropTypes from 'prop-types' 
import TimeAgo from 'react-timeago'

const OrderMessage = (props) => {
  const {
    email
    , total
    , price
    , date
  } = props

  return (
    <div className='order-message'>
      <span className='info'>
        {`${email} bought ${total} items for ${price}`}
      </span> <br/>
      <span className='time-ago'>
        <TimeAgo date={date} />
      </span>
    </div>
  )
}

OrderMessage.propTypes = {
  email: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  total: PropTypes.oneOfType([
    PropTypes.number.isRequired,
    PropTypes.string.isRequired
  ]),
  price: PropTypes.oneOfType([
    PropTypes.number.isRequired,
    PropTypes.string.isRequired
  ])
}

export default OrderMessage
