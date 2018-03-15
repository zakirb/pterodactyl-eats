import React from 'react';
import CartItem from './CartItem';

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
      <p>Total: {total}</p>
    </div>
  )

}

export default Cart;
