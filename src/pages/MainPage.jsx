import { useNavigate } from "react-router-dom";
import ImageSlider from "../component/ImageSlider";
import './MainPage.css';

const arr = [
  {title:'공지사항', url:'/detail/news/notice', img: 'notice'},
  {title:'온라인 논문투고', url:'https://karthistory.jams.or.kr/', img: 'submission'},
  {title:'투고규정', url:'/detail/journal/guidelines', img:'guideline'},
  {title:'논문 작성요령', url:'/detail/submit/procedure', img:'formatting'}
]

function MainPage() {
  const navigate = useNavigate();

  return(
    <>
      <div className="Main-top">
      <ImageSlider/>
      </div>

      <div className="container">
        {
          arr.map((data,i) => {
            return (
              <div className={`${data.img}-card`} onClick={()=>{
                if(data.url.startsWith('http')) {
                  window.open(data.url, '_blank');
                } else {
                  navigate(data.url);
                }
              }}
              >
                <div className="text-box">
                <p>{data.title} +</p>
                </div>
              </div>
            )
          })
        }
      </div>

    </>
  )
}

export default MainPage