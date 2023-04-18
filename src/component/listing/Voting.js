import React from 'react';
import './Voting.css';

export default function Voting ({ restaurantName, upvotes, downvotes }) {

  const DeleteListingFunc = async () => {
    const deleteRequest = await fetch("/.netlify/functions/restaurant", {
        method: "DELETE",
        body: JSON.stringify({
        name: restaurantName,
        }),
    });
    console.log("DELETE request status code", deleteRequest.status);
    // eslint-disable-next-line
    location.reload();
  }

  const UpdateWentFunc = async () => {
    const updateRequest = await fetch("/.netlify/functions/restaurant", {
      method: "PATCH",
      body: JSON.stringify({
      name: restaurantName,
      went: true,
      }),
    });
  
    console.log("UPDATE request status code", updateRequest.status);
    // eslint-disable-next-line
    location.reload();
  }

  return (
    <div className="voting-container">
      <div className="restaurant-name-and-voting">
        <div className="name-container">
        <div className="restaurant-name">{restaurantName}</div>
        <button className="went-listing-button" onClick={UpdateWentFunc}>
          <i className="fas fa-check fa-lg"/>
        </button>
      </div>

     
        <div className="votes">
          <button className="vote-button" onClick={() =>(alert('upvoted'))}>
            <i className="fas fa-thumbs-up fa-lg vote-icon"/>
          </button>
          <div className="votes">{upvotes}</div>
          <button className="vote-button" onClick={() =>(alert('downvoted'))}>
            <i className="fas fa-thumbs-down fa-lg vote-icon"/>
          </button>
          <div className="votes">{downvotes}</div>
          <button className="delete-listing-button" onClick={DeleteListingFunc}>x</button>
        </div>
      </div>
    </div>
  );
}

