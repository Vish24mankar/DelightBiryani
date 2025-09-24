import { useState } from 'react'
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Compoent/Header'
import Footer from './Compoent/Footer'
import Home from './pages/Home'
import SingleImagePopup from './Compoent/SingleImagePopup'
import SearchPage from './pages/SearchPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Header/>
    <Footer/> */}
    <BrowserRouter>
      <Header/>
        <SingleImagePopup />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/search' element={<SearchPage />} />
        </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
