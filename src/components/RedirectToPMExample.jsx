import React, { useState } from 'react';
import RedirectToPM from './RedirectToPM';

/**
 * Example usage of RedirectToPM component
 * 
 * This component can be integrated into your Transport Request form
 * or any other page where PM redirection is needed.
 */
const RedirectToPMExample = () => {
  // Sample project data - replace with your actual data
  const projects = [
    { value: 'IoT_Advanced_Features_(SRI_B)_Y2025', label: 'IoT_Advanced_Features_(SRI_B)_Y2025' },
    { value: 'Project_Alpha_2025', label: 'Project_Alpha_2025' },
    { value: 'Project_Beta_Q1', label: 'Project_Beta_Q1' },
  ];

  const [selectedProject, setSelectedProject] = useState('IoT_Advanced_Features_(SRI_B)_Y2025');

  const handleProjectChange = (projectValue) => {
    setSelectedProject(projectValue);
    console.log('Selected Project:', projectValue);
  };

  const handleTransfer = (projectValue) => {
    console.log('Transferring to PM for project:', projectValue);
    // Add your transfer logic here
    // e.g., API call to transfer workflow
    alert(`Workflow transferred to PM for project: ${projectValue}`);
  };

  return (
    <div style={{ padding: '20px' }}>
      <RedirectToPM
        projects={projects}
        selectedProject={selectedProject}
        onProjectChange={handleProjectChange}
        onTransfer={handleTransfer}
      />
    </div>
  );
};

export default RedirectToPMExample;
