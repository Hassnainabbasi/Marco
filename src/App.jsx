import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import CustomerAccount from './pages/Account/CustomerAccount'
import Login from './auth/Login'
import GetCategories from './pages/GetCategories/GetCategories'
import Testing from './tools/Testing'
import Myads from './pages/MyAds/Myads'
import Post from './pages/Post/Post'
import EditProfile from './pages/editProfile/EditProfile'
import PostAd from './pages/Post/PostAd'

function App() {

  return (
   <BrowserRouter >
   <Routes >
    <Route index element={<Home />}></Route>
    <Route path='/auth' element={<Login />}/>
   <Route path="/customer-account" element={<CustomerAccount />}/>
   <Route path="/my-ads" element={<Myads />}/>
   <Route path="/post" element={<Post />}/>
   <Route path="/post/attributes" element={<PostAd />}/>
   <Route path="/edit-profile" element={<EditProfile />}/>
   <Route path='/get-cat' element={<GetCategories />}/>
   <Route path='/test' element={<Testing />}/>
   </Routes>
   </BrowserRouter>
  )
}

export default App
