import React from 'react';
import '../css/CartItem.css';

const CartItem = props => {
  return (
    <div className='cart-item-container'>
      <div className='cart-info'>
        <img className='cart-img' src={props.item.imageUrl} />
      </div>
      <div className='cart-info'>
        <h2>{props.item.name}</h2>
        <h6>{props.item.price}</h6>
        <p>{props.item.description}</p>
        <button onClick={props.removeFromCart}>Remove From Cart</button>
      </div>
    </div>
  )
}

export default CartItem;
