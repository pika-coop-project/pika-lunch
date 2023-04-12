import React from 'react';
import './Rating.css';

const Rating = ({ restaurantName, rating }) => {

  return (
    <div>
      <p className="restaurant-name">{restaurantName}</p>
    </div>
  )
}

export default Rating