import React from 'react';
import './Voting.css';

const Voting = ({ restaurantName, upvotes, downvotes }) => {

  return (
    <div className="voting-container">
      <div className="restaurant-name-and-voting">

        <div className="name-container">
        <div className="restaurant-name">{restaurantName}</div>
        <button className="went-listing-button" onClick={() =>(alert('upvoted'))}>
          <i class="fas fa-check fa-lg"/>
        </button>
      </div>

     
        <div className="votes">
          <button className="vote-button" onClick={() =>(alert('upvoted'))}>
            <i class="fas fa-thumbs-up fa-lg vote-icon"/>
          </button>
          <div className="votes">{upvotes}</div>
          <button className="vote-button" onClick={() =>(alert('downvoted'))}>
            <i class="fas fa-thumbs-down fa-lg vote-icon"/>
          </button>
          <div className="votes">{downvotes}</div>
        </div>
      </div>
    </div>
  )
}

export default Voting