import React from 'react';
import './RestaurantInfo.css';

const RestaurantInfo = ({ restaurantName, address, phoneNumber, isVegan, isPescatarian }) => {

  return (
    <div>
      <p>{address}</p>
      <p>{phoneNumber}</p>
    </div>
  )
}

export default RestaurantInfo