import { useNavigate } from "react-router-dom";
import './Footer.css'

function Footer() {
  const navigate = useNavigate();
  return(
    <div className="Footer">
      <div className="left">
        <p className="logo">KSAH</p>
      </div>

      <div className="right">
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
          <li onClick={()=>{
            <div>

            </div>
          }} style={{ cursor: 'pointer' }}>
            이메일무단수집거부
          </li>
        </ul>

        <div className="info">
          <p>주소: 대한민국 미술관</p>
          <p>COPYRIGHT (C)2005.   이 웹사이트의 저작권은 미술사학연구회에 있습니다.</p>
        </div>
      </div>
    </div>
  )
}

export default Footer;