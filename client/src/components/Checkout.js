import React from 'react';

const Checkout = props => {


    console.log(props.cartItems)
    var cartItems = props.cartItems.map( (item, index) => (
      <li key={index}>{item.name} <span>{item.price}</span> <span onClick={ () => props.removeFromCart(item) }>Remove from cart</span></li>
    ))
    var total = props.cartItems.reduce( (acc, curVal) => {
                return acc + curVal.price
              }, 0)
    return (
      <div>
        <h1>........CHECKOUT.......</h1>
        <h2>Your Order</h2>
        <ul>
          {cartItems}
        </ul>
        <p>Total: ${total}</p>
      </div>
    )
}

export default Checkout
