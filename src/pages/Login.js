import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';
import Form from '../components/Form';
import { auth } from '../api';
import 'scss/auth/index.scss';

const formList = [
  {
    id: 'email',
  },
  {
    id: 'password',
  },
];

class Login extends PureComponent {
  state = {
    error: '',
    isProcessing: false,
    fieldValues: {
      email: '',
      password: '',
    },
  }

  handleChange = (e) => {
    e.preventDefault();
    const { id, value } = e.target;
    this.setState(({ fieldValues }) => ({ fieldValues: { ...fieldValues, [id]: value } }));
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ isProcessing: true }, () => {
      this.doLogin(this.state.fieldValues); // eslint-disable-line
    });
  }

  doLogin = async ({ email, password }) => {
    try {
      const { user } = await auth.doSignInWithEmailAndPassword(email, password);
      const { registerUserSession, history } = this.props;
      registerUserSession(user);
      history.push('/');
    } catch ({ message: error }) {
      this.setState({
        error,
        isProcessing: false,
      });
    }
  }

  render() {
    const {
      session,
    } = this.props;

    const {
      fieldValues,
      isProcessing,
      error,
    } = this.state;

    if (session) {
      return <Redirect to="/" />;
    }

    return (
      <Form
        name="login"
        error={error}
        formList={formList}
        fieldValues={fieldValues}
        isProcessing={isProcessing}
        preloaderLabel="Logging in..."
        headerTitleLabel="Login"
        submitButtonLabel="Login"
        footerLinkTo="/signup"
        footerLinkLabel={'I don\'t have an account.'}
        onChange={this.handleChange}
        onSubmit={this.handleSubmit}
      />
    );
  }
}

Login.defaultProps = {
  session: null,
};

Login.propTypes = {
  session: PropTypes.object,
  history: PropTypes.object.isRequired,
  registerUserSession: PropTypes.func.isRequired,
};

export default Login;
