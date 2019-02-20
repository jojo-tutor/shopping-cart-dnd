import React from 'react'
import { Link } from 'react-router-dom'
import { auth, db } from '../api'
import 'scss/auth/index.scss'

export default class Signup extends React.Component {
  state={
    requesting: false,
    error: ''
  }

  signUpCallback = async(data) => {
    try {
      const { email, password } = data
      const { user: { uid : id } } = await auth.doCreateUserWithEmailAndPassword({ email, password })
      await db.createDocument('user', { ...data, id })
      this.props.history.push('/')
    } catch({ message: error }) {
      this.setState({
        requesting: false,
        error
      })
    }
  }

  onSignup = (data) => {
    this.setState({ requesting: true }, this.signUpCallback.bind(this, data))
  }

  render() {
    const { requesting, error } = this.state
    return (
      <div className='auth'>
        <div className='auth_paper'>

          { error && (
            <div className="auth_error">
              <p>{ error }</p>
            </div>
          )}

          { isProcessing && (
            <div className='auth_progressLoader'>
              <div class="loader">
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
              />
            </div>
            <div className='field'>
              <label htmlFor='password'>Password</label>
              <input
                required
                id='password'
                type='password'
                name='password'
              />
            </div>
            <div className='field'>
              <label htmlFor='confirmPassword'>Confirm Password</label>
              <input
                required
                id='confirmPassword'
                type='password'
                name='confirmPassword'
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