import React from 'react'

import { Router, Route, Routes, useNavigate } from 'react-router-dom'
import Home2 from './pages/Home2'
import Nav from './Components/Nav'
import Signup from './pages/Signup'
import Login from './pages/Login'
import About from './pages/About'

function App() {
  return (
    <>
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<Home2 />} />
        <Route path='/about' element={<About />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>

      </Routes>
    </>

  )
}

export default App
