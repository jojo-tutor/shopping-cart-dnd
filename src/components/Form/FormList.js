import React from 'react'
import PropTypes from 'prop-types' 
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

FormList.propTypes = {
  forms: PropTypes.arrayOf(PropTypes.object).isRequired,
  fieldValues: PropTypes.object.isRequired
}

export default FormList
