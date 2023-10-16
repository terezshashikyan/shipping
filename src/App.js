import logo from './logo.svg';
import './App.css';
import Cars from './Components/Cars';
import SoldoutCars from './Components/SoldoutCars';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Auctions from './Components/Auctions';
import Carousel from './Components/Carousel';

function App() {
  return (
    <div className="App">
      <Header/>
      <Carousel/>
      <Auctions/> 
      <Cars/>
      <SoldoutCars/>
      <Footer/>
    </div>
  );
}

export default App;
