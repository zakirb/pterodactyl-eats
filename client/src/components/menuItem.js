import React from 'react';
import restaurantData from '../restaurantData';
import '../css/MenuItem.css';


const MenuItem = props => {
  return (
    <div id='menu-item-container'>
      <div className="item-info">
        <img className='menu-img' src={props.item.imageUrl} />
      </div>
      <div className="item-info">
        <h2>{props.item.name}</h2>
        <h6>{props.item.price}</h6>
        <p>{props.item.description}</p>
        <button className='add-btn' onClick={props.addToCart}>Add to Cart</button>
      </div>
    </div>
  )
}

export default MenuItem;
