import './ListingCards.css';
import React, { useState } from "react";
import Listing from './Listing';

export default function LunchHistory() {
    const [modal, setModal] = useState(false);
    const toggleModal = () => {
        setModal(!modal);
    }

    //prepend body when modal is open
    if (modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }

    return(
        <div className="container">
            <div className="listings-header">
                <div className="listings-title">Lunch History</div>
                <button className="generate-button" onClick={toggleModal}>
                    <i className="fas fa-sync-alt fa-lg"/>
                </button>
            </div>

            <div className="listing-container">
                <div className="searchbar-container">
                    <input type="text" className="searchbar" placeholder="Search.."/>
                </div>
                <div className="listings">
                    <Listing isHistory={true}></Listing>
                    <Listing isHistory={true}></Listing>
                    <Listing isHistory={true}></Listing>
                    <Listing isHistory={true}></Listing>
                </div>
            </div>

            { modal && (
                <div className="modal">
                    <div className="modal-content">
                        <div className="generate-text rating">
                            <i className="fas fa-star fa-sm star"/>
                            9.0
                        </div>
                        <div className="generate-title">Saku</div>
                        <div className="generate-text address">1588 Robson St, Vancouver, BC V6G 2G5</div>
                        <div className="generate-text phone">(778) 379-5872</div>

                        <div className="generate-dietary">
                            <i class="fas fa-carrot fa-lg dietary-icons"/>
                            <i class="fas fa-fish fa-lg"/>
                        </div>

                        <button className="close-modal" onClick={toggleModal}>x</button>
                    </div>
                </div> 
            )}
        </div>
    );
}
