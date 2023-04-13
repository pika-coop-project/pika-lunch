import React from 'react';
import './Rating.css';
import star from '../../asset/img/star.svg';

const Rating = ({ restaurantName, rating }) => {

  return (
    <div className="rating-container">
      <div className="restaurant-name-and-rating">
        <p className="restaurant-name">{restaurantName}</p>
        <img src={star} className="star-icon" alt="star icon" />
        <p className="restaurant-rating">{rating}</p>
      </div>
      <div>
        <button className="rating-dropdown" onClick={()=>{alert('clicked add rating')}}>
          add rating v
        </button>
      </div>
    </div>
  )
}

export default Rating