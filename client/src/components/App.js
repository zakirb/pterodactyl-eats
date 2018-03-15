import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import '../App.css';
import { UserProfile } from './UserProfile';
import axios from 'axios'
import Nav from './Nav';
import Home from './Home';
import Results from './Results';
import Restaurant from './Restaurant';
import Checkout from './Checkout';
import Tracking from './Tracking';
import Login from './Login';
import Signup from './Signup';
import { Footer } from './Footer';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      token: '',
      user: {},
      currentPage: '',
      currentRestaurant: null,
      cartItems: [],
      completedOrder: []
    }
    this.liftTokenToState = this.liftTokenToState.bind(this)
    this.logout = this.logout.bind(this)
  }

  liftTokenToState(data) {
    this.setState({
      token: data.token,
      user: data.user
    })
  }

  logout() {
    console.log('Logging out')
    localStorage.removeItem('mernToken')
    this.setState({ token: '', user: {} })
  }

  componentDidMount() {
    var token = localStorage.getItem('mernToken')
    if (token === 'undefined' || token === 'null' || token === '' || token === undefined) {
      localStorage.removeItem('mernToken')
      this.setState({
        token: '',
        user: {}
      })
    } else {
      axios.post('/auth/me/from/token', {
        token // same as token: token
      }).then( result => {
        localStorage.setItem('mernToken', result.data.token)
        this.setState({
          token: result.data.token,
          user: result.data.user
        })
      }).catch( err => console.log(err))
    }
  }

  render() {
    return (
      <div>
        <Router>
          <div>
            <Nav user={this.state.user} logout={this.logout} liftToken={this.liftTokenToState} />
            <div>
              <Route exact path='/' component={Home} />
              <Route path='/results' component={Results} />
              <Route path='/restaurant' component={Restaurant} />
              <Route path='/checkout' component={Checkout} />
              <Route path='/tracking' component={Tracking} />
              <Route path='/login' component={() => (
                <Login liftToken={this.liftTokenToState} />
              )} />
              <Route path='/signup' component={() => (
                <Login liftToken={this.liftTokenToState} />
              )} />
            </div>
          </div>
        </Router>
        <Footer />
      </div>
    )
  }
}

export default App;


























//
