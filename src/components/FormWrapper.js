import { PureComponent } from 'react'

export default class FormWrapper extends PureComponent {
  state={
    formFields: {
      ...this.props.fields.reduce((left, right) => {
        left[right] = ''
        return left
      }, {}),
    },
    formErrors: {}
  }

  onChange = (event) => {
    event.preventDefault()
    const { value, name } = event.target
    this.setState({
      formFields: {
        ...this.state.formFields,
        [name]: value
      }
    })
  }

  onSubmit = () => {
    const formErrors = {}
    const isValid = Object.entries(this.state.formFields).reduce((left,[key, value]) => {
      if(!value) {
        formErrors[key] = `${key} is required`
        return false
      }
      return left && value
    }, true)
    if (isValid)
      this.props.onSubmit(this.state.formFields)
    else
      this.setState({ formErrors })
  }

  render() {
    const { onSubmit, onChange, state } = this
    const { render, children } = this.props
    const renderPropCall = render ? render : children
    return (
      renderPropCall({
        formState: state,
        handlers: {
          onSubmit,
          onChange
        }
      })
    )
  }
}