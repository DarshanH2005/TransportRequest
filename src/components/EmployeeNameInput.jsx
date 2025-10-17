import React, { useState } from 'react';
import './EmployeeNameInput.css';
import NoteIcon from '../assets/note-icon.svg';
import SearchIcon from '../assets/search-icon.svg';

/**
 * EmployeeNameInput Component
 * 
 * A reusable employee name input field with search and clear functionality,
 * and optional note icon.
 * 
 * @param {string} value - Initial value for the input
 * @param {string} placeholder - Placeholder text (default: "Enter employee name")
 * @param {function} onValueChange - Callback when input value changes
 * @param {boolean} showNote - Show/hide the note icon (default: true)
 * @param {boolean} disabled - Disable the input field (default: false)
 * @param {boolean} useRoute1Style - Use white background style (default: false, uses gray)
 */
const EmployeeNameInput = ({ 
  value = "", 
  placeholder = "Enter employee name",
  onValueChange,
  showNote = true,
  disabled = false,
  useRoute1Style = false, // New prop to control styling
  pageTitle = "" // New prop to identify the route
}) => {
  const [inputValue, setInputValue] = useState(value);
  const [isFocused, setIsFocused] = useState(false);
  const [showNoteModal, setShowNoteModal] = useState(false);

  const handleInputChange = (e) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    if (onValueChange) {
      onValueChange(newValue);
    }
  };

  const handleClearInput = () => {
    setInputValue("");
    if (onValueChange) {
      onValueChange("");
    }
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const toggleNoteModal = () => {
    setShowNoteModal((prev) => !prev);
  };

  const routeClass = useRoute1Style ? 'route1' : 'route-other';
  const dataRoute = useRoute1Style ? 'route1' : 'other';
  const isTransportReportPage = pageTitle === "Transport Report";

  return (
    <div className="employee-name-container">
      <div className="employee-name-header">
        <label className="employee-name-label">Employee Name</label>
        {showNote && (
          <div className="note-section">
            <img 
              src={NoteIcon} 
              alt="Note" 
              className="note-icon" 
              onClick={toggleNoteModal}
              style={{ cursor: 'pointer' }}
            />
          </div>
        )}
      </div>
      
      {/* Note Tooltip */}
      {showNoteModal && (
        <>
          <div className="employee-note-tooltip-overlay" onClick={toggleNoteModal} />
          <div className={`employee-note-tooltip ${isTransportReportPage ? 'transport-report-note' : ''}`}>
            <div className="employee-note-tooltip-beak"></div>
            <div className="employee-note-tooltip-content">
              <div className="employee-note-tooltip-header">
                <div className="employee-note-tooltip-title">Note:</div>
                <button className="employee-note-tooltip-close-btn" onClick={toggleNoteModal}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.12 12L8 9.12L10.88 12L12 10.88L9.12 8L12 5.12L10.88 4L8 6.88L5.12 4L4 5.12L6.88 8L4 10.88L5.12 12ZM8 16C6.89333 16 5.85333 15.79 4.88 15.37C3.90667 14.95 3.06 14.38 2.34 13.66C1.62 12.94 1.05 12.0933 0.63 11.12C0.21 10.1467 0 9.10667 0 8C0 6.89333 0.21 5.85333 0.63 4.88C1.05 3.90667 1.62 3.06 2.34 2.34C3.06 1.62 3.90667 1.05 4.88 0.63C5.85333 0.21 6.89333 0 8 0C9.10667 0 10.1467 0.21 11.12 0.63C12.0933 1.05 12.94 1.62 13.66 2.34C14.38 3.06 14.95 3.90667 15.37 4.88C15.79 5.85333 16 6.89333 16 8C16 9.10667 15.79 10.1467 15.37 11.12C14.95 12.0933 14.38 12.94 13.66 13.66C12.94 14.38 12.0933 14.95 11.12 15.37C10.1467 15.79 9.10667 16 8 16Z" fill="#38AEE0"/>
                  </svg>
                </button>
              </div>
              <ul className="employee-note-tooltip-list">
                {isTransportReportPage ? (
                  <li>Security Escort is deployed for single lady travelers between <b>8pm - 7am</b>.</li>
                ) : (
                  <>
                    <li>Security Escort is deployed for single lady travelers between <b>8pm - 7am</b>.</li>
                    <li>Be present at logout area near Phoenix ground floor reception 5 minutes prior to the scheduled departure time.</li>
                    <li>In case cab details are not received & to reschedule the drop time, kindly reach out to transport desk.</li>
                    <li>Only two postpones or changes in timing shall be accommodated in a day.</li>
                    <li>To cancel the request, withdraw workflow 30 minutes prior to the booked time.</li>
                    <li>No intimations or reminder call will be done by transport team in case you are not present at logout time.</li>
                    <li>In case of no show, the trip cost will be charged to respective cost center, even if the employee has not travelled.</li>
                    <li>Expect delay in cab departure during monsoon seasons or heavy traffic in the vicinity.</li>
                    <li>Ensure to sign the trip sheets with your name & Gen ID without fail.</li>
                    <li>You are not required to carry the copy of this mail, for boarding.</li>
                    <li>Kindly avoid conversations with the driver, reach out to transport team for support.</li>
                    <li>In case of cab tool error send email to srib.transport@samsung.com hour prior to the required time, workflow/email is mandatory to arrange cab.</li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </>
      )}
      
      <div className="employee-input-wrapper">
        <div 
          className={`employee-input-container ${isFocused ? 'focused' : ''} ${disabled ? 'disabled' : ''} ${routeClass}`}
          data-route={dataRoute}
        >
          <div className="eni-input-field-container">
            <input
              type="text"
              value={inputValue}
              placeholder={placeholder}
              onChange={handleInputChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              disabled={disabled}
              className="employee-name-field"
              spellCheck={false}
            />
            {inputValue && (
              <button className="clear-button" onClick={handleClearInput} type="button">
                <img src={CloseIcon} alt="Clear" className="clear-icon-right" />
              </button>
            )}
            <img src={SearchIcon} alt="Search" className="search-icon-right" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeNameInput;
