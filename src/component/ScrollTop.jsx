import { useEffect, useState } from "react";
import './ScrollTop.css';

function ScrollTop() {
  const [showButton, setShowButton] = useState(false);
  
  const handleTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(()=>{
    const handleScroll = () => {
      window.scrollY>100? setShowButton(true) : setShowButton(false)// 스크롤 위치가 300px 이상일 때 버튼 표시
      // console.log(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => 
      window.removeEventListener('scroll', handleScroll);
  }, [])

  return (
    showButton && (
    <div className="scroll-top-container"> 
    <button onClick={handleTop} className="scroll-top-button">
      Top
    </button>
    </div>
    )
  );
}

export default ScrollTop;