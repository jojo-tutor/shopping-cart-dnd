import React from 'react'

const Preloader = ({ label }) => (
  <div className='auth_progressLoader'>
    <div className='loader'>
      <hr/><hr/><hr/><hr/>
    </div>
    <h1>{label}</h1>
  </div>
)

export default Preloader
