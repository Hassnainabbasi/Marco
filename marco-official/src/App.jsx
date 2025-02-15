import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import CustomerAccount from './pages/Account/customerAccount'
import Login from './auth/Login'
import GetCategories from './pages/GetCategories/GetCategories'
import Testing from './tools/Testing'

function App() {

  return (
   <BrowserRouter >
   <Routes >
    <Route index element={<Home />}></Route>
    <Route path='/auth' element={<Login />}/>
   <Route path="/customer-account" element={<CustomerAccount />}/>
   <Route path='/get-cat' element={<GetCategories />}/>
   <Route path='/test' element={<Testing />}/>
   </Routes>
   </BrowserRouter>
  )
}

export default App
