import { useParams, useSearchParams } from "react-router-dom";
import { notes } from "./pathMap";
import NoticeBoard from "./NoticeBoard";
import NoticeBoardDetail from "./NoticeBoardDetail";
import NoticeBoardWrite from "./NoticeBoardWrite";
import './DetailPage.css'
import UpdateForm from "./UpdateForm";

function DetailPage() {
  const{category, id} = useParams();
  const[searchParams] = useSearchParams();

  const externalLinkMap = {
    '온라인 논문투고' : 'https://karthistory.jams.or.kr/',
    '논문유사도검사': 'https://www.copykiller.com/',
    '미술사학보 논문검색': 'https://www.dbpia.co.kr/journal/publicationDetail?publicationId=PLCT00016071' ,
  }

  if(category === 'news') {
    // 게시판 만들기
    const sub = searchParams.get('mode');
    const postId = searchParams.get('post');
    if(id === 'notice') {
      if(sub === 'write') return <NoticeBoardWrite />;
      if(sub === 'edit' && postId) return <UpdateForm id={postId} />;
      if(postId) return <NoticeBoardDetail id={postId} />;
      
      return <NoticeBoard />;
    }
    return <div>404 Not Found</div>
  }
  // if(category === 'journal' && id === 'search') return <ArtSearchPage/>

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