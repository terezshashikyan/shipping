
import "./style.css";
import background from '../../Assets/background.jpg';
import ArrowLeft from '../../Assets/ArrowLeft.png';
import ArrowRight from '../../Assets/ArrowRight.png';
import Dots from '../../Assets/dots.png';


function Carousel() {
    
  return (
    <div className="carousel" style={{
      backgroundImage: `url(${background})`,
    }}>
      <div className="container carousel__container">
        <div>
        </div>
        <div className="carousel__arrows">
          <img src= {ArrowLeft} alt="Arrow" />
          <img src= {ArrowRight} alt="Arrow" />
        </div>
        <div className = 'carousel__dots' >
          <img src= {Dots} alt="Arrow" /> 
        </div>
      </div>
    </div>
    
  );
};



export default Carousel;