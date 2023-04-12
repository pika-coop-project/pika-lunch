import './LunchOptions.css';

const LunchOptions = () => (
    <div className="container">
        <div className="listings-header">
            <div className="listings-title">Lunch Options</div>
            <button className="generate-button" onClick={()=>{alert('clicked: generate option')}}>
                <i class="fas fa-sync-alt fa-2x"/>
            </button>
        </div>
        <div className="listing-container">

        </div>

    </div>
);

export default LunchOptions;
