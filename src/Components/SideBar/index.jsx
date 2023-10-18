import { useState } from 'react';
import humburger from '../../Assets/Hamburger.png';
import close from '../../Assets/close.png';
import arrow from '../../Assets/arrow.png';
import usa from '../../Assets/us.png';
import './style.css';


function SideBar() {
    const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
    return (
      <>
        <button onClick={toggleSidebar} className='sideBar__button'><img src={humburger} alt="menu" /></button>
        
        {/* <div className={`sidebar__menu ${isOpen ? 'open' : ''}`}>
            <div className="sideBar__item">
               <a className = "sideBar__itemLink" href="#home">Home</a> 
            </div>
            <div className="sideBar__item">
                <a className = "sideBar__itemLink" href="#auctions">Auctions</a> 
                <button className = 'header__arrow'><img src= {arrow} alt="arrow" /></button>
            </div>
            <div className="sideBar__item">
                <a className = "sideBar__itemLink" href="#login">Log In</a> 
            </div>
            <div className="sideBar__item">
                <a className = "sideBar__itemLink" href="#register">Register</a> 
            </div>
            <div className="sideBar__item">
                <a className = "sideBar__itemLink" href="#language">English</a> 
                <button className = 'header__arrow'><img src= {arrow} alt="arrow" /></button>
            </div>
            <div className="sideBar__item">
                <a className = "sideBar__itemLink" href="#time">11:08 PM</a> 
                <button className = 'header__arrow'><img src= {arrow} alt="arrow" /></button>
            </div>
            <div className="sideBar__item">
                 <a className = "sideBar__itemLink" href="#contacus">Contact Us</a> 
            </div>
         </div> */}
        </>
    )
}

export default SideBar;

