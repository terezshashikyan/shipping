import bmw1 from '../../../Assets/bmw_1.png';
import bmw2 from '../../../Assets/bmw_2.png';
import bmw3 from '../../../Assets/bmw_3.png';
import bmw4 from '../../../Assets/bmw_4.png';
import bmw5 from '../../../Assets/bmw_5.png';
import './style.css';

function AuctionGallery() {
    return (
        <section className = 'auction__gallery'>
          <figure className = 'auction__gallery_item auction__gallery_item_1'>
            <img src={bmw1} className = 'auctions__gallery-img' alt="bmw image" />
          </figure>
          <figure className = 'auction__gallery_item auction__gallery_item_2'>
            <img src={bmw2} className = 'auctions__gallery-img' alt="bmw image" />
          </figure>
          <figure className = 'auction__gallery_item auction__gallery_item_3'>
            <img src={bmw3} className = 'auctions__gallery-img' alt="bmw image" />
          </figure>
          <figure className = 'auction__gallery_item auction__gallery_item_4'>
            <img src={bmw4} className = 'auctions__gallery-img' alt="bmw image" />
          </figure>
          <figure className = 'auction__gallery_item auction__gallery_item_5'>
            <img src={bmw5} className = 'auctions__gallery-img' alt="bmw image" />
          </figure>
        </section>
    )
}

export default AuctionGallery;