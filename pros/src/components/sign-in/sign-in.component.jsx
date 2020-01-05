import React, { Component } from 'react';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  handleSubmit = event => {
    event.preventDefault();

    this.setState({ email: '', password: '' });
  };

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className='sign-in'>
        <h2>Mam już konto</h2>
        <span>Zaloguj się podając email i hasło.</span>
        <form onSubmit={this.handleSubmit}>
          <input
            type='email'
            name='email'
            value={this.state.email}
            onChange={this.handleChange}
            required
          />
          <label>Email</label>
          <input
            type='password'
            name='password'
            value={this.state.password}
            onChange={this.handleChange}
            required
          />
          <label>Hasło</label>
          <input type='submit' value='Zaloguj' />
        </form>
      </div>
    );
  }
}

export default SignIn;
