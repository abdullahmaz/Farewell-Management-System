import React from 'react'
import ReactDOM from 'react-dom/client'
import Register from './components/component/register.jsx'
import Login from './components/component/login.jsx'
import Dashboard from './components/component/dashboard.jsx'
import Guest from './components/component/guests.jsx'
import Menu from './components/component/menu.jsx'
import Performance from './components/component/performance.jsx'
import Teacher_family_registration from './components/component/teacher_family_registration.jsx'
import Attendance from './components/component/attendance.jsx'
import Budget from './components/component/budget.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Toaster } from "@/components/ui/toaster"



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Toaster />
    <Router>
        <Routes>
          <Route path='/' element={<Login />}/>
          <Route path='/register' element={<Register />}/>
          <Route path='/dashboard' element={<Dashboard />}/>
          <Route path='/guest' element={<Guest />}/>
          <Route path='/menu' element={<Menu />}/>
          <Route path='/performance' element={<Performance />}/>
          <Route path='/family' element={<Teacher_family_registration />}/>
          <Route path='/attendance' element={<Attendance />}/>
          <Route path='/budget' element={<Budget/>}/>
        </Routes>
    </Router>
  </React.StrictMode>,
)
