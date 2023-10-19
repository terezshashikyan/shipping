import AuctionNavbar from "./AuctionNavbar";
import AuctionHeader from "./AuctionHeader";
import AuctionGallery from './AuctionGallery';
import AuctionInformation from './AuctionInformation';
import AuctionBidInformation from './AuctionBidInformation';
import AuctionSaleInformation from "./AuctionSaleInformation";
import AuctionFiles from "./AuctionFiles";
import './style.css';

function AuctionsPage() {
    return (
        <section className="AuctionPage">
        <div className="container">
           <AuctionNavbar/>
           <AuctionHeader/>
           {/* <AuctionGallery/> */}
           <AuctionInformation/>
           {/* <AuctionBidInformation/> */}
           <AuctionSaleInformation/> 
           <AuctionFiles/>
        </div>
        </section>
    )
}

export default AuctionsPage;