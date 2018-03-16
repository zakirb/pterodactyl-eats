import React from 'react';
import {Link} from 'react-router-dom';

const RestItem = props => {

  return (
    <Link to='/restaurant'>
      <div class='rest-item' onClick={props.liftRestaurantToState}>
        <div>
          <img src={props.restaurant.imageUrl} />
        </div>
        <div>
          <h2>{props.restaurant.name}</h2>
          <h6>{props.restaurant.address}</h6>
          <p>{props.restaurant.description}</p>
        </div>
        <div class='rest-item-backing'></div>
      </div>
    </Link>
  )
}

export default RestItem;
