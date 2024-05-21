// import { useState } from 'react'
import Register from './pages/register'
import Login from "./pages/login"
import Home from "./pages/home"
import {Route, Routes } from 'react-router-dom'
import Formpage from  "./pages/formpage";
import Adminpage from './pages/Adminpage'

function App() {


  return (
    <>
    <Routes>
      <Route  path="/"  element={<Login />}/>
      <Route exact path="/home"  element={<Home />}/>
      <Route  path="/register" element={<Register/>} />
      <Route  path="/formpage" element={<Formpage/>} />
      <Route  path="/Adminpage" element={<Adminpage/>} />

   </Routes>
    </>
  )
}

export default App
