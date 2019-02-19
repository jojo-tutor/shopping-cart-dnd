import React from 'react'
import { Link } from 'react-router-dom'

export default function Notfound() {
  return(
    <div>
      Page Not Found
      <div>
        <Link to='/'>Home</Link>
      </div>
    </div>
  )
}