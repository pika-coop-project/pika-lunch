import React from 'react';
import './Voting.css';
import went from '../../asset/img/went.svg';
import thumbsup from '../../asset/img/thumbs-up.svg';
import thumbsdown from '../../asset/img/thumbs-down.svg';

const Voting = ({ restaurantName, upvotes, downvotes }) => {

  return (
    <div className="voting-container">
      <div className="restaurant-name-and-voting">
        <p className="restaurant-name">{restaurantName}</p>
        <img src={went} className="went-icon" alt="already went icon" onClick={()=>alert("clicked already went")} />
      </div>
      <div className="restaurant-name-and-voting">
        <img src={thumbsup} className="thumbsup-icon" alt="thumbsup icon" />
        <p className="votes">{upvotes}</p>
        <img src={thumbsdown} className="thumbsdown-icon" alt="thumbsdown icon" />
        <p className="votes">{downvotes}</p>
      </div>
    </div>
  )
}

export default Voting