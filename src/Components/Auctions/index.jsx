import './style.css';

const AUCTIONS = [
    {
     time: '11:00 PM',
     name: 'Georgia',
     items: '67',
    },

    {
    time: '11:00 PM',
    name: 'Georgia',
    items: '67',
    },

    {
    time: '11:00 PM',
    name: 'Georgia',
    items: '67',
    }
]

function Auctions() {
    return (
        <section className = 'container auctions'>
            <div className="auctions__heading">
                <h3>Today's Auctions</h3>
            </div>
            <div className="auctionsTable">
            <div className = 'auctionsTable-header'>
                <div className = 'auctionsTable__headerTitle'>Sale Time </div>
                <div className = 'auctionsTable__headerTitle'>Sale Name</div>
                <div className = 'auctionsTable__headerTitle'>Items</div>
                <div className = 'auctionsTable__headerTitle'>Auctions</div>
                </div>
             
                {AUCTIONS.map((auction) => {
                return (
                <div className="auctions__grid-body">
                <div className = 'auctions__item'> {auction.time} <span className="auctions__live">Live Now</span></div>
                <div className = 'auctions__item'>{auction.name}</div>
                <div className = 'auctions__item'>{auction.items}</div>
                <div className = 'auctions__item auctions__lastElem'> 
                    <button className = 'auctions__button'>Join Auction</button>
                    <a className ='auctions__listLink'>View Sale List</a>
                </div>
                </div>
                )
                })}
                </div>

<div className="auctionsMobile__container">  
{AUCTIONS.map((auction) => {
                return (
                <div className="auctionsMobile">
                <div className="auctionsMobile__content">
                <div className = 'auctionsMobile__item'> Sale Time: <b>{auction.time}</b> <span className="auctions__live">Live Now</span></div>
                <div className = 'auctionsMobile__item'>Sale Name: <b>{auction.name}</b></div>
                <div className = 'auctionsMobile__item'>Items: <b>{auction.items}</b></div>
                </div>
                <div className = 'auctionsMobile__item'> 
                    <button className = 'auctionsMobile__button'>Join Auction</button>
                    <a className ='auctionsMobile__listLink'>View Sale List</a>
                </div>
                </div>
                )
                })}
</div>


    

        </section>
    )
}

export default Auctions;
