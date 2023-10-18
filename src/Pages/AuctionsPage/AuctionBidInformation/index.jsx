import './style.css';

function AuctionBidInformation() {
return (
<section className="AuctionBidInfo">
    <div className="AuctionBidInfo__header">
    Bid Information
    </div>
    <div className="AuctionBidInfo__details">
      <div className="AuctionBidInfo__details_item  AuctionBidInfo__details_item_location"><span>Location: </span><span>Georgia</span></div>
      <div className="AuctionBidInfo__details_item AuctionBidInfo__details_item_address"><span>Address: </span><span>45, Kote Aphkhazi Str, 45 
Kote Afkhazi St, Tbilisi 0105</span></div>
      <div className="AuctionBidInfo__details_item AuctionBidInfo__details_item_mail"><span>Mail: </span><span>globalshipping@gmail.com</span></div>
      <div className="AuctionBidInfo__details_item AuctionBidInfo__details_item_number"><span>Ph. Number: </span><span>+995 350 223 334</span></div>
      <div className="AuctionBidInfo__details_item AuctionBidInfo__details_item_timeLeft"><span>Time Left: </span><span>0d 24h 1min</span></div>
    </div>
    <div className="AuctionBidInfo__input_container">
   $ <input className = 'AuctionBidInfo__input' type="text" placeholder='400' />
    </div>
    <button className='AuctionBidInfo__button AuctionBidInfo__button_bidnow'>Bid Now</button>
    <p className='AuctionBidInfo__price'>$3.400</p>
    <button className='AuctionBidInfo__button AuctionBidInfo__button_buynow'>Buy Now</button>
</section>
)
}

export default AuctionBidInformation;