import React from 'react';
import './Rating.css';
import star from '../../asset/img/star.svg';

export default function Rating ({ id, restaurantName, rating, numRatings }) {

  const DeleteListingFunc = async () => {
    const deleteRequest = await fetch("/.netlify/functions/restaurant", {
        method: "DELETE",
        body: JSON.stringify({
        id: id,
        name: restaurantName,
        }),
    });
    
    console.log("DELETE request status code", deleteRequest.status);
    // eslint-disable-next-line
    //location.reload();
  }

  const updateRating = async (newRating) => {
    const newNumRating = numRatings + 1;
    const newAvgRating = (rating * numRatings + newRating) / newNumRating;

    const updateRequest = await fetch("/.netlify/functions/restaurant", {
        method: "PATCH",
        body: JSON.stringify({
        name: restaurantName,
        rating: newAvgRating,
        numRatings: newNumRating,
        }),
    });
    console.log("UPDATE rating status code", updateRequest.status);
    // eslint-disable-next-line
    location.reload();
}

  return (
    <div className="rating-container">
      <div className="restaurant-name-and-rating">
        <div className="restaurant-name">{restaurantName}</div>
        <img src={star} className="star-icon" alt="star icon" />
        <div className="restaurant-rating-number">{Math.round(rating*10)/10}</div>
      </div>
      <div className="addRating-close">
        <div className="dropdown">
          <button className="rating-dropdown">
            add rating
            <i className="fas fa-chevron-down fa-xs arrow-down-icon"/>
          </button>
          <div className="dropdown-content">
            <button className="rating-option" onClick={()=>{updateRating(1)}}>1</button>
            <button className="rating-option" onClick={()=>{updateRating(2)}}>2</button>
            <button className="rating-option" onClick={()=>{updateRating(3)}}>3</button>
            <button className="rating-option" onClick={()=>{updateRating(4)}}>4</button>
            <button className="rating-option" onClick={()=>{updateRating(5)}}>5</button>
          </div>
        </div>
        <button className="delete-listing-button" onClick={DeleteListingFunc}>x</button>
      </div>
    </div>
  );
}