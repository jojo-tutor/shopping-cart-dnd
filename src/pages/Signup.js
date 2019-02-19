import React from 'react'
import { Link } from 'react-router-dom'
// import FormWrapper from './FormWrapper'
import { auth, db } from '../api'

export default class Signup extends React.Component {
  state={
    requesting: false,
    error: ''
  }
  fields = [{
    name: 'full_name',
    placeholder: 'Fullname'
  },{
    name: 'email',
    placeholder: 'Email'
  },{
    name: 'password',
    placeholder: 'Password',
    type: 'password'
  }]

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
      <div>
        <p>Signup</p>
        {
          // <FormWrapper
          //   fields={this.fields.map(e => e.name)}
          //   onSubmit={this.onSignup}
          //   render={({ formState: { formFields, formErrors }, handlers }) => (
          //     <>
          //       {this.fields.map(({ name, ...restProps }) => (
          //         <div key={name}>
          //           <input name={name} value={formFields[name]} {...restProps} onChange={handlers.onChange}/>
          //           { formErrors[name] && <p style={{ color: 'red' }}>{formErrors[name]}</p>}
          //         </div>
          //       ))}
          //       {error && <p style={{ color: 'red' }}>{error}</p>}
          //       <button onClick={handlers.onSubmit} disabled={requesting}>{ requesting ? 'Signing up...' : 'Signup'}</button>
          //     </>
          //   )}
          // />
        }
        <p>
          <Link to='/login'>Already have an account</Link>
        </p>
      </div>
    )
  }
}