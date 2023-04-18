import React from 'react';
import './RestaurantInfo.css';

const RestaurantInfo = ({ address, phoneNumber, isVegan, isPescetarian }) => {

  return (
    <div className="listing-info">
      <div>
        <div className="address">{address}</div>
        <div className="phone-number">{phoneNumber}</div>
      </div>
      <div className="dietary-icons">
        {isVegan ? <i className="fas fa-carrot fa-lg dietary-icon"/> : <div/>}
        {isPescetarian ? <i className="fas fa-fish fa-lg dietary-icon"/> : <div/>}
      </div>
    </div>
  )
}

export default RestaurantInfo