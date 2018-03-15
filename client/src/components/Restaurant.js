import React, { Component } from 'react';

class Restaurant extends Component {
  constructor(props){
    super(props)
  }

  const menuItems = this.props.restaurant.menuItems.map( (item) => {
    return <menuItem item={item} addToCart={this.props.addToCart(item)}/>
  })


  render() {
    return (
      <div>
        <h1>........RESTAURANT.......</h1>
          <div>
            <h2>{this.props.restaurant.name}</h2>
            <h6>{this.props.restaurant.address}</h6>
            <img src={this.props.restaurant.imageUrl} />
            <p>{this.props.restaurant.description}</p>
            {menuItems}
          </div>
      </div>

    )
  }
}

export default Restaurant
