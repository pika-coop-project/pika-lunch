import React from 'react';
import './RestaurantInfo.css';

const RestaurantInfo = ({ restaurantName, address, phoneNumber, isVegan, isPescatarian }) => {

  return (
    <div>
      <p className="listing-restaurant">{restaurantName}</p>
      <p>{address}</p>
      <p>{phoneNumber}</p>
    </div>
  )
}

export default RestaurantInfo