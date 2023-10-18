import './style.css';
import star from '../../../Assets/star.png'

function AuctionNavbar() {
    return (
        <div className="AuctionNavbar">
          <div className="AuctionNavbar__buttons">
            <div className="AuctionNavbar__buttons_mainButtons">
              <button className = 'AuctionNavbar__buttons_mainButtons_button AuctionNavbar__buttons_mainButtons_home'>Home</button>
              <button className = 'AuctionNavbar__buttons_mainButtons_button AuctionNavbar__buttons_mainButtons_calendar'>Auction Calendar</button>
              <button className = 'AuctionNavbar__buttons_mainButtons_button AuctionNavbar__buttons_mainButtons_saleList'>Sale List for Georgia</button>
              <button className = 'AuctionNavbar__buttons_mainButtons_button AuctionNavbar__buttons_mainButtons_auctionName'>2014 - BMW 3er Touring</button>
            </div>
            <div className="AuctionNavbar__buttons_prevnext">
              <button className="AuctionNavbar__buttons_prevnext_button disabled"> Prev item </button>
              <button className="AuctionNavbar__buttons_prevnext_button">Next item</button>
            </div>
          </div>
          <div className="AuctionNavbar__buttons_addtowatchlist">
            <button className = 'AuctionNavbar__buttons_addtowatchlist_button'><img src= {star} alt="star" /> Add To Watchlist</button>
          </div>
        </div>
    )
}

export default AuctionNavbar;
