import React, { useState } from 'react';
import './EmployeeNameInput.css';
import NoteIcon from '../assets/note-icon.svg';
import CloseIcon from '../assets/close-icon.svg';
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
  useRoute1Style = false // New prop to control styling
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
          <div className="employee-note-tooltip">
            <div className="employee-note-tooltip-beak"></div>
            <div className="employee-note-tooltip-content">
              <div className="employee-note-tooltip-header">
                <div className="employee-note-tooltip-title">Note:</div>
                <button className="employee-note-tooltip-close-btn" onClick={toggleNoteModal}>
                  <img src={CloseIcon} alt="Close" className="employee-note-tooltip-close-icon" />
                </button>
              </div>
              <ul className="employee-note-tooltip-list">
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
