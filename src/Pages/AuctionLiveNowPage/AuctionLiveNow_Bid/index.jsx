import './style.css';
import UAE from '../../../Assets/UAE.png';
import icon1 from '../../../Assets/icon1.png';
import icon2 from '../../../Assets/icon2.png';
import volume from '../../../Assets/volume.png';

const PREVIOUS_BIDS = [
    {
        img: icon2,
        country: 'Armenia',
        bidPrice: '1700$',
    },
]

function AuctionLiveNow_Bid() {
    return (
        <section className="AuctionLiveNow__bid">
          <div className="AuctionLiveNow__bid_circle">
          <div className="AuctionLiveNow__bid_outerCircle">
            <div className="AuctionLiveNow__bid_innerCircle">
                <img src={UAE} alt='UAE' />
                <span className = 'AuctionLiveNow__bid_subtitle'>UAE</span>
                <span className = 'AuctionLiveNow__bid_priceTag'>$ 1700</span>
                <span className = 'AuctionLiveNow__bid_subtitle'>Bid!</span>
            </div>
          </div>
          </div>

          <div className="AuctionLiveNow__bid_price">
            <div className="AuctionLiveNow__bid_priceTag AuctionLiveNow__bid_price_add">+</div>
            <div className = 'AuctionLiveNow__price_holder AuctionLiveNow__bid_priceTag'>$ 1700</div>
            <div className="AuctionLiveNow__bid_priceTag AuctionLiveNow__bid_price_reduce">-</div>
          </div>

          <button className="AuctionLiveNow__bid_bidButton">Bid</button>
          <p className = 'AuctionLiveNow__bid_priceTag'>$ 1800</p>
          <button className="AuctionLiveNow__bid_buynowButton">Buy It Now</button>

          <div className="AuctionLiveNow__bid_previousBids">
            <div className="AuctionLiveNow__bid_previousBids_header">
                Previous Bids
            </div>
            <div className="AuctionLiveNow__bid_previousBids_body">
                {PREVIOUS_BIDS.map((bid) => {
                    return <div className='AuctionLiveNow__bid_previousBids_body_item'>
                        <img className='AuctionLiveNow__bid_previousBids_body_item_img' src= {bid.img} alt={bid.img} />
                        <div>
                        <p className = 'AuctionLiveNow__bid_subtitle'>{bid.country}</p>
                        <p  className = 'AuctionLiveNow__bid_subtitle'>{bid.bidPrice}</p>
                        </div>
            </div>
                })}
            </div>
          </div>

        </section>
    )
}

export default AuctionLiveNow_Bid;