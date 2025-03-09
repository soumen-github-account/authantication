import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from "./src/Pages/Home"; 
import Login from './src/Pages/Login'
import EmailVerify from './src/Pages/EmailVerify'
import ResetPassword from './src/Pages/ResetPassword'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
  return (
    <div>
      <ToastContainer/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/email-verify' element={<EmailVerify/>}/>
      <Route path='/reset-password' element={<ResetPassword/>}/>
      
      </Routes>
    </div>
  )
}

export default App
