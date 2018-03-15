import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import '../App.css';
import { UserProfile } from './UserProfile';
import axios from 'axios'
import Nav from './Nav';
import { Search } from './Search';
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
      currentPage: '/',
      currentRestaurant: null,
      cartItems: [],
      completedOrder: []
    }
    this.liftTokenToState = this.liftTokenToState.bind(this)
    this.liftCurrentPageToState = this.liftCurrentPageToState.bind(this)
    this.logout = this.logout.bind(this)
    this.liftRestaurantToState = this.liftRestaurantToState.bind(this)
    this.addToCart = this.addToCart.bind(this)
  }

  liftTokenToState(data) {
    this.setState({
      token: data.token,
      user: data.user
    })
  }


  liftRestaurantToState(restaurant) {
    console.log(`Setting current restaurant to ${restaurant.name}`)
    this.setState({
      currentRestaurant: restaurant,
      currentPage: '/restaurant'
    })
  }

  addToCart(item) {
    console.log(`ADDING ${item.name} to Cart`)
    var copyCart = Array.from(this.state.cartItems)
    copyCart.push(item)
    this.setState({
      cartItems: copyCart
    }, console.log(this.state.cartItems))

  }


  liftCurrentPageToState(page) {
    this.setState({
      currentPage: page
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
        <h1>~~~~~~~State.currentPage: {this.state.currentPage}~~~~~~~~~~~~</h1>
        <Router>
          <div>
            <Nav
              user={this.state.user}
              logout={this.logout}
              liftToken={this.liftTokenToState}
              liftCurrentPage={this.liftCurrentPageToState}
            />
            <Search liftCurrentPage={this.liftCurrentPageToState} />
            <div>
              <Route exact path='/' component={Home} />
              <Route path='/results' component={ () => (
                <Results liftRestaurantToState={this.liftRestaurantToState} />
              )} />
              <Route path='/restaurant' component={ () => (
                <Restaurant restaurant={this.state.currentRestaurant} addToCart={this.addToCart} />
              )} />
              <Route path='/checkout' component={ () => (
                <Checkout cartItems={this.state.cartItems} />
              )} />
              <Route path='/tracking' component={Tracking} />
              <Route path='/login' component={() => (
                <Login user={this.state.user} currentPage={this.state.currentPage} liftToken={this.liftTokenToState} />
              )} />
              <Route path='/signup' component={() => (
                <Signup user={this.state.user} currentPage={this.state.currentPage} liftToken={this.liftTokenToState} />
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
