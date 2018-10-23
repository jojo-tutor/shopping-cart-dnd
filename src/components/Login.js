import React from 'react'
import FormWrapper from './FormWrapper'
import { Link } from 'react-router-dom'
import { auth } from '../firebase'

export default class Login extends React.Component {
  state={
    requesting: false,
    error: ''
  }
  fields = [{
    name: 'email',
    placeholder: 'Email'
  },{
    name: 'password',
    placeholder: 'Password',
    type: 'password'
  }]

  loginCallback = ({ email, password }) => {
    auth.doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.props.history.push('/');
      })
      .catch(({ message: error }) => {
        this.setState({ error, requesting: false })
      });
  }

  onLogin = (data) => {
    this.setState({ requesting: true }, this.loginCallback.bind(this, data))
  }

  render(){
    const { requesting, error } = this.state
    return (
      <div>
        <p>Login</p>
        <FormWrapper
          fields={this.fields.map(e => e.name)}
          onSubmit={this.onLogin}
          render={({ formState: {formFields, formErrors}, handlers }) => (
            <>
              {this.fields.map(({ name, ...restProps }) => (
                <div key={name}>
                  <input key={name} name={name} value={formFields[name]} {...restProps} onChange={handlers.onChange}/>
                  { formErrors[name] && <p style={{ color: 'red' }}>{formErrors[name]}</p>}
                </div>
              ))}
              {error && <p style={{ color: 'red' }}>{error}</p>}
              <button onClick={handlers.onSubmit} disabled={requesting}>{ requesting ? 'Logging in...' : 'Login'}</button>
            </>
          )}
        />
        <p>
          <Link to='/signup'>I don't have an account</Link>
        </p>
      </div>
    )
  }
}