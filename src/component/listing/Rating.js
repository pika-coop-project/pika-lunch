import React from 'react';
import './Rating.css';
import star from '../../asset/img/star.svg';

const Rating = ({ restaurantName, rating }) => {

  return (
    <div className="rating-container">
      <div className="restaurant-name-and-rating">
        <div className="restaurant-name">{restaurantName}</div>
        <img src={star} className="star-icon" alt="star icon" />
        <div className="restaurant-rating-number">{rating}</div>
      </div>
      <div>
        <button className="rating-dropdown" onClick={()=>{alert('clicked add rating')}}>
          add rating
          <i class="fas fa-chevron-down fa-xs arrow-down-icon"/>
        </button>

      </div>
    </div>
  )
}

export default Rating