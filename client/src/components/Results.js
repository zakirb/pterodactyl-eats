import React, { Component } from 'react';
import restaurantData from '../restaurantData';

class Results extends Component {
  constructor(props){
    super(props)
  }

  const allRestaurants = restaurantData.map( (restaurant) => {
    return <restItem restaurant={restaurant}/>
  })


  render() {
    return (
      <div>
        <h1>........RESULTS.......</h1>
        {allRestaurants}
      </div>

    )
  }
}

export default Results
