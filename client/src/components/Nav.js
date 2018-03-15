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

  handleClick() {
    this.props.logout()
    this.props.liftCurrentPage('/')
  }

  render() {
    let theUser = this.props.user
    if (typeof theUser === 'object' && Object.keys(theUser).length > 0) {
      return (
        // links if logged in
        <nav>
          <Link to='/' onClick={() => this.props.liftCurrentPage('/')}>Home</Link>
          <Link to='/restaurant' onClick={() => this.props.liftCurrentPage('/restaurant')}>Restaurant</Link>
          <Link to='/checkout' onClick={() => this.props.liftCurrentPage('')}>Checkout</Link>
          <Link to='/tracking' onClick={() => this.props.liftCurrentPage('')}>Tracking</Link>
          <Link to='/' onClick={() => this.handleClick()}>Logout</Link>
        </nav>
      )
    } else {
      return (
        // links if not logged in....
        <nav>
          <Link to='/' onClick={() => this.props.liftCurrentPage('/')}>Home</Link>
          <Link to='/restaurant' onClick={() => this.props.liftCurrentPage('/restaurant')}>Restaurant</Link>
          <Link to='/login'>Log In</Link>
          <Link to='/signup'>Sign Up</Link>
        </nav>
      )
    }
  }
}

export default Nav;
