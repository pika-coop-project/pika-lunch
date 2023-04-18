import './ListingCards.css';
import './AddOptionModal.css';
import React, { useState } from "react";
import Listing from './Listing';

export default function LunchOptions(){
    const [generateModal, setGenerateModal] = useState(false);
    const [addModal, setAddModal] = useState(false);
    const [restoInfo, setRestoInfo] = useState({
        name: "",
        address: "",
        phonenumber:"",
        vegan: false,
        pescetarian: false,
    });

    const toggleModal = () => {
        setGenerateModal(!generateModal);
    }
    const handleWent = () => {
        alert('went clicked');
    }

    const handleAddModal = () => {
        setAddModal(!addModal);
    }
    const handleAddOption = (event) => {
       event.preventDefault();
       testPostFunc();
       setRestoInfo({ name: "", address: "", phonenumber: "", vegan: false, pescetarian: false });
       setAddModal(!addModal);
    }

    const handleChange = (event) => {
        setRestoInfo({...restoInfo, [event.target.name]: event.target.value});
    }
    const handleAdditionalInfo = (event) => {
        setRestoInfo({...restoInfo, [event.target.name]: true});
    }

    const testPostFunc = async () => {
        const postRequest = await fetch("/.netlify/functions/restaurant", {
            method: "POST",
            body: JSON.stringify({
            name: restoInfo.name,
            address: restoInfo.address,
            phonenumber: restoInfo.phonenumber,
            vegan: restoInfo.vegan,
            pescetarian: restoInfo.pescetarian,
            }),
        });
        
        console.log("POST request status code", postRequest.status);
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
                <i className="fas fa-sync-alt fa-lg"/>
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
                    <i className="fas fa-plus fa-2x"/>
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
                            <i className="fas fa-carrot fa-lg dietary-icons"/>
                            <i className="fas fa-fish fa-lg"/>
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
                                <input 
                                    type="text" 
                                    className="input" 
                                    name="name" 
                                    placeholder="Insert Name"
                                    value={restoInfo.name}
                                    onChange={handleChange}/>
                            </div>
                            <div className="input-title">
                                <div className="add-modal-text">Address</div>
                                <input 
                                    type="text" 
                                    className="input" 
                                    name="address" 
                                    placeholder="Insert Address"
                                    value={restoInfo.address}
                                    onChange={handleChange}/>
                            </div>
                            <div className="input-title">
                                <div className="add-modal-text">Phone #</div>
                                <input 
                                    type="text" 
                                    className="input" 
                                    name="phonenumber" 
                                    placeholder="Insert Phone Number"
                                    value={restoInfo.phonenumber}
                                    onChange={handleChange}/>
                            </div> 
                        </div>

                        <div className="vl"></div>

                        <div className="subheader-container">
                            <div className="add-modal-subheader">Additional Info</div>
                            <div className="input-title">
                                <input 
                                    type="checkbox" 
                                    className="checkbox"
                                    name="vegan" 
                                    value={restoInfo.vegan}
                                    onChange={handleAdditionalInfo}/>
                                <div className="add-modal-text">vegan</div>
                            </div> 
                            <div className="input-title">
                                <input 
                                    type="checkbox"
                                    name="pescetarian" 
                                    value={restoInfo.pescetarian}
                                    onChange={handleAdditionalInfo}/>
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

