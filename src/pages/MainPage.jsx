import { useNavigate } from "react-router-dom";
import ImageSlider from "../component/ImageSlider";
import './MainPage.css';

const arr = [
  {title:'공지사항', url:'/detail/news/notice', img: 'notice'},
  {title:'온라인 논문투고', url:'https://karthistory.jams.or.kr/', img: 'submission'},
  {title:'투고규정', url:'/detail/journal/guidelines', img:'guideline'},
  {title:'논문 작성요령', url:'/detail/submit/procedure', img:'formatting'}
]

const journalArr = [
  {title: '인류세인가 자본세인가: 산투 모포켕의 풍경 사진과 기후변화시대 재현의 정치성', detail: '저자: 장선희 | 소속: 홍익대학교 | 페이지: 7-31 (25pages)', url: 'https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE12172124'},
  {title: '미술을 공격하는 미술 – 동시대 기후 예술에 대한 행동주의의 교훈', detail: '저자: 최종철 | 소속: 이화여자대학교 | 페이지: 81-113 (33pages)', url: 'https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE12172127'}, 
  {title: '비인간 증인: 인류세 시대 상호 돌봄의 장으로 기능하는 예술적 전략과 실천', detail: '저자: 조주현 | 소속: 연세대학교 | 페이지: 115-141 (27pages)', url: 'https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE12172128'},
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
                  window.open('https://www.dbpia.co.kr/journal/publicationDetail?publicationId=PLCT00016071', '_blank'); // 외부 사이트는 새 창으로
                  // navigate('/detail/journal/search'); 
                }}>검색</button>
              </div>
            </form>
          </div>
        </div> 

        <div className="col col-2">
          <div className="post-box">
            <h3>최신 학술지 목록</h3>
            <ul>
              {journalArr.map((data, i) => (
                <li key={i}>
                  <a href={data.url} target="_blank" rel="noopener noreferrer">
                    <h4>{data.title}</h4>
                    <p>{data.detail}</p>
                  </a>
                </li>
              ))}
            </ul>
          </div>  
        </div>  
      </div>

    </>
  )
}

export default MainPage