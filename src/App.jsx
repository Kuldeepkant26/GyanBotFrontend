import React from 'react'

import { Router, Route, Routes, useNavigate } from 'react-router-dom'
import Home2 from './pages/Home2'
import Nav from './Components/Nav'
import Signup from './pages/Signup'
import Login from './pages/Login'
import AddPost from './pages/AddPost'
import Profile from './pages/Profile'
import Allposts from './pages/Allposts'
function App() {
  return (
    <>
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<Home2 />} />
        <Route path='/profile/:id' element={<Profile />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/addpost' element={<AddPost />}></Route>
        <Route path='/allposts' element={<Allposts/>}></Route>
      </Routes>
    </>

  )
}

export default App
