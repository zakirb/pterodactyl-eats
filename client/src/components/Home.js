import React, { Component } from 'react';
import image from '../images/pterodactyl-img-1.png';
import '../css/home.css';

class Home extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <div>
        <h1>Welcome to PteroEats</h1>
        <h3>Food to your cave, flown by our own pterodactyls.</h3>
        <p>All prices in Pangean Ugh Clubs</p>
        <div className='home-img-wrap'>
          <img className='ptero-img' src={image} />
          {/* <img className='meat' src='https://cdn2.iconfinder.com/data/icons/steak-cartoon-2/512/g27870-512.png' /> */}
        </div>
      </div>
    )
  }
}

export default Home;
