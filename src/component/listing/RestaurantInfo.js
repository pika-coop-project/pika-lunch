import React from 'react';
import './RestaurantInfo.css';

const RestaurantInfo = ({ address, phoneNumber, isVegan, isPescatarian }) => {

  return (
    <div className="listing-info">
      <div>
        <div className="address">{address}</div>
        <div className="phone-number">{phoneNumber}</div>
      </div>
      <div className="dietary-icons">
        <i class="fas fa-carrot fa-lg dietary-icon"/>
        <i class="fas fa-fish fa-lg dietary-icon"/>
      </div>
    </div>
  )
}

export default RestaurantInfo