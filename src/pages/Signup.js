import React, { PureComponent } from 'react'
import Form from '../components/Form'
import Logo from '../components/Form/Logo'
import Preloader from '../components/Form/Preloader'
import Error from '../components/Form/Error'
import HeaderTitle from '../components/Form/HeaderTitle'
import FooterLink from '../components/Form/FooterLink'
import { auth, db } from '../api'
import 'scss/auth/index.scss'

const formList = [
  {
    id: 'email'
  },
  {
    id: 'password'
  },
  {
    id: 'confirmPassword',
    type: 'password'
  }
]

class Signup extends PureComponent {
  state = {
    error: '',
    isProcessing: false,
    fieldValues: {
      email: '',
      password: '',
      confirmPassword: ''
    }
  }

  handleChange = (e) => {
    e.preventDefault()
    const { id, value } = e.target
    this.setState(({ fieldValues }) =>
      ({ fieldValues: { ...fieldValues, [id]: value } }))
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.setState({ isProcessing: true }, () => {
      this.doSignup(this.state.fieldValues)
    })
  }

  doSignup = async (data) => {
    try {
      const { email, password } = data
      const { user } = await auth.doCreateUserWithEmailAndPassword({ email, password })
      await db.createDocument('users', { ...data, id: user.uuid })
      this.props.history.push('/')
    } catch({ message: error }) {
      this.setState({
        error,
        isProcessing: false
      })
    }
  }

  render() {
    const { fieldValues, isProcessing, error } = this.state
  
    return (
      <Form
        name='signup'
        error={error}
        formList={formList}
        fieldValues={fieldValues}
        isProcessing={isProcessing}
        preloaderLabel='Signing up...'
        headerTitleLabel='Signup'
        submitButtonLabel='Register'
        footerLinkTo='/login'
        footerLinkLabel='Already have an account?'
        onChange={this.handleChange}
        onSubmit={this.handleSubmit}
      />
    )
  }
}

export default Signup
