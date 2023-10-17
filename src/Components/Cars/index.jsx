import './style.css';
import img1 from './img1.png';
import img2 from './img2.png';
import img3 from './img3.png';


const CARS = [
    {
        id: 1,
        src: img1,
        name: 'Bmw 2er',
    },

    {
        id: 2,
        src: img2,
        name: 'Mercedes Benz ',
    },

    {
        id: 3,
        src: img3,
        name: 'Toyota',
    },

    {
        id: 4,
        src: img1,
        name: 'Bmw 3er',
    },

    {
        id: 5,
        src: img2,
        name: 'Mercedes Benz',
    },

    {
        id: 6,
        src: img3,
        name: 'Bmw 4er',
    },

    {
        id: 7,
        src: img1,
        name: 'Bmw White',
    },
]


function Cars() {
    return (
        <section className="container cars">
            <div className="cars__heading">
                <h3>Popular Cars</h3>
            </div>
            <div className="cars__container">
                {CARS.map((car) => {
                    return (
                    <div className = 'car' id={car.id}>
                        <div className = 'car__img' style={{backgroundImage: `url(${car.src})`, width: '200px', height: '200px'}} > </div> 
                        <div className="car__content">
                        <p className='car__name'>{car.name}</p>
                        <a className='car__viewDetailsLink' href="#details">View Item</a>
                        </div>
                    </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Cars;