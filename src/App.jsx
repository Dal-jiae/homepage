import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './component/Header'
import MainPage from './pages/MainPage'
import ListDetail from './component/ListDetail'
import { useState } from 'react'
import DetailPage from './component/DetailPage'
import Footer from './component/Footer'

function App() {
  const [showList, setShowList] = useState(false);

  return (
    <>
      <Header setShowList={setShowList} showList={showList}/>
      <ListDetail show={showList}/>

      <Routes>
        <Route path='/' element={<MainPage />}/>

        <Route path='/detail/:category/:id' element={<DetailPage />}/>
      </Routes>

      <Footer/>
    </>
  )
}

export default App

