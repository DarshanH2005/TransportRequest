import React from 'react';
import Navbar from './Navbar';
import Avatars from './Avatars';
import '../styles/TransportReport.css';

const TransportReportPage = ({ showDiscoverCheckbox = false }) => {
  return (
    <div className="transport-request-page transport-report-page">
      <Navbar />

      <div style={{ maxWidth: 1100, margin: '24px auto', padding: '0 16px' }}>
        {/* avatars / header */}
        <Avatars 
          showDiscoverCheckbox={showDiscoverCheckbox} 
          showTransportDetails={true}
          pageTitle="Transport Report"
        />

       
      </div>
    </div>
  );
};

export default TransportReportPage;
