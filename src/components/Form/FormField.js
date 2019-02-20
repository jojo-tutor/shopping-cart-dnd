import React from 'react'
import startCase from 'lodash/startCase'
import Image from '../Image'

const FormField = (props) => {
  const {
    form
    , value
    , onChange
  } = props

  const {
    id
  } = form

  const type = form.type || id
  const required = form.required !== false
  const label = `${startCase(id)}${required ? '*' : ''}`

  return (
    <div className='field'>
      <label htmlFor={id}>
        { label }
      </label>
      <input
        id={id}
        type={type}
        name={id}
        value={value}
        required={required}
        onChange={onChange}
      />
    </div>
  )
}

export default FormField
