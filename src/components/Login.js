import React from 'react'

export default class Login extends React.Component {
  state= {
    email: '',
    password: '',
    loading: false
  }

  onSubmit = () => {
    this.setState({
      loading: true
    }, async () => {
      // request
      this.setState({ loading: false })
    })
  }

  onChange = (event) => {
    const { value, name } = event.target
    this.setState({
      [name]: value
    })
  }

  render(){
    const { email, password, requesting } = this.state
    const loginLabel = requesting ? 'Logging in' : 'Login'
    return (
      <div>
        <p>Login Page</p>
        <input name='email' value={email} onChange={this.onChange}/>
        <input name='password' value={password} onChange={this.onChange}/>
        <button onClick={this.onSubmit} disabled={requesting}> {loginLabel} </button>
      </div>
    )
  }
}