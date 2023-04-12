import React from 'react';
import RestaurantInfo from './listing/RestaurantInfo';
import Rating from './listing/Rating';
import Voting from './listing/Voting';
import styled from 'styled-components';

const Listing = ({ restaurantName, address, phoneNumber, isVegan, isPescatarian, isHistory, rating, upvotes, downvotes }) => {
    if (isHistory) {
        return 
        (<div>
          <RestaurantInfo 
              restaurantName={restaurantName} 
              address={address} 
              phoneNumber={phoneNumber} 
              isVegan={isVegan} 
              isPescatarian={isPescatarian} 
          />
          <Rating rating={rating} /> 
          </div>
        )
    } else {
        return 
        (<div>
          <RestaurantInfo 
              restaurantName={restaurantName} 
              address={address} 
              phoneNumber={phoneNumber} 
              isVegan={isVegan} 
              isPescatarian={isPescatarian} 
          />
          <Voting upvotes={upvotes} downvotes={downvotes} /> 
          </div>
        )
    }

}

export default Listing