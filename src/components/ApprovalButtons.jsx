import React from 'react';
import '../styles/ApprovalButtons.css';

const ApprovalButtons = ({ onApprove, onReject, disabled = false }) => {
  return (
    <div className="approval-buttons-container">
      <button
        className="reject-button"
        onClick={onReject}
        disabled={disabled}
        type="button"
      >
        Reject
      </button>
      <button
        className="approval-button"
        onClick={onApprove}
        disabled={disabled}
        type="button"
      >
        Approval
      </button>
    </div>
  );
};

export default ApprovalButtons;
