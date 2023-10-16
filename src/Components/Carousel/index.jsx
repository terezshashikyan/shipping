
import "./style.css";
import background from '../../Assets/background.jpg';


function Carousel() {
    
  return (
    <div className="carousel" style={{
      backgroundImage: `url(${background})`,
    }}>
    </div>
  );
};



export default Carousel;