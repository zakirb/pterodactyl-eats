import React, { Component } from 'react';
import MenuItem from './MenuItem';
import '../css/restaurant.css';

class Restaurant extends Component {
  constructor(props){
    super(props)
  }




  render() {

    const menuItems = this.props.restaurant.menuItems.map( (item, index) => {
      return <MenuItem item={item} addToCart={ () => this.props.addToCart(item)} key={index}/>
    })

    return (
      <div>
        <h1 class='rest-h1'>{this.props.restaurant.name}</h1>
        <h6 class='rest-h6'>{this.props.restaurant.address}</h6>
        <img src={this.props.restaurant.imageUrl} />
        <p>{this.props.restaurant.description}</p>
        {menuItems}
      </div>

    )
  }
}

export default Restaurant
