import { useParams, useSearchParams } from "react-router-dom";
import { notes } from "./PathMap";
import NoticeBoard from "./NoticeBoard";
import NoticeBoardDetail from "./NoticeBoardDetail";
import NoticeBoardWrite from "./NoticeBoardWrite";
import './DetailPage.css'

function DetailPage() {
  const{category, id} = useParams();
  const[searchParams] = useSearchParams();

  const externalLinkMap = {
    '온라인 논문투고' : 'https://karthistory.jams.or.kr/',
    '논문유사도검사': 'https://www.copykiller.com/',
  }

  if(category === 'news') {
    // 게시판 만들기
    if(id === 'notice') {
      const sub = searchParams.get('mode');
      const postId = searchParams.get('post');

      if(sub === 'write') return <NoticeBoardWrite />;
      if(postId) return <NoticeBoardDetail id={postId} />;
      
      return <NoticeBoard />;
    }
  }

  return(
    <>
    <div className="DetailPage-content">
      <h3>{notes[id].name}</h3>
      <div className="DetailPage-img">
        <img src={notes[id].image} alt={notes[id].name}/>
      </div>
    </div>
    </>
  )
}

export default DetailPage;