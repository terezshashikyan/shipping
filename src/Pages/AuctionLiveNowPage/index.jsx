import AuctionNavbar from "../AuctionsPage/AuctionNavbar";
import AuctionHeader from "../AuctionsPage/AuctionHeader";
import AuctionGallery from '../AuctionsPage/AuctionGallery';
import AuctionInformation from '../AuctionsPage/AuctionInformation';
import AuctionLiveNow_Bid from './AuctionLiveNow_Bid';
import AuctionLiveNowHeader from "./AuctionLiveNowHeader";
import AuctionFiles from "../AuctionsPage/AuctionFiles";
import UpcomingLots from "./UpcomingLots";
import './style.css';

function AuctionLiveNowPage() {
    return (
        <section className="AuctionLiveNowPage">
        <div className="container">
            <AuctionLiveNowHeader/>
          <section className="AuctionPage__header">
             <AuctionNavbar/>
             <AuctionHeader/>
           </section>
           <section className="AuctionPage__body">
             <div className="AuctionPage__body_section1">
               <AuctionGallery/> 
             </div>
             <div className="AuctionPage__body_section2">
                <div className="AuctionPage__body_section2_div1">
               <AuctionInformation/>
               <AuctionLiveNow_Bid/>
               </div>
               <AuctionFiles/>
             </div>
             <div className="AuctionPage__body_section3">
             <UpcomingLots/> 
             </div>
           </section>
        </div>
        </section>
    )
}

export default AuctionLiveNowPage;