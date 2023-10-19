import './style.css';


function AuctionInformation() {
    return (
        <div className = 'AuctionInfo'>
            <div className="AuctionInfo__buttons">
              <div role = 'button' className="AuctionInfo__button AuctionInfo__button_lot"><span>Lot: </span><span>EA001533</span></div>
              <div role = 'button' className="AuctionInfo__button AuctionInfo__button_moreinfo"><span>More Information</span></div>
            </div> 
            <div className="AuctionInfo__lot">
                <div className="AuctionInfo__lot_item AuctionInfo__lot_item_vin"><span>Vin: </span><span></span>1GNCS18Z3M0115561</div>
                <div className="AuctionInfo__lot_item AuctionInfo__lot_item_odometer"><span>Odometer: </span><span>104.164 - Actual</span></div>
                <div className="AuctionInfo__lot_item AuctionInfo__lot_item_highlights"><span>Highlights: </span><span>Run and Drive</span></div>
                <div className="AuctionInfo__lot_item AuctionInfo__lot_item_color"><span>Color: </span><span>Silver</span></div>
                <div className="AuctionInfo__lot_item AuctionInfo__lot_item_enginetype"><span>Engine Type: </span><span>1.6 L 4</span></div>
                <div className="AuctionInfo__lot_item AuctionInfo__lot_item_cylinders"><span>Cylinders: </span><span>4</span></div>
                <div className="AuctionInfo__lot_item AuctionInfo__lot_item_drive"><span>Drive: </span><span>Front - wheel Drive</span></div>
                <div className="AuctionInfo__lot_item AuctionInfo__lot_item_fuel"><span>Fuel: </span><span>Gas</span></div>
                <div className="AuctionInfo__lot_item AuctionInfo__lot_item_keys"><span>Keys: </span><span>Yes</span></div>
                <div role = 'button' className="AuctionInfo__lot_item AuctionInfo__lot_item_viewLessButton"> ^ View Less</div>
            </div>
        </div>
    )
}

export default AuctionInformation;