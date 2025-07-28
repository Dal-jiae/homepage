import { useNavigate } from "react-router-dom";
import './Footer.css'
import { useState } from "react";

function Footer() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);


  return(
    <>
    {
      showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e)=>e.stopPropagation()}>
            <p>이메일 무단수집을 거부합니다.</p>
            <p>본 사이트에 게시된 이메일 주소가 전자우편 수집 프로그램이나 그 밖의 기술적 장치를 이용하여 무단으로 수집되는 것을 거부하며, 
            이를 위반시 정보 통신망 법에 의해 형사처벌 됨을 유념하시기 바랍니다.</p>
            <button onClick={()=>setShowModal(false)}> 닫기 </button>
          </div>
        </div>
      )
    }

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
          <li onClick={()=>{setShowModal(true)}} style={{ cursor: 'pointer' }}>
            이메일무단수집거부
          </li>
        </ul>

        <div className="info">
          <p>주소: 대한민국 미술관</p>
          <p>COPYRIGHT (C)2005.   이 웹사이트의 저작권은 미술사학연구회에 있습니다.</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default Footer;