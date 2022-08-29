import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from './pages/Dashboard'
import './App.css'
import TaskCard from './components/taskCard'
import EditTask from './components/editTask'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/editTask" element={<EditTask />} />
          </Routes>
        </Router>
        
        {/* <Dashboard />
        <div style={{marginTop:20 }}>

       
        {/* <EditTask/> */}
        {/* </div> */}
      </header>
      
    </div>
  )
}

export default App
