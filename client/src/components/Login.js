import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import '../css/forms.css';

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleEmailChange(e) {
    this.setState({ email: e.target.value })
  }

  handlePasswordChange(e) {
    this.setState({ password: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault()
    axios.post('/auth/login', {
      email: this.state.email,
      password: this.state.password
    }).then( result => {
      console.log(result.data) // result is result from back end responding to post request and .data is where axios stores the returned data
      localStorage.setItem('mernToken', result.data.token) // change 'mernToken' to your app name or something useful
      this.props.liftToken(result.data)
    }).catch( err => console.log(err) )
  }

  render() {
    if ( Object.keys(this.props.user).length > 0 ) {
      return (<Redirect to={{ pathname: this.props.currentPage }} />)
    } else {
      return(

        <div className='form-wrap'>
          <h3>Please Log In</h3>

          <form onSubmit={this.handleSubmit}>
            Email: <input type='text' value={this.state.email} onChange={this.handleEmailChange} />
            <br />
            Password: <input type='password' value={this.state.password} onChange={this.handlePasswordChange} />
            <br />
            <input className='form-btn' type='submit' value='Log In!' />
          </form>
        </div>
      )
    }
  }
}

export default Login;
