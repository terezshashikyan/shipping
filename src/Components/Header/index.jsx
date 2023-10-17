import logo from '../../Assets/logo.png';
import line from '../../Assets/line.png';
import arrow from '../../Assets/arrow.png';
import usa from '../../Assets/us.png';
import SideBar from '../SideBar';
import './style.css';

function Header() {
    return (
        <header className="header">
            <div className="container header__container">
                <img className = 'header__logo' src={logo} alt="logo" />

                {/* for desktop view only  */}
                <div className="header__items">
                  <div className="header__home">
                   <a className = "header__itemLink" href="#home">Home</a> 
                  </div>
                  <div className="header__auctions">
                   <a className = "header__itemLink" href="#auctions">Auctions</a> 
                   <button className = 'header__arrow'><img src= {arrow} alt="arrow" /></button>
                  </div>
                  <div className="header__login">
                   <a className = "header__itemLink" href="#login">Log In</a> 
                  </div>
                  <div className="header__register">
                   <a className = "header__itemLink" href="#register">Register</a> 
                  </div>
                  <div className="header__language">
                    <img src={usa} alt="" />
                    <a className = "header__itemLink" href="#language">English</a> 
                    <button className = 'header__arrow'><img src= {arrow} alt="arrow" /></button>
                  </div>
                  <div className="header__time">
                   <a className = "header__itemLink" href="#time">11:08 PM</a> 
                   <button className = 'header__arrow'><img src= {arrow} alt="arrow" /></button>
                  </div>
                  <div className="header__contactus">
                   <a className = "header__itemLink" href="#contacus">Contact Us</a> 
                  </div>
                </div>
                 
                {/* for tablet and mobile view only   */}
                <div className="header__menu">
                  <SideBar/>
                </div>
            </div>
        </header>
    )
}

export default Header;