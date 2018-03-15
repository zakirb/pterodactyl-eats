import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Home from './Home';
import Results from './Results';
import Restaurant from './Restaurant';
import Checkout from './Checkout';
import Tracking from './Tracking';
import Login from './Login';
import Signup from './Signup';

class Nav extends Component {
  render() {
    return(
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/results'>Results</Link>
        <Link to='/restaurant'>Restaurant</Link>
        <Link to='/checkout'>Checkout</Link>
        <Link to='/tracking'>Tracking</Link>
        <Link to='/login'>Log In</Link>
        <Link to='/signup'>Sign Up</Link>
        <Link to='/'>Logout</Link>
      </nav>
    )
  }
}

export default Nav;
