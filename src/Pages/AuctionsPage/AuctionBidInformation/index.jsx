import './style.css';

function AuctionBidInformation() {
return (
<section className="AuctionBidInfo">
    <div className="AuctionBidInfo__header">
    Bid Information
    </div>
      <div className="AuctionBidInfo__details_item  AuctionBidInfo__details_item_status"><span>Bid Status: </span><span></span></div>
      <div className="AuctionBidInfo__details_item AuctionBidInfo__details_item_minBid"><span>Minimum Bid: </span><span>$ 400</span></div>
      
      <div className="AuctionBidInfo__details_item AuctionBidInfo__details_item_maxBid">
          <div className="AuctionBidInfo__details_item_currentBid"><span>Current Bid: </span><span><b>$0</b></span></div>
          <span className = 'AuctionBidInfo__details_item_maxBid_text'>Your Max Bid : </span > 
          <input className = 'AuctionBidInfo__input' type="text" placeholder='$ 400' />
          <button className='AuctionBidInfo__button AuctionBidInfo__button_bidnow'>Bid Now</button>
          <p className='AuctionBidInfo__price'>$3.400</p>
          <button className='AuctionBidInfo__button AuctionBidInfo__button_buynow'>Buy Now</button>
     </div>
    
</section>
)
}

export default AuctionBidInformation;