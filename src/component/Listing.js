import React from 'react';
import './Listing.css';
import RestaurantInfo from './listing/RestaurantInfo';
import Rating from './listing/Rating';
import Voting from './listing/Voting';

const Listing = ({ id, restaurantName, address, phoneNumber, isVegan, isPescetarian, isHistory, rating, numRatings, upvotes, downvotes, link }) => {
    if (isHistory) {
        return (
        <div className="listing listing-flex">
            <Rating
                id={id}
                restaurantName={restaurantName} 
                rating={rating} 
                numRatings={numRatings}
                link={link}
            />
            <RestaurantInfo  
              address={address} 
              phoneNumber={phoneNumber} 
              isVegan={isVegan} 
              isPescetarian={isPescetarian} 
            /> 
        </div>)
    } else {
        return (
        <div className="listing listing-flex">
            <Voting 
                id={id}
                restaurantName={restaurantName} 
                upvotes={upvotes} 
                downvotes={downvotes}
            />
            <RestaurantInfo  
              address={address} 
              phoneNumber={phoneNumber} 
              isVegan={isVegan} 
              isPescetarian={isPescetarian} 
            /> 
        </div>
        )
    }

}

export default Listing