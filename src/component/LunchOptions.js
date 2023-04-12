import './ListingCards.css';
import Listing from './Listing';

const LunchOptions = () => (
    <div className="container">
        <div className="listings-header">
            <div className="listings-title">Lunch Options</div>
            <button className="generate-button" onClick={()=>{alert('clicked: generate option')}}>
                <i class="fas fa-sync-alt fa-lg"/>
            </button>
        </div>
        <div className="listing-container">
            <Listing></Listing>
            <Listing></Listing>
        </div>

    </div>
);

export default LunchOptions;
