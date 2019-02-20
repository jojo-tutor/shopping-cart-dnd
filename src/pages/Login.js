import React from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../api'
import 'scss/auth/index.scss'

export default class Login extends React.Component {
  state = {
    fieldValues: {
      email: '',
      password: ''
    },
    isProcessing: false,
    error: ''
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
      this.doLogin(this.state.fieldValues)
    })
  }

  doLogin = ({ email, password }) => {
    auth.doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.props.history.push('/')
      })
      .catch(({ message: error }) => {
        this.setState({ error, isProcessing: false })
      })
  }

  render(){
    const {
      fieldValues
      , isProcessing
      , error
    } = this.state

    return (
      <div className='auth'>
        <div className='auth_paper'>
          <h1 className='auth_header'>
            Login
          </h1>
          <form 
            className='auth_form' 
            onSubmit={this.handleSubmit}>
            <div className='field'>
              <label htmlFor='email'>Email</label>
              <input
                required
                id='email'
                type='email'
                name='email'
                value={fieldValues.email}
                onChange={this.handleChange}
              />
            </div>
            <div className='field'>
              <label htmlFor='password'>Password</label>
              <input
                required
                id='password'
                type='password'
                name='password'
                value={fieldValues.password}
                onChange={this.handleChange}
              />
            </div>
            <input
              class='btn btn-primary'
              type='submit'
              value='Submit'
            />
          </form>
          <p className='auth_extras'>
            <Link to='/signup' className='noAccount'>I don't have an account</Link>
          </p>
        </div>
      </div>
    )
  }
}