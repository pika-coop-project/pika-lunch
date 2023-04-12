import React from 'react';

const Rating = ({ restaurantName, rating }) => {

  return (
    <div>
      <p className="listing-restaurant">{restaurantName}</p>
    </div>
  )
}

export default Rating