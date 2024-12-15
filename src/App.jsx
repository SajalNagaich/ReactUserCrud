import React from 'react'
import Navbar from './component/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CreateUser from './pages/CreateUser'
import { Toaster } from 'react-hot-toast'
import AllUser from './pages/AllUser'
import EditUser from './pages/EditUser'

const App = () => {
  return (
    <div>
        
        <BrowserRouter>
        <Toaster></Toaster>
        <Navbar></Navbar>
        <Routes>
            <Route path="/createuser" element={<CreateUser></CreateUser>}></Route>
            <Route path='/alluser' element={<AllUser></AllUser>}></Route>
            <Route path='/edituser' element = {<EditUser></EditUser>} ></Route>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App