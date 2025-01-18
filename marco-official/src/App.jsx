import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'

function App() {

  return (
   <BrowserRouter >
   <Routes >
    <Route index element={<Home />}>

    </Route>
   </Routes>
   </BrowserRouter>
  )
}

export default App
