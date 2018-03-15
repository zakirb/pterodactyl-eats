import React from 'react';
import restaurantData from '../restaurantData';


const menuItem = props => {
  return (
    <div>
      <div>
        <img src={props.item.imageUrl} />
      </div>
      <div>
        <h2>{props.item.name}</h2>
        <h6>{props.item.price}</h6>
        <p>{props.item.description}</p>
      </div>
    </div>
  )
}

export default menuItem;
