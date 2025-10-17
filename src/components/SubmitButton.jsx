import React from 'react';
import './SubmitButton.css';

/**
 * Submit Button Component
 * Based on Figma design specification
 * 
 * @param {function} onClick - Click handler for the submit button
 * @param {boolean} disabled - Disable the button (default: false)
 */
const SubmitButton = ({ onClick, disabled = false }) => {
  return (
    <button
      className="submit-button"
      onClick={onClick}
      disabled={disabled}
      type="button"
    >
      <span className="submit-button-text">Submit</span>
    </button>
  );
};

export default SubmitButton;
