import AuctionHeader from "./AuctionHeader";
import AuctionGallery from './AuctionGallery';

function AuctionsPage() {
    return (
        <section className="container">
           <AuctionHeader/>
           <AuctionGallery/>
        </section>
    )
}

export default AuctionsPage;