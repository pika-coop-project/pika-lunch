import './ListingCards.css';
import Listing from './Listing';

const LunchHistory = () => (
    <div className="container">
        <div className="listings-header">
            <div className="listings-title">Lunch History</div>
            <button className="generate-button" onClick={()=>{alert('clicked: generate history')}}>
                <i class="fas fa-sync-alt fa-lg"/>
            </button>
        </div>
        <div className="listing-container">
            <Listing></Listing>
            <Listing></Listing>
        </div>

    </div>
);

export default LunchHistory;
