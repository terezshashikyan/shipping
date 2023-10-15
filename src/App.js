import logo from './logo.svg';
import './App.css';
import Cars from './Components/Cars';
import SoldoutCars from './Components/SoldoutCars';
import Footer from './Components/Footer';
import Header from './Components/Header';
import SideBar from './Components/SideBar';

function App() {
  return (
    <div className="App">
      <Header/>
      <SideBar/>
      <Cars/>
      <SoldoutCars/>
      <Footer/>
    </div>
  );
}

export default App;
