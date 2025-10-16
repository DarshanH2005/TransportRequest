import React from 'react';
import Navbar from './Navbar';
import Avatars from './Avatars';
import '../styles/CabCoordinatorApproval.css';

const CabCoordinatorApprovalPage = ({ showDiscoverCheckbox = false }) => {
  return (
    <div className="transport-request-page cab-coordinator-page">
      <Navbar />

      <div style={{ maxWidth: 1100, margin: '24px auto', padding: '0 16px' }}>
        {/* avatars / header */}
        <Avatars 
          showDiscoverCheckbox={showDiscoverCheckbox} 
          showTransportDetails={true}
          pageTitle="Cab Coordinator Approval"
        />

       
      </div>
    </div>
  );
};

export default CabCoordinatorApprovalPage;
