import './ListingCards.css';
import React, { useState, useEffect } from "react";
import Listing from './Listing';

export default function LunchHistory() {

    const getListingsFromDB = async () => {
        const result = await fetch("/.netlify/functions/restaurant");
        const listings = await result.json();
        console.log("Listings from DB", listings);
        return listings;
    }

    // sample functions:
    const testGetFunc = async () => {
        const newGetRequest = await fetch("/.netlify/functions/restaurant");
        const newListJson = await newGetRequest.json();
        
        console.log("GET request new result", newListJson);
    }

    const testPostFunc = async () => {
        const postRequest = await fetch("/.netlify/functions/restaurant", {
            method: "POST",
            body: JSON.stringify({
            name: "Saku1",
            address: "101 downtown",
            }),
        });
        
        console.log("POST request status code", postRequest.status);
    }

    const testUpdateFunc = async () => {
        const updateRequest = await fetch("/.netlify/functions/restaurant", {
            method: "PATCH",
            body: JSON.stringify({
            name: "Saku1",
            address: "101 downtown",
            }),
        });
        
        console.log("UPDATE request status code", updateRequest.status);
    }

    const testDeleteFunc = async () => {
        const deleteRequest = await fetch("/.netlify/functions/restaurant", {
            method: "DELETE",
            body: JSON.stringify({
            name: "Saku1",
            address: "101 downtown",
            }),
        });
        
        console.log("DELETE request status code", deleteRequest.status);
    }

    const [listings, setListings] = useState([]);
    const [modal, setModal] = useState(false);
    const toggleModal = () => {
        setModal(!modal);
    }

    useEffect(() => {
        console.log("use effect!!");
        const listings = getListingsFromDB();
        console.log("use effect listings", listings);
        setListings(Array.from(listings));
        console.log("after setting listings", listings);
    }, []);

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
                <button className="generate-button" onClick={testPostFunc}>
                    add
                </button>
                <button className="generate-button" onClick={testGetFunc}>
                    view
                </button>
                <button className="generate-button" onClick={testUpdateFunc}>
                    update to went
                </button>
                <button className="generate-button" onClick={testDeleteFunc}>
                    delete
                </button>
            </div>

            <div className="listing-container">
                <div className="searchbar-container">
                    <input type="text" className="searchbar" placeholder="Search.."/>
                </div>
                <div className="listings">
                    {console.log("in div:", listings)}
                    {
                    (listings.filter((listing) => listing.went))
                                .map((item) => 
                                    <Listing 
                                        key={item.address}
                                        restaurantName={item.name}
                                        address={item.address} 
                                        phoneNumber={item.phone}
                                        isPescatarian={item.pescatarian}
                                        isVegan={item.vegan}
                                        isHistory={item.went}
                                        rating={item.rating}
                                        upvotes={item.upvotes}
                                        downvotes={item.downvotes}
                                    />
                    )}
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
                            <i className="fas fa-carrot fa-lg dietary-icons"/>
                            <i className="fas fa-fish fa-lg"/>
                        </div>

                        <button className="close-modal" onClick={toggleModal}>x</button>
                    </div>
                </div> 
            )}
        </div>
    );
}
