import React from 'react';
import './Listing.css';
import RestaurantInfo from './listing/RestaurantInfo';
import Rating from './listing/Rating';
import Voting from './listing/Voting';

const Listing = ({ restaurantName="Restaurant Name", address="Address", phoneNumber="123-456-7890", isVegan=true, isPescatarian=true, isHistory, rating, upvotes, downvotes }) => {
    if (isHistory) {
        return (
        <div className="listing listing-flex">
            <Rating restaurantName={restaurantName} rating={rating} />
            <RestaurantInfo  
              address={address} 
              phoneNumber={phoneNumber} 
              isVegan={isVegan} 
              isPescatarian={isPescatarian} 
            /> 
        </div>)
    } else {
        return (
        <div className="listing listing-flex">
            <Voting restaurantName={restaurantName} upvotes={upvotes} downvotes={downvotes} />
            <RestaurantInfo  
              address={address} 
              phoneNumber={phoneNumber} 
              isVegan={isVegan} 
              isPescatarian={isPescatarian} 
            /> 
        </div>
        )
    }

}

export default Listing