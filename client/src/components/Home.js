import React, { Component } from 'react';
import image from '../images/pterodactyl-img-1.png';
import '../css/cart.css';

class Home extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <div>
        <h1>Welcome to PteroEats</h1>
        <h3>Food to your cave, flown by our own pterodactyls</h3>
        <img src={image} />
      </div>
    )
  }
}

export default Home;
