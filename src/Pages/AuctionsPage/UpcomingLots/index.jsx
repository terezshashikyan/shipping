import './style.css';
import mercedes from '../../../Assets/lot_img.png';

const LOTS = [
    {
       img: mercedes,
       name: '2013 - MercedesBenz GLC',
       number: 12345678,
       location: 'Georgia',
       currentBid: '$3.400',
    },
    {
        img: mercedes,
        name: '2013 - MercedesBenz GLC',
        number: 12345678,
        location: 'Georgia',
        currentBid: '$3.400',
     },
     {
        img: mercedes,
        name: '2013 - MercedesBenz GLC',
        number: 12345678,
        location: 'Georgia',
        currentBid: '$3.400',
     },
     {
        img: mercedes,
        name: '2013 - MercedesBenz GLC',
        number: 12345678,
        location: 'Georgia',
        currentBid: '$3.400',
     }
]

function UpcomingLots() {
    return (
        <section className = 'upcoming_lots'>
          {LOTS.map((lot) => {
            return (
                <section className='lot'>
                    <div>
                    <img className="lot__img" src = {lot.img}/>
                    <button className='lot__button'>Next</button> 
                    </div>
                    <div className="lot__content">
                        <h3 className="lot__content_header">
                        {lot.name}
                        </h3>
                        <span className='lot__content_p'>Lot: {lot.number}</span>
                        <span className='lot__content_p'>Location: {lot.location}</span>
                        <span className='lot__content_p'>Current Bid: {lot.currentBid}</span>
                    </div>
                </section>
            )
          }
          )}
        </section>
    )
}

export default UpcomingLots;