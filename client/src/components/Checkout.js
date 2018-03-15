import React, { Component } from 'react';

class Checkout extends Component {
  constructor(props){
    super(props)
  }

  render() {
    console.log(this.props.cartItems)
    const cartItems = this.props.cartItems.map( (food, index) => (
      <li key={index}>{food.name}</li>
    ))

    return (
      <div>
        <h1>........CHECKOUT.......</h1>
        <h2>Your Order</h2>
        <ul>
          {cartItems}
        </ul>
      </div>
    )
  }
}

export default Checkout
