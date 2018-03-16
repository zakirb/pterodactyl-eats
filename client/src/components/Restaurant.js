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
      <div className='rest-wrap'>
        <div className='rest-item-container'>
          <div className='rest-info'>
            <h1>{this.props.restaurant.name}</h1>
            <h4>{this.props.restaurant.address}</h4>
            <p>{this.props.restaurant.description}</p>
            <img className="rest-img" src={this.props.restaurant.imageUrl} />
          </div>
        </div>
        <div>
        {menuItems}
        </div>
        <div className='rest-item-backing'></div>
      </div>
    )
  }
}

export default Restaurant
