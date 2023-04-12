import React from 'react';

const Voting = ({ restaurantName, upvotes, downvotes }) => {

  return (
    <div>
      <p className="listing-restaurant">{restaurantName}</p>
    </div>
  )
}

export default Voting