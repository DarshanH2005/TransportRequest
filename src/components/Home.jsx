import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1 className="home-title">Transport Request</h1>

      <div className="home-actions">
        <button className="home-button primary" onClick={() => navigate('/1')}>
         Employee Request 1
        </button>
        <button className="home-button primary" onClick={() => navigate('/2')}>
         Employee Request 2
        </button>
        <button className="home-button primary" onClick={() => navigate('/3')}>
         RM/PM Approval
        </button>
        <button className="home-button primary" onClick={() => navigate('/4')}>
         Cab Coordinator Approval
        </button>
        <button className="home-button primary" onClick={() => navigate('/5')}>
         Transport Report
        </button>
      </div>
    </div>
  );
};

export default Home;