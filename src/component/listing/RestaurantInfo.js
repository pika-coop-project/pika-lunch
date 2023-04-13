import React from 'react';
import './RestaurantInfo.css';
import fish from '../../asset/img/fish.svg';
import carrot from '../../asset/img/carrot.svg';

const RestaurantInfo = ({ address, phoneNumber, isVegan, isPescatarian }) => {

  return (
    <div className="listing-info">
      <div>
        <p>{address}</p>
        <p className="phone-number">{phoneNumber}</p>
      </div>
      <div>
        <img src={carrot} className="carrot-icon" alt="carrot icon" />
        <img src={fish} className="fish-icon" alt="fish icon" />
      </div>
    </div>
  )
}

export default RestaurantInfo