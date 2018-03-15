import React from 'react';

const Checkout = props => {

    console.log(props.cartItems)
    var cartItems = props.cartItems.map( (item, index) => (
      <li key={index}>{item.name}</li>
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

export default Checkout
