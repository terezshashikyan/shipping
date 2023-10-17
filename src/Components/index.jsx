import Carousel from './Carousel';
import Auctions from './Auctions';
import Cars from './Cars';
import SoldoutCars from './SoldoutCars';

function Home() {
    return (
      <div className="App">
        <Carousel/>
        <Auctions/> 
        <Cars/>
        <SoldoutCars/>
      </div>
    );
  }
  
  export default Home;