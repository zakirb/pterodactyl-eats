import React, { Component } from 'react';
import restaurantData from '../restaurantData';
import RestItem from './RestItem';

class Results extends Component {
  constructor(props){
    super(props)
  }




  render() {

    const allRestaurants = restaurantData.map( (restaurant, index) => {
      return <RestItem restaurant={restaurant} liftRestaurantToState={() => this.props.liftRestaurantToState(restaurant)} key={index} />
    })

    return (
      <div>
        <h1>........RESULTS.......</h1>
        {/* {allRestaurants} */}
      </div>

    )
  }
}

export default Results
