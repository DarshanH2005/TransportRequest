import React, { useState } from 'react';
import '../styles/RedirectToPM.css';

const RedirectToPM = ({ projects = [], selectedProject = '', onProjectChange, onTransfer }) => {
  const [isRedirectChecked, setIsRedirectChecked] = useState(false);

  const handleCheckboxChange = (e) => {
    setIsRedirectChecked(e.target.checked);
  };

  const handleTransferClick = () => {
    if (isRedirectChecked && selectedProject && onTransfer) {
      onTransfer(selectedProject);
    }
  };

  return (
    <div className="redirect-to-pm-container">
      <h3 className="redirect-title">Redirect to PM</h3>
      
      <div className="redirect-checkbox-wrapper">
        <label className="redirect-checkbox-label">
          <input
            type="checkbox"
            checked={isRedirectChecked}
            onChange={handleCheckboxChange}
            className="redirect-checkbox"
          />
          <span className="checkbox-icon">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              {isRedirectChecked ? (
                <>
                  <rect width="16" height="16" rx="2" fill="#838383"/>
                  <path d="M4 8L7 11L12 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </>
              ) : (
                <rect width="16" height="16" rx="2" stroke="#838383" fill="white"/>
              )}
            </svg>
          </span>
          <span className="checkbox-text">Redirect this workflow to selected project PM</span>
        </label>
      </div>

      <div className="project-field-container">
        <label className="project-label">Project</label>
        <div className="project-input-row">
          <div className="project-select-wrapper">
            <select
              value={selectedProject}
              onChange={(e) => onProjectChange && onProjectChange(e.target.value)}
              className="project-select"
              disabled={!isRedirectChecked}
            >
              <option value="">Select a project</option>
              {projects.map((project, index) => (
                <option key={index} value={project.value}>
                  {project.label}
                </option>
              ))}
            </select>
            <svg className="chevron-icon" width="23" height="23" viewBox="0 0 23 23" fill="none">
              <path d="M5 9L11.5 15L18 9" stroke="#202224" strokeWidth="1.894" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          <button
            className="transfer-button"
            onClick={handleTransferClick}
            disabled={!isRedirectChecked || !selectedProject}
          >
            Transfer to PM
          </button>
        </div>
      </div>
    </div>
  );
};

export default RedirectToPM;
