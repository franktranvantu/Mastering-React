import React, {Component} from 'react';

class LoginForm extends Component {
  state = {
    account: {
      username: '',
      password: ''
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submitted');
  }

  handleChange = (event) => {
    const account = {...this.state.account};
    account.username = event.currentTarget.value;
    this.setState({account});
  }

  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input onChange={this.handleChange} type="text" className="form-control" id="username"/>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" id="password"/>
          </div>
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;