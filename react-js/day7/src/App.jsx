import React from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom"
import Home from './pages/Home'
import About from './pages/About'
import Login from './pages/Login'
import NotFound from './pages/NotFound'
import Navbar from './components/Navbar'
import Contact from './pages/Contact'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App


