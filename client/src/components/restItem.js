import React from 'react';
import {Link} from 'react-router-dom';
import '../css/RestItem.css';

const RestItem = props => {

  return (
    <Link to='/restaurant'>
      <div className="rest-item-container rest-item" onClick={props.liftRestaurantToState}>
        <div className="rest-info">
          <img className='rest-info' src={props.restaurant.imageUrl} />
        </div>
        <div className='rest-info'>
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
