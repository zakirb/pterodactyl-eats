import React from 'react';

const CartItem = props => {
  return (
    <div>
      <div>
        <img src="https://thumbs-prod.si-cdn.com/yENUwQCHoFsTXnJqoqYf63Kg_aI=/800x600/filters:no_upscale()/https://public-media.smithsonianmag.com/filer/c5/bb/c5bb28e9-efd8-45b7-8e9c-118d890bfe81/patagotitan.jpg" />
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
