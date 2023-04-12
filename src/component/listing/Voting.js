import React from 'react';
import './Voting.css';

const Voting = ({ restaurantName, upvotes, downvotes }) => {

  return (
    <div>
      <p className="restaurant-name">{restaurantName}</p>
    </div>
  )
}

export default Voting