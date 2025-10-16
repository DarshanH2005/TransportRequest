import React from 'react';
import Navbar from './Navbar';
import Avatars from './Avatars';
import '../styles/RMPMApproval.css';

const RMPMApprovalPage = ({ showDiscoverCheckbox = false }) => {
  return (
    <div className="transport-request-page rmpm-approval-page">
      <Navbar />

      <div style={{ maxWidth: 1100, margin: '24px auto', padding: '0 16px' }}>
        {/* avatars / header */}
        <Avatars 
          showDiscoverCheckbox={showDiscoverCheckbox} 
          showTransportDetails={true}
          pageTitle="RM/PM Approval"
        />

       
      </div>
    </div>
  );
};

export default RMPMApprovalPage;
