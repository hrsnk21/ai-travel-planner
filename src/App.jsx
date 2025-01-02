import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import CreateTrip from './pages/CreateTrip'
import { Toaster } from 'react-hot-toast'
import Trip from './pages/Trip'
import useAuthStore
 from './context/auth'
const App = () => {
  const {isAuthenticated} = useAuthStore()
  return (
    <div  data-theme="night" className='h-screen w-full'>
      <Toaster  position="top-right" reverseOrder={false}/>
      <Navbar/>
      <Routes>
        <Route element={<Home/>} path='/' />
        <Route element={isAuthenticated ? <CreateTrip/> : <Home/>} path='/createtrip'/>
        <Route element={isAuthenticated ? <Trip/> : <Home/>} path='/trip'/>
      </Routes>
    </div>
  )
}

export default App
