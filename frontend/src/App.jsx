import { useState } from 'react'
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Compoent/Header'
import Footer from './Compoent/Footer'
import Home from './pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Header/>
    <Footer/> */}
    <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
