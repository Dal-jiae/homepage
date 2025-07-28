import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();
  return(
    <>
    <ul>
      <li onClick={()=>{navigate('/member/terms')}} style={{ cursor: 'pointer' }}>
        이용약관
        </li>
      <li onClick={()=>{navigate('/member/privacy')}} style={{ cursor: 'pointer' }}>
        개인정보처리방침
        </li>
      <li onClick={()=>{navigate('/member/map')}} style={{ cursor: 'pointer' }}>
        찾아오시는 길
        </li>
    </ul>

    <p>주소: 대한민국 미술관</p>
    <p>COPYRIGHT (C)2005.   이 웹사이트의 저작권은 미술사학연구회에 있습니다.</p>
    </>
  )
}

export default Footer;