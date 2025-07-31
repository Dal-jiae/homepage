function TermsPage() {
  return (
    <div className="TermsPage" 
      style={{ 
        padding: '50px',
        boxSizing: "border-box",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',  
        }}>

      <h3 style={{
        borderBottom: "1px solid lightslategray",
        paddingBottom: "2rem"
      }}>이용약관</h3>

      <div className='Terms-content' style={{
        paddingTop: '2rem',
        fontSize: '1.2rem',
        lineHeight: '2',
        color: '#333',
        alignSelf: 'flex-start',
        width: '100%'
      }}>
      <h4 style={{
        marginBottom: '1.2rem',
        fontWeight: 'bold',
        textDecoration: 'underline lightslategray'
      }}>제1조(목적)</h4>
      <p>이 약관은 미술사학연구회 회사(전자상거래 사업자)가 운영하는 미술사학연구회 사이버 몰(이하 “몰”이라 한다)에서 제공하는 
        인터넷 관련 서비스(이하 “서비스”라 한다)를 이용함에 있어 사이버 몰과 이용자의 권리•의무 및 책임사항을 규정함을 목적으로 합니다.</p>
      <p>※「PC통신, 무선 등을 이용하는 전자상거래에 대해서도 그 성질에 반하지 않는 한 이 약관을 준용합니다.」</p>
      <br/>
      <h4>제2조(정의)</h4>
      <p>① “몰”이란 미술사학연구회 회사가 재화 또는 용역(이하 “재화 등”이라 함)을 이용자에게 제공하기 위하여 
        컴퓨터 등 정보통신설비를 이용하여 재화 등을 거래할 수 있도록 설정한 가상의 영업장을 말하며, 
        아울러 사이버몰을 운영하는 사업자의 의미로도 사용합니다.</p>
      <p>② “이용자”란 “몰”에 접속하여 이 약관에 따라 “몰”이 제공하는 서비스를 받는 회원 및 비회원을 말합니다.</p>  
      <p>③ ‘회원’이라 함은 “몰”에 회원등록을 한 자로서, 계속적으로 “몰”이 제공하는 서비스를 이용할 수 있는 자를 말합니다.</p>
      <p>④ ‘비회원’이라 함은 회원에 가입하지 않고 “몰”이 제공하는 서비스를 이용하는 자를 말합니다.</p>
      </div>
    </div>
  );
}

export default TermsPage; 