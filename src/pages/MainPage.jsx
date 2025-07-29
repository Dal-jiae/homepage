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

      <div className="Main-bottom">
        <div className="col col-1"> 
          <div className="cell">
            <form className="search-form">
            <h3>논문검색</h3>
            <p>미술사학연구회의 논문을 검색하실 수 있습니다.</p>
              <div className="form">
              <input 
                type="search"
                placeholder="검색어를 입력해주세요."
                className="from-input"
                />
              <button onClick={()=>{
                  window.open('https://www.dbpia.co.kr/', '_blank'); // 외부 사이트는 새 창으로
                  // navigate('/detail/journal/search'); 
                }}>검색</button>
              </div>
            </form>
          </div>
        </div> 

        <div className="col col-2">
          <div className="post-box">
            <h2>최신 학술지 목록</h2>
            <ul>
              <li>제 1호 - 2023년 1월</li>
              <li>제 2호 - 2023년 2월</li>
              <li>제 3호 - 2023년 3월</li>
              <li>제 4호 - 2023년 4월</li>
              <li>제 5호 - 2023년 5월</li>
            </ul>
          </div>  
        </div>  
      </div>

    </>
  )
}

export default MainPage