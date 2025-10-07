import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import './index.css'
import TransportRequestPage from './components/IncidentReportPage'

export default function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/1" element={<TransportRequestPage />} />
        </Routes>
      </Router>
    </div>
  )
}
