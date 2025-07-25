import { useNavigate } from 'react-router-dom';
import './Header.css'

function Header ({setShowList, showList}) {
  const navigate = useNavigate();

  return(
    <>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" onClick={() => navigate('/')}>미술사학연구회</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav" onClick={()=> setShowList(!showList)}>
            <li class="nav-item">
              <a class="nav-link" href="#" >학회 안내</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" >학술지</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" >논문투고</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" >학회소식</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    </>
  )
}

export default Header;