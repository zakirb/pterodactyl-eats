import React from 'react';

const CartItem = props => {
  return (
    <div>
      <div>
        <img src={props.item.imageUrl} />
      </div>
      <div>
        <h2>{props.item.name}kkk</h2>
        <h6>{props.item.price}</h6>
        <p>{props.item.description}</p>
        <button onClick={props.removeFromCart}>Remove From Cart</button>
      </div>
    </div>
  )
}

export default CartItem;
