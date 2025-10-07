import React from 'react';
import Navbar from './Navbar';
import Avatars from './Avatars';

const TransportRequestPage = () => {
  return (
    <div className="transport-request-page">
      <Navbar />

      <div style={{ maxWidth: 1100, margin: '24px auto', padding: '0 16px' }}>
        {/* avatars / header */}
        <Avatars />

       
      </div>
    </div>
  );
};

export default TransportRequestPage;
