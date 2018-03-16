import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/nav.css';
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

  slideNav() {
    let navBar = document.getElementById('nav-bar')
    let navButton = document.getElementById('nav-button')
    if (navBar.classList.contains('slide-right')) {
      navBar.classList.remove('slide-right')
      navButton.classList.remove('slide-right-btn')
    } else {
      navBar.classList.add('slide-right')
      navButton.classList.add('slide-right-btn')
    }
  }

  render() {
    let theUser = this.props.user
    if (typeof theUser === 'object' && Object.keys(theUser).length > 0) {
      if (this.props.completedOrder.length > 0) {
        return (
          // links if logged in
          <div>
            <nav id='nav-bar'>
              <ul>
                <li><Link to='/' onClick={() => this.props.liftCurrentPage('/')}>Home</Link></li>
                <li><Link to='/tracking' onClick={() => this.props.liftCurrentPage('')}>Tracking</Link></li>
                <li><Link to='/' onClick={() => this.handleClick()}>Logout</Link></li>
              </ul>
            </nav>
            <button onClick={() => this.slideNav()} id='nav-button'>|||</button>
          </div>
        )
      } else {
        return (
          // links if logged in
          <div>
            <nav id='nav-bar'>
              <ul>
                <li><Link to='/' onClick={() => this.props.liftCurrentPage('/')}>Home</Link></li>
                <li><Link to='/' onClick={() => this.handleClick()}>Logout</Link></li>
              </ul>
            </nav>
            <button onClick={() => this.slideNav()} id='nav-button'>|||</button>
          </div>
        )
      }

    } else {
      return (
        // links if not logged in....
        <div>
          <nav id='nav-bar'>
            <ul>
              <li><Link to='/' onClick={() => this.props.liftCurrentPage('/')}>Home</Link></li>
              <li><Link to='/login'>Log In</Link></li>
              <li><Link to='/signup'>Sign Up</Link></li>
            </ul>
          </nav>
          <button onClick={() => this.slideNav()} id='nav-button'>|||</button>
        </div>
      )
    }
  }
}

export default Nav;
