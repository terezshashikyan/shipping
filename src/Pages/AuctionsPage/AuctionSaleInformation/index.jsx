import './style.css';

function AuctionSaleInformation() {
return (
<section className="AuctionSaleInfo">
    <div className="AuctionSaleInfo__header">
    Sale Information
    </div>
      <div className="AuctionSaleInfo__details  AuctionSaleInfo__details_location"><span>Location: </span><span>Georgia</span></div>
      <div className="AuctionSaleInfo__details AuctionSaleInfo__details_address"><span>Address: </span><span>45, Kote Aphkhazi Str, 45 
Kote Afkhazi St, Tbilisi 0105</span></div>
      <div className="AuctionSaleInfo__details AuctionSaleInfo__details_mail"><span>Mail: </span><span>globalshipping@gmail.com</span></div>
      <div className="AuctionSaleInfo__details AuctionSaleInfo__details_number"><span>Ph. Number: </span><span>+995 350 223 334</span></div>
      <div className="AuctionSaleInfo__details AuctionSaleInfo__details_timeLeft"><span>Time Left: </span><span>0d 24h 1min</span></div>
</section>
)
}

export default AuctionSaleInformation;