import './ListingCards.css';
import './AddOptionModal.css';
import React, { useState } from "react";
import Listing from './Listing';

export default function LunchOptions(){
    const [generateModal, setGenerateModal] = useState(false);
    const [addModal, setAddModal] = useState(false);

    const toggleModal = () => {
        setGenerateModal(!generateModal);
    }
    const handleWent = () => {
        alert('went clicked');
    }

    const handleAddModal = () => {
        setAddModal(!addModal);
    }
    const handleAddOption = () => {
       alert('adding new option !!!!');
    }

    //prepend body when modal is open
    if (generateModal || addModal) {
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
            <div className="searchbar-container">
                <input type="text" className="searchbar" placeholder="Search.."/>
            </div>
            <div className="listings">
                <Listing></Listing>
                <Listing></Listing>
                <Listing></Listing>
                <Listing></Listing>
            </div>

            <div className="add-button-container">
                <button className="add-button" onClick={handleAddModal}>
                    <i class="fas fa-plus fa-2x"/>
                </button>
            </div>
            
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

        { addModal && (
            <div className="modal">
                <div className="modal-content">
                    <div className="add-modal-title">New Lunch Option</div>
                    <div className="add-modal-info">

                        <div className="subheader-container">
                            <div className="add-modal-subheader">Restaurant Info</div>
                            <div className="input-title">
                                <div className="add-modal-text">Name</div>
                                <input type="text" className="input" placeholder="Insert Name"/>
                            </div>
                            <div className="input-title">
                                <div className="add-modal-text">Address</div>
                                <input type="text" className="input" placeholder="Insert Address"/>
                            </div>
                            <div className="input-title">
                                <div className="add-modal-text">Phone #</div>
                                <input type="text" className="input" placeholder="Insert Phone Number"/>
                            </div> 
                        </div>

                        <div class="vl"></div>

                        <div className="subheader-container">
                            <div className="add-modal-subheader">Additional Info</div>
                            <div className="input-title">
                                <input type="checkbox" className="checkbox"/>
                                <div className="add-modal-text">vegan</div>
                            </div> 
                            <div className="input-title">
                                <input type="checkbox"/>
                                <div className="add-modal-text">pescetarian</div>
                            </div> 
                        </div>
                        
                    </div>
                    <button className="close-modal" onClick={handleAddModal}>x</button>

                    <div className="cancel-add-buttons">
                        <button className="cancel-modal-button" onClick={handleAddModal}>cancel</button>
                        <button className="add-modal-button" onClick={handleAddOption}>add</button>
                    </div>
                </div>
            </div> 
        )}

    </div>
    );
}

