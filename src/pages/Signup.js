import React from 'react'
import { Link } from 'react-router-dom'
import { auth, db } from '../api'
import 'scss/auth/index.scss'

export default class Signup extends React.Component {
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
      <div className='auth'>
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
            Signup
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
            <div className='field'>
              <label htmlFor='confirmPassword'>Confirm Password</label>
              <input
                required
                id='confirmPassword'
                type='password'
                name='confirmPassword'
                value={fieldValues.confirmPassword}
                onChange={this.handleChange}
              />
            </div>
            <input
              className='btn btn-primary'
              type='submit'
              value='Register'
            />
          </form>
          <p className='auth_extras'>
            <Link to='/login'>Already have an account</Link>
          </p>
        </div>
      </div>
    )
  }
}