import React, { Component } from 'react';
import MenuItem from './MenuItem';

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
          <div className='rest-item-container'>
            <div className='rest-info'>
              <img className="rest-img" src={this.props.restaurant.imageUrl} />
            </div>
            <div className='rest-info'>
              <h2>{this.props.restaurant.name}</h2>
              <h6>{this.props.restaurant.address}</h6>
              <p>{this.props.restaurant.description}</p>
            </div>
          </div>
          <div>
          {menuItems}
          </div>
      </div>

    )
  }
}

export default Restaurant
