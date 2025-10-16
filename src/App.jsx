import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import './index.css'
import TransportRequestPage from './components/IncidentReportPage'
import RMPMApprovalPage from './components/RMPMApprovalPage'
import CabCoordinatorApprovalPage from './components/CabCoordinatorApprovalPage'
import TransportReportPage from './components/TransportReportPage'

export default function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/1" element={<TransportRequestPage />} />
          <Route path="/2" element={<TransportRequestPage showDiscoverCheckbox={false} />} />
          <Route path="/3" element={<RMPMApprovalPage />} />
          <Route path="/4" element={<CabCoordinatorApprovalPage />} />
          <Route path="/5" element={<TransportReportPage />} />
        </Routes>
      </Router>
    </div>
  )
}
