import './ListingCards.css';
import './AddOptionModal.css';
import React, { useState, useEffect } from "react";
import Listing from './Listing';

export default function LunchOptions() {
    const [listings, setListings] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    const [generateModal, setGenerateModal] = useState(false);
    const [addModal, setAddModal] = useState(false);
    const [restoInfo, setRestoInfo] = useState({
        name: "",
        address: "",
        phonenumber:"",
        link: "",
        vegan: false,
        pescetarian: false,
    });
    const [randomResto, setRandomResto] = useState({
        name: "",
        address: "",
        phonenumber:"",
        link: "",
        vegan: false,
        pescetarian: false,
    });
    const showRandomResto = async () => {
        const result = await fetch("/.netlify/functions/restaurant");
        const dbListings = Array.from(await result.json());
        const options = dbListings.filter(listing => !listing.went);
        const randomListing = options[Math.floor(Math.random() * options.length)];
        setRandomResto({
            name: randomListing.name,
            address: randomListing.address,
            phonenumber: randomListing.phone,
            link: randomListing.link,
            vegan: randomListing.vegan,
            pescetarian: randomListing.pescetarian,
        });
        setGenerateModal(true);
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
    }, [searchInput]);

    const handleAddModal = () => {
        setAddModal(!addModal);
    }
    const handleAddOption = (event) => {
       event.preventDefault();
       addListingFunc();
       // eslint-disable-next-line
       location.reload();
    }

    const handleChange = (event) => {
        setRestoInfo({...restoInfo, [event.target.name]: event.target.value});
    }
    const handleAdditionalInfo = (event) => {
        const isChecked = event.target.checked;
        setRestoInfo({...restoInfo, [event.target.name]: isChecked});
    }

    const updateWentForRandomResto = async () => {
        const updateRequest = await fetch("/.netlify/functions/restaurant", {
          method: "PATCH",
          body: JSON.stringify({
          name: randomResto.name,
          }),
        });
        console.log("UPDATE request status code", updateRequest.status);
        // eslint-disable-next-line
        location.reload();
    }

    const addListingFunc = async () => {
        const postRequest = await fetch("/.netlify/functions/restaurant", {
            method: "POST",
            body: JSON.stringify({
            name: restoInfo.name,
            address: restoInfo.address,
            phone: restoInfo.phonenumber,
            link: restoInfo.link,
            vegan: restoInfo.vegan,
            pescetarian: restoInfo.pescetarian,
            rating: 0,
            num_ratings: 0,
            upvotes: 0,
            downvotes: 0,
            went: false
            }),
        });
        console.log("post request: ", postRequest);
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
                            setSearchInput(e.target.value);}}
                    />
                </form>
            </div>
            <div className="listings">
                {(listings.filter((listing) => !listing.went))
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

            <div className="add-button-container">
                <button className="add-button" onClick={handleAddModal}>
                    <i className="fas fa-plus fa-2x"/>
                </button>
            </div>
        </div>

        { generateModal && (
            <div className="modal">
                <div className="modal-content">
                    {randomResto.link ? 
                        <a href={randomResto.link} target="_blank" rel="noreferrer" className="generate-title generate-title-haslink">
                            {randomResto.name}
                        </a> :
                        <div className="generate-title">{randomResto.name}</div>
                    }
                    <div className="generate-text address">{randomResto.address}</div>
                    <div className="generate-text phone">{randomResto.phonenumber}</div>
                    <div className="generate-details">
                        <div className="generate-dietary">
                            {randomResto.vegan ? <i className="fas fa-carrot fa-lg dietary-icons"/> : <div/>}
                            {randomResto.pescetarian ? <i className="fas fa-fish fa-lg"/> : <div/>}
                        </div>
                        <button onClick={updateWentForRandomResto} className="went-button">
                            <i className="fas fa-check fa-lg"/>
                        </button>
                    </div>
                    <button className="close-modal" onClick={()=>{setGenerateModal(false)}}>x</button>
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
                                    onChange={handleChange}
                                    minlength="3"
                                    required />
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
                            <div className="input-title">
                                <div className="add-modal-text">Menu Link</div>
                                <input 
                                    type="text" 
                                    className="input" 
                                    name="link" 
                                    placeholder="Add url"
                                    value={restoInfo.link}
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

