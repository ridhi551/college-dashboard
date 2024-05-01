import { useState } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Student from './pages/Student'
import Admin from './pages/Admin'
import Teacher from './pages/Teacher'
import TimeTable from './pages/GeneratorTimeTable'
import Assignments from './components/students/Assignments'
import DayClass from './components/students/DayClass'
import Results from './components/students/Results'
import Updates from './components/students/Updates'
import PushUpdates from './components/admin/updates/PushUpdates'



function App() {
  

  return (
    <>
      <BrowserRouter >
      <Routes >
        <Route path="/" element ={<Home />}/>
        <Route path="/student" element ={<Student />}/>
        <Route path="/admin" element ={<Admin />}/>
        <Route path="/teacher" element ={<Teacher />}/>
        <Route path="/timetable" element ={<TimeTable />}/>
        
        <Route path="/student/assign" element ={<Assignments />}/>
        <Route path="/student/dayclasses" element ={<DayClass />}/>
        <Route path="/student/results" element ={<Results />}/>
        <Route path="/student/updates" element ={<Updates />}/>


        <Route path="/admin/push_updates" element ={<PushUpdates />}/>

      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
