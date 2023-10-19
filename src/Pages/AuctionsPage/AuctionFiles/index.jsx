import './style.css';
import pdf from '../../../Assets/pdf_icon.png';
import open from '../../../Assets/open_icon.png';
import img from '../../../Assets/img_icon.png';


function AuctionFiles() {
    return (
        <div className="AuctionInfo__files">
                <div className="AuctionInfo__files_header">
                    Files
                </div>
                <div className="AuctionInfo__files_details">
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

export default AuctionFiles;