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
          <p>공지사항</p>
        </div>
        <div className="submission-card">
          <p>온라인 논문투고</p>
        </div>
        <div className="guideline-card">
          <p>투고 규정</p>
        </div>
        <div className="formatting-card">
          <p>논문 작성요령</p>
        </div>
      </div>

    </>
  )
}

export default MainPage