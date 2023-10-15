import './style.css';
import Facebook from '../../Assets/Facebook.png';
import Instagram from '../../Assets/Instagram.png';
import Linkedin from '../../Assets/Linkedin.png';

function Footer() {
    return (
        <div className="footer">
            <div className="footer__container">
                <div className='footer__links'>
                  <div className="footer__socialMediaLinks">
                    <a className ='footer__SocialMediaLink' href="#Instagram"><img src= {Instagram} alt="Instagram"/></a>
                    <a className ='footer__SocialMediaLink' href="#Facebook"><img src= {Facebook} alt="Facebook"/></a>
                    <a className ='footer__SocialMediaLink' href="#Linkedin"><img src= {Linkedin} alt="Linkedin"/></a>
                </div>
                <span className = 'footer__termsLink'>Terms and Conditions</span>
            </div>
                
                <div className="footer__content">
                  <span className = 'footer__content1'>@Global Shipping</span>
                  <span className = 'footer__content2'>Powered By ShellLogix</span>
                </div>
            </div>
        </div>
    )
};

export default Footer;