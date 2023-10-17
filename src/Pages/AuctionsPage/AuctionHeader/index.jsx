import './style.css';

function AuctionHeader() {
    return (
        <div className = 'container auction__header'>
            <h1 className="auction__title">
            2014 - BMW 3er Touring
            </h1>
            <div className="auction__details">
                <span>Lot: <b>123456</b></span> 
                <span>Sale Location: <b>Georgia</b></span> 
                <span>Sale Date: <b>Tomorrow/May 28/2020 - 04:00 AM</b></span> 
            </div>
        </div>
    )
};

export default AuctionHeader;