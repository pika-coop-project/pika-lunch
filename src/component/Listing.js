import React from 'react';
import './Listing.css';
import RestaurantInfo from './listing/RestaurantInfo';
import Rating from './listing/Rating';
import Voting from './listing/Voting';

const Listing = ({ key, restaurantName, address, phoneNumber, isVegan, isPescetarian, isHistory, rating, numRatings, upvotes, downvotes }) => {
    console.log("listing key->", key);
    if (isHistory) {
        return (
        <div className="listing listing-flex">
            <Rating
                key={key}
                restaurantName={restaurantName} 
                rating={rating} 
                numRatings={numRatings}
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
                key={key}
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