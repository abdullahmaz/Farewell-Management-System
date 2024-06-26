import React from 'react'
import ReactDOM from 'react-dom/client'
import Register from './components/component/register.jsx'
import Login from './components/component/login.jsx'
import Dashboard from './components/component/dashboard.jsx'
import Guest from './components/component/guests.jsx'
import Menu from './components/component/menu.jsx'
import Performance from './components/component/performance.jsx'
import TeacherFamilyRegistration from './components/component/teacher_family_registration.jsx'
import Attendance from './components/component/attendance.jsx'
import Budget from './components/component/budget.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Toaster } from "@/components/ui/toaster"
import SeniorStudents from './components/component/senior_students.jsx'
import Invitations from './components/component/invitations.jsx'
import { useState } from 'react'

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <React.StrictMode>
      <Toaster />
      <Router>
        <Routes>
          <Route path='/' element={<Login setUser={setUser} />} />
          <Route path='/register' element={<Register setUser={setUser} />} />
          <Route path='/dashboard' element={<Dashboard user={user} setUser={setUser}/>} />
          <Route path='/guests' element={<Guest user={user} setUser={setUser}/>} />
          <Route path='/invitations' element={<Invitations user={user} setUser={setUser}/>} />
          <Route path='/menu' element={<Menu user={user} setUser={setUser}/>} />
          <Route path='/performance' element={<Performance user={user} setUser={setUser}/>} />
          <Route path='/attendance' element={<Attendance user={user} setUser={setUser}/>} />
          <Route path='/budget' element={<Budget user={user} setUser={setUser}/>} />
          <Route path='/teacher_family' element={<TeacherFamilyRegistration />} />
          <Route path='/senior_students' element={<SeniorStudents />} />
        </Routes>
      </Router>
    </React.StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
