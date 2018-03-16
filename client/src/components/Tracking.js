import React from 'react';
import '../css/Tracking.css';

export const Tracking = props => {

  return (
    
    <div>
      <h1>Track your order</h1>
      <div id='map-container'>
        <img src="/images/pangea.jpg" id='pangea' />
        <div id='bird-container'>
          <img src="/images/ptero.png" id='ptero'/>
          <img src="/images/chicken.png" id='chicken'/>
        </div>
      </div>
    </div>
  )
}

export default Tracking
