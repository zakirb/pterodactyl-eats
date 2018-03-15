import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
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
      <Router>
        <div>
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
          <Route exact path='/' component={Home} />
          <Route path='/results' component={Results} />
          <Route path='/restaurant' component={Restaurant} />
          <Route path='/checkout' component={Checkout} />
          <Route path='/tracking' component={Tracking} />
          <Route path='/login' component={Login} />
          <Route path='/signup' component={Signup} />
        </div>
      </Router>
    )
  }
}

export default Nav;
