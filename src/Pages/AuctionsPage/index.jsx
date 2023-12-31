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
          <section className="AuctionPage__header">
             <AuctionNavbar/>
             <AuctionHeader/>
           </section>
           <section className="AuctionPage__body">
             <div className="AuctionPage__body_section1">
               <AuctionGallery/> 
             </div>
             <div className="AuctionPage__body_section2">
               <AuctionInformation/>
               <AuctionFiles/>
             </div>
             <div className="AuctionPage__body_section3">
               <AuctionBidInformation/>
               <AuctionSaleInformation/> 
             </div>
           </section>
        </div>
        </section>
    )
}

export default AuctionsPage;