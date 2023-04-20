import './ListingCards.css';
import React, { useState, useEffect } from "react";
import Listing from './Listing';

export default function LunchHistory() {

    // sample functions:
    // const testGetFunc = async () => {
    //     const newGetRequest = await fetch("/.netlify/functions/restaurant");
    //     const newListJson = await newGetRequest.json();
        
    //     console.log("GET request new result", newListJson);
    // }

    // const testPostFunc = async () => {
    //     const postRequest = await fetch("/.netlify/functions/restaurant", {
    //         method: "POST",
    //         body: JSON.stringify({
    //         name: "Saku1",
    //         address: "101 downtown",
    //         }),
    //     });
        
    //     console.log("POST request status code", postRequest.status);
    // }

    // const testUpdateFunc = async () => {
    //     const updateRequest = await fetch("/.netlify/functions/restaurant", {
    //         method: "PATCH",
    //         body: JSON.stringify({
    //         name: "Saku1",
    //         address: "101 downtown",
    //         }),
    //     });
        
    //     console.log("UPDATE request status code", updateRequest.status);
    // }

    // const testDeleteFunc = async () => {
    //     const deleteRequest = await fetch("/.netlify/functions/restaurant", {
    //         method: "DELETE",
    //         body: JSON.stringify({
    //         name: "Saku1",
    //         address: "101 downtown",
    //         }),
    //     });
        
    //     console.log("DELETE request status code", deleteRequest.status);
    // }

    const [listings, setListings] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    const [randomResto, setRandomResto] = useState({
        name: "",
        address: "",
        phonenumber:"",
        link: "",
        rating: 0,
        vegan: false,
        pescetarian: false,
    });
    const [modal, setModal] = useState(false);
    const showRandomResto = async () => {
        const result = await fetch("/.netlify/functions/restaurant");
        const dbListings = Array.from(await result.json());
        const history = dbListings.filter(listing => listing.went);
        const randomListing = history[Math.floor(Math.random() * history.length)];
        setRandomResto({
            name: randomListing.name,
            address: randomListing.address,
            phonenumber: randomListing.phone,
            rating: randomListing.rating,
            vegan: randomListing.vegan,
            pescetarian: randomListing.pescetarian,
            link: randomListing.link
        });
        setModal(true);
    }

    const searchListings = async () => {
        const result = await fetch("/.netlify/functions/restaurant");
        const dbListings = await result.json();
        const searchResults = dbListings.filter(listing => (listing.name.toLowerCase()).includes(searchInput.toLowerCase()));
        setListings(searchResults);
    }

    const getAndSetListingsFromDB = async () => {
        const result = await fetch("/.netlify/functions/restaurant");
        const dbListings = await result.json();
        setListings(Array.from(dbListings));
    }

    useEffect(() => {
        if (searchInput.length === 0) {
            getAndSetListingsFromDB();
        }
        // eslint-disable-next-line
    }, [searchInput]);

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
                <button className="generate-button" onClick={showRandomResto}>
                    <i className="fas fa-sync-alt fa-lg"/>
                </button>
            </div>

            <div className="listing-container">
                <div className="searchbar-container">
                    <form 
                        onSubmit={(e => {
                            e.preventDefault();
                            searchListings();
                        })}>
                        <input 
                            type="text"
                            className="searchbar" 
                            placeholder="Search.."
                            value={searchInput}
                            onChange={e => {
                                setSearchInput(e.target.value);
                                console.log(searchInput);}}
                        />
                    </form>
                </div>
                <div className="listings">
                    {(listings.filter((listing) => listing.went))
                                .map((item) => 
                                    <Listing 
                                        key={item._id}
                                        id={item._id}
                                        restaurantName={item.name}
                                        address={item.address} 
                                        phoneNumber={item.phone}
                                        isPescetarian={item.pescetarian}
                                        isVegan={item.vegan}
                                        isHistory={item.went}
                                        rating={item.rating}
                                        numRatings={item.num_ratings}
                                        upvotes={item.upvotes}
                                        downvotes={item.downvotes}
                                        link={item.link}
                                    />
                    )}
                </div>
                
            </div>
            

            { modal && (
                <div className="modal">
                    <div className="modal-content">
                        <div className="generate-text rating">
                            <i className="fas fa-star fa-sm star"/>
                            {Math.round(randomResto.rating*10)/10}
                        </div>
                        {randomResto.link ? 
                            <a href={randomResto.link} target="_blank" rel="noreferrer" className="generate-title generate-title-haslink">
                                {randomResto.name}
                            </a> :
                            <div className="generate-title">{randomResto.name}</div>
                        }
                        <div className="generate-text address">{randomResto.address}</div>
                        <div className="generate-text phone">{randomResto.phonenumber}</div>

                        <div className="generate-dietary">
                            {randomResto.vegan ? <i className="fas fa-carrot fa-lg dietary-icons"/> : <div/>}
                            {randomResto.pescetarian ? <i className="fas fa-fish fa-lg"/> : <div/>}
                        </div>

                        <button className="close-modal" onClick={()=>{setModal(false)}}>x</button>
                    </div>
                </div> 
            )}
        </div>
    );
}
