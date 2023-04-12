import './ListingCards.css';
import React, { useState } from "react";
import Listing from './Listing';

export default function LunchOptions(){
    const [generateModal, setGenerateModal] = useState(false);
    const toggleModal = () => {
        setGenerateModal(!generateModal);
    }
    const handleWent = () => {
        alert('went clicked');
    }

    //prepend body when modal is open
    if (generateModal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }

    return (
    <div className="container">
        <div className="listings-header">
            <div className="listings-title">Lunch Options</div>
            <button className="generate-button" onClick={toggleModal}>
                <i class="fas fa-sync-alt fa-lg"/>
            </button>
        </div>
        <div className="listing-container">
            <Listing></Listing>
            <Listing></Listing>
        </div>

        { generateModal && (
                <div className="modal">
                    <div className="modal-content">
                        <div className="generate-title">Saku</div>
                        <div className="generate-text address">1588 Robson St, Vancouver, BC V6G 2G5</div>
                        <div className="generate-text phone">(778) 379-5872</div>
                        <div className="generate-details">
                            <div className="generate-dietary">
                                <i class="fas fa-carrot fa-lg dietary-icons"/>
                                <i class="fas fa-fish fa-lg"/>
                            </div>
                            <button onClick={handleWent} className="went-button">
                                <i className="fas fa-check fa-lg"/>
                            </button>
                        </div>
                        <button className="close-modal" onClick={toggleModal}>x</button>
                    </div>
                </div> 
            )}

    </div>
    );
}

