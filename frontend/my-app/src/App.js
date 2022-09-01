import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from './pages/Dashboard'
import './App.css'
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
      </header>
      
    </div>
  )
}

export default App
