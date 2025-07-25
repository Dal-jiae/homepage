import ImageSlider from "../component/ImageSlider";
import './MainPage.css';

function MainPage() {
  return(
    <>
      <div className="Main-top">
      <ImageSlider/>
      </div>

      <div className="container">
        <div className="notice-card">
          <div className="text-box">
          <p>공지사항 +</p>
          </div>
        </div>
        <div className="submission-card">
          <div className="text-box">
          <p>온라인 논문투고 +</p>
          </div>
        </div>
        <div className="guideline-card">
          <div className="text-box">
          <p>투고 규정 +</p>
          </div>
        </div>
        <div className="formatting-card">
          <div className="text-box">
          <p>논문 작성요령 +</p>
          </div>
        </div>
      </div>

    </>
  )
}

export default MainPage