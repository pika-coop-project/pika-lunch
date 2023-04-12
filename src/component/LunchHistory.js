import './LunchHistory.css';

const LunchHistory = () => (
    <div className="container">
        <div className="listings-header">
            <div className="listings-title">Lunch History</div>
            <button className="generate-button" onClick={()=>{alert('clicked: generate history')}}>
                <i class="fas fa-sync-alt fa-2x"/>
            </button>
        </div>
        <div className="listing-container">

        </div>

    </div>
);

export default LunchHistory;