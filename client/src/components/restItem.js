import React from 'react';


const restItem = props => {

  return (
    <div>
      <div>
        <img src={props.restaurant.imageUrl} />
      </div>
      <div>
        <h2>{props.restaurant.name}</h2>
        <h6>{props.restaurant.address}</h6>
        <p>{props.restaurant.description}</p>
      </div>
    </div>
  )
}

export default restItem;
