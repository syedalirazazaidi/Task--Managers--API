import React from 'react'
// import { Counter } from './features/counter/Counter';
import Dashboard from './pages/Dashboard'
import './App.css'
import TaskCard from './components/taskCard'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Dashboard />
        <div style={{marginTop:20 }}>

        <TaskCard />
        </div>
      </header>
      
    </div>
  )
}

export default App
