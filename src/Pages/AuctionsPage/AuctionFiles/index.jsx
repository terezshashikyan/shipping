import './style.css';

function AuctionFiles() {
    return (
        <div className="AuctionInfo__files">
                <div className="AuctionInfo__files_header">
                    Files
                </div>
                <div className="AuctionInfo__files_items">
                <a className="AuctionInfo__files_item">
                  <img src= {pdf} alt="auction file" />
                </a>
                <a className="AuctionInfo__files_item">
                  <img src={open} alt="auction file" />
                </a>
                <a className="AuctionInfo__files_item">
                  <img src={img} alt="auction file" />
                </a>
                </div>
            </div>
    )
}