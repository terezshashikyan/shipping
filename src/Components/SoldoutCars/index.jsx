import './style.css';
import img1 from './img1.png';
import img2 from './img2.png';
import img3 from './img3.png';
import soldout from './soldoutBanner.png';


const SOLDOUT_CARS = [
    {
        id: 1,
        src: img1,
        name: 'Bmw 2er',
        price: '99.999$',
    },

    {
        id: 2,
        src: img2,
        name: 'Mercedes Benz ',
        price: '99.999$',
    },

    {
        id: 3,
        src: img3,
        name: 'Toyota',
        price: '99.999$',
    },

    {
        id: 4,
        src: img1,
        name: 'Bmw 3er',
        price: '99.999$',
    },

    {
        id: 5,
        src: img2,
        name: 'Mercedes Benz',
        price: '99.999$',
    },

    {
        id: 6,
        src: img3,
        name: 'Bmw 4er',
        price: '99.999$',
    },

    {
        id: 7,
        src: img1,
        name: 'Bmw White',
        price: '99.999$',
    },
]


function SoldoutCars() {
    return (
        <section className="soldoutCars">
            <div className="soldoutCars__heading">
                <h3>Sold Out</h3>
            </div>
            <div className="soldoutCars__container">
                {SOLDOUT_CARS.map((car) => {
                    return (
                    <div className = 'soldoutCar' id={car.id}>
                        <div className = 'soldoutCar__img' style={{backgroundImage: `url(${car.src})`, width: '200px', height: '200px'}} > 
                          <div className="soldoutCar__price">{car.price}</div>
                          <img src={soldout} alt="sold out" className="soldoutCar__banner" />
                        </div>
                        <div className="soldoutCar__content">
                          <p className='soldoutCar__name'>{car.name}</p>
                          <a className='soldoutCar__viewDetailsLink' href="#details">View Item</a>
                        </div>
                    </div>
                    )
                })}
            </div>
        </section>
    )
}

export default SoldoutCars;