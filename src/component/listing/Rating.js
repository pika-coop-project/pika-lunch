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
      <div className="dropdown">
        <button className="rating-dropdown">
          add rating
          <i class="fas fa-chevron-down fa-xs arrow-down-icon"/>
        </button>
        <div class="dropdown-content">
          <a href="#"><button className="rating-option" onClick={()=>{alert('clicked 1')}}>1</button></a>
          <a href="#"><button className="rating-option" onClick={()=>{alert('clicked 2')}}>2</button></a>
        </div>

      </div>
    </div>
  )
}

export default Rating