import React from 'react'
import { Link } from 'react-router-dom'
import { auth, db } from '../api'

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
      <div>
        <p>Signup</p>
        <p>
          <Link to='/login'>Already have an account</Link>
        </p>
      </div>
    )
  }
}