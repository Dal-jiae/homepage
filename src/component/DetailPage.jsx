import { useParams } from "react-router-dom";
import NoticeBord from "./NoticeBord";
import ConferenceBoard from "./ConferenceBoard";
import SymposiumBoard from "./SymposiumBoard";

function DetailPage() {
  const{category, id} = useParams();

  const externalLinkMap = {
    '온라인 논문투고' : 'https://karthistory.jams.or.kr/',
    '논문유사도검사': 'https://www.copykiller.com/',
  }

  if(category === 'news') {
    if(id === 'notice') return <NoticeBord/>;
    if(id === 'conference') return <ConferenceBoard/>;
    if(id === 'symposium') return <SymposiumBoard/>;
  }

  return(
    <>

    </>
  )
}

export default DetailPage;