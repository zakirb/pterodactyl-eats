import React from 'react';
import CartItem from './CartItem';
import {Link} from 'react-router-dom';

const Cart = props => {


  var allItems = props.items.map( (item, index) => {
    return <CartItem item={item} removeFromCart={ () => props.removeFromCart(item) } key={index} />
  })
  var total = props.items.reduce( (acc, curVal) => {
              return acc + curVal.price
            }, 0)

  return (
    <div>
      {allItems}
      <p>Total: ${total}</p>
      <Link to='/checkout'><button>Checkout</button></Link>
    </div>
  )

}

export default Cart;
