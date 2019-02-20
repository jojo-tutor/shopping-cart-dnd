import React from 'react'
import FormField from './FormField'

const FormList = (props) => {
  const {
    forms
    , fieldValues
    , ...restProps
  } = props

  return forms.map(form => (
    <FormField
      {...restProps}
      key={form.id}
      form={form}
      value={fieldValues[form.id]}
    />
  ))
}

export default FormList
