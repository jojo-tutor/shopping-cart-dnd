import React from 'react'
import { Redirect } from 'react-router'
import { Link } from 'react-router-dom'
import cn from 'classnames'
import { auth } from '../api'
import 'scss/auth/index.scss'

export default class Login extends React.Component {
  state = {
    error: '',
    isProcessing: false,
    fieldValues: {
      email: '',
      password: ''
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
      this.doLogin(this.state.fieldValues)
    })
  }

  doLogin = async ({ email, password }) => {
    try {
      const { user } = await auth.doSignInWithEmailAndPassword(email, password)
      const { registerUserSession, history } = this.props
      registerUserSession(user)
      history.push('/')
    } catch ({ message: error }) {
      this.setState({
        error,
        isProcessing: false
      })
    }
  }

  render(){
    const {
      session
    } = this.props

    const {
      fieldValues
      , isProcessing
      , error
    } = this.state

    if (session) {
      return <Redirect to='/' />
    }

    return (
      <div className={cn('auth',{'auth-processing': isProcessing }) }>
        <div className="auth_logo">
          <img src="/images/logo.png" alt=""/>
        </div>
        <div className='auth_paper'>

          { error && (
            <div className="auth_error">
              <p>{ error }</p>
            </div>
          )}

          { isProcessing && (
            <div className='auth_progressLoader'>
              <div className="loader">
                <hr/><hr/><hr/><hr/>
              </div>
              <h1>authenticating</h1>
            </div>
          )}

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
              type='submit'
              value='Submit'
              disabled={isProcessing}
              className={cn('btn btn-primary', { processing: isProcessing })}
            />
          </form>

          <p className='auth_extras'>
            <Link
              to='/signup'
              className='noAccount'>
              I don't have an account
            </Link>
          </p>
        </div>
      </div>
    )
  }
}