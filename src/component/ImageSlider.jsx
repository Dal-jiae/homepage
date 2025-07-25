import { useState } from "react";
import './ImageSlider.css';

function ImageSlider() {
  
  const slides = [
    '/image/Edouard_Manet-Olympia.jpg',
    '/image/Monet-Sunrise.jpg',
    '/image/Jackson_Pollock-no.3.jpg'
  ]

  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length -1 ? 0 : current +1 );
  }
  const preSlide = () => {
    setCurrent(current === 0 ? length -1 : current -1 );
  }


  return(
    <>
    <div className="slider">
      <div className="arrow left" onClick={preSlide}>◀</div>
      <div className="arrow right" onClick={nextSlide}>▶</div>

      <div className="show-slider">
        {
          slides.map((slide, i) => {
            return(
            <div 
              className={i === current ? "slide active" : "slide"}
              key={i}
            > 
              {i == current && (
                <img src={slide} alt={`slide ${i}`} className="slide-image"/>
              )}
              <div className="text-overlay">
                미술사학연구회 KSAH
              </div>
            </div>
            )
          }) 
        }
      </div>
    </div>
    </>
  )
}

export default ImageSlider;
