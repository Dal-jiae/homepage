import { useEffect, useState } from "react";
import './ImageSlider.css';

function ImageSlider() {
  
  const slides = [
    '/image/Edouard_Manet-Olympia.jpg',
    '/image/Monet-Sunrise.jpg',
    '/image/Jackson_Pollock-no.3.jpg'
  ]

  const extendedSlides = [slides[slides.length - 1], ...slides, slides[0]]; // 슬라이드 순환을 위한 배열 확장

  const [current, setCurrent] = useState(1); // 현재 슬라이드 인덱스 (1로 시작하여 첫 번째 슬라이드가 보이도록 설정)
  const [isTransitioning, setIsTransitioning] = useState(false);;
  const length = extendedSlides.length;

  const nextSlide = () => {
    if (current < length -1) {
      setCurrent(current + 1);
      setIsTransitioning(true);
    }
  }
  const preSlide = () => {
    if (current > 0) {
      setCurrent(current - 1);
      setIsTransitioning(true);
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); 

    return () => clearInterval(interval); // 컴포넌트 언마운트 시 인터벌 클리어
  }, [current]);

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null; // 슬라이드가 없을 경우 null 반환
  }

  const handleTransitionEnd = () => {
    if (current === length -1) {
      setIsTransitioning(false);
      setCurrent(1); // 마지막 슬라이드에서 첫 번째 슬라이드로 이동
    } else if (current === 0) {
      setIsTransitioning(false);
      setCurrent(length - 2); // 첫 번째 슬라이드에서 마지막 슬라이드로 이동
    }
  }

  useEffect(() => {
    if (!isTransitioning) {
      const timer = setTimeout(() => {
        setIsTransitioning(true);
      }, 20); // 슬라이드 전환 후 약간의 지연을 주어 부드러운 전환 효과
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  return(
    <>
    <div className="slider">
      <div className="arrow left" onClick={preSlide}>◀</div>
      <div className="arrow right" onClick={nextSlide}>▶</div>

      <div className="show-slider">
        <div className="slider-track" style={{
          transform: `translateX(-${current * 100}%)`,
          transition: isTransitioning ? 'transform 0.5s ease-in-out' : 'none'}}
          onTransitionEnd={handleTransitionEnd}>
        {
          extendedSlides.map((slide, i) => {
            return(
            <div  className="slide" key={i}> 
              <img src={slide} alt={`slide ${i}`} className="slide-image"/>
            </div>
            )
          }) 
        }
        </div>
        <div className="text-overlay">미술사학연구회 KSAH </div>
      </div>
    </div>
    </>
  )
}

export default ImageSlider;
