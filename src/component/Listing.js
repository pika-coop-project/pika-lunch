import React from 'react';
import './Listing.css';
import RestaurantInfo from './listing/RestaurantInfo';
import Rating from './listing/Rating';
import Voting from './listing/Voting';

const Listing = ({ id, restaurantName="Restaurant Name", address="Street Address, Vancouver", phoneNumber="123-456-7890", isVegan=true, isPescetarian=true, isHistory, rating, numRatings, upvotes, downvotes, increment }) => {

    if (isHistory) {
        return (
        <div className="listing listing-flex">
            <Rating 
                restaurantName={restaurantName} 
                rating={rating} 
                numRatings={numRatings} 
                increment={increment} 
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
                increment={increment} 
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