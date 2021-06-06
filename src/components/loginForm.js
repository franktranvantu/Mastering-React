import React, {Component} from 'react';
import Input from "./common/input";

class LoginForm extends Component {
  state = {
    account: {
      username: '',
      password: ''
    },
    errors: {}
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const errors = this.validate();
    this.setState({errors: errors || {}});
    if (errors) {
      return;
    }
    console.log('Submitted');
  }

  handleChange = ({currentTarget: input}) => {
    const account = {...this.state.account};
    account[input.name] = input.value;
    const errors = {...this.state.errors};
    const propertyError = this.validateProperty(input);
    if (propertyError) {
      errors[input.name] = propertyError;
    } else {
      delete errors[input.name];
    }
    this.setState({account, errors});
  }

  validate = () => {
    const {account} = this.state;
    const errors = {};
    if (account.username.trim() === '') {
      errors.username = 'Username is required.';
    }
    if (account.password.trim() === '') {
      errors.password = 'Password is required.';
    }

    return Object.keys(errors).length === 0 ? null : errors;
  }

  validateProperty = input => {
    if (input.name === 'username') {
      if (input.value.trim() === '') {
        return 'Username is required.';
      }
    }
    if (input.name === 'password') {
      if (input.value.trim() === '') {
        return 'Password is required.';
      }
    }
  }

  render() {
    const {account, errors} = this.state;
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="username"
            value={account.username}
            label="Username"
            onChange={this.handleChange}
            error={errors.username}
          />
          <Input
            name="password"
            value={account.password}
            label="Password"
            onChange={this.handleChange}
            error={errors.password}
          />
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;