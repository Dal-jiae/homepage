import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './component/Header'
import MainPage from './pages/MainPage'
import ListDetail from './component/ListDetail'
import { useState } from 'react'
import DetailPage from './component/DetailPage'
import Footer from './component/Footer'
import MapPage from './pages/MapPage'

function App() {
  const [showList, setShowList] = useState(false);

  return (
    <>
      <Header setShowList={setShowList} showList={showList}/>
      <ListDetail show={showList}/>

      <Routes>
        <Route path='/' element={<MainPage />}/>

        <Route path='/detail/:category/:id' element={<DetailPage />}/>
        <Route path='/member/map' element={<MapPage/>}/>
      </Routes>

      <div className='Footer-body'>
      <Footer />
      </div>
      
    </>
  )
}

export default App

