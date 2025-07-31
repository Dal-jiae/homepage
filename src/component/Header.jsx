import { useNavigate } from 'react-router-dom';

function Header ({setShowList, showList}) {
  const navigate = useNavigate();

  return(
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid" style={{
        fontSize: '1.2rem',
        display: 'flex',
        alignItems: 'center',
      }}>
        <a class="navbar-brand" onClick={() => navigate('/')} 
        style={{ 
          cursor: "pointer",
            padding: '0',
            fontSize: '1.5rem',
            paddingLeft: '20px',
          }}>
            미술사학연구회</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav" style={{
          display: 'flex',
          justifyContent: 'space-between'
        }}>
          <ul className="navbar-nav" onClick={()=> setShowList(!showList)} 
          style={{ 
              display: 'flex',
              gap: '7.5rem', /* 항목 사이 간격, 원하는 값으로 조정 */
              padding: '0',
              margin: '0',
              listStyle: 'none',
              paddingLeft: '7rem'
          }}>
            <li className="nav-item">
              <a className="nav-link" href="#" >학회 안내</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" >학술지</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" >논문투고</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" >학회소식</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    </>
  )
}

export default Header;