import React, { useState } from 'react';
import './RequestTypeSection.css';
import NoteIcon from '../assets/note-icon.svg';
import CloseIcon from '../assets/close-icon.svg';

const RequestTypeSection = () => {
  const [showNoteModal, setShowNoteModal] = useState(false);

  const toggleNoteModal = () => {
    setShowNoteModal((prev) => !prev);
  };

  return (
    <div className="request-type-container">
      <div className="request-type-header">
        <label className="request-type-label">Request Type</label>
        <div className="note-section">
          <img 
            src={NoteIcon} 
            alt="Note" 
            className="note-icon" 
            onClick={toggleNoteModal}
            style={{ cursor: 'pointer' }}
          />
        </div>
      </div>
      
      {/* Note Tooltip */}
      {showNoteModal && (
        <>
          <div className="request-note-tooltip-overlay" onClick={toggleNoteModal} />
          <div className="request-note-tooltip">
            <div className="request-note-tooltip-beak"></div>
            <div className="request-note-tooltip-content">
              <div className="request-note-tooltip-header">
                <div className="request-note-tooltip-title">Note:</div>
                <button className="request-note-tooltip-close-btn" onClick={toggleNoteModal}>
                  <img src={CloseIcon} alt="Close" className="request-note-tooltip-close-icon" />
                </button>
              </div>
              <ul className="request-note-tooltip-list">
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
      
      {/* Radio Options */}
      <div className="request-type-options">
        <label className="radio-option">
          <input type="radio" name="requestType" value="lateNight" defaultChecked />
          <span className="radio-label">Late Night</span>
        </label>
        <label className="radio-option">
          <input type="radio" name="requestType" value="weekend" disabled />
          <span className="radio-label">Weekend / Holiday</span>
        </label>
        <label className="radio-option">
          <input type="radio" name="requestType" value="adhoc" disabled />
          <span className="radio-label">Adhoc</span>
        </label>
      </div>
    </div>
  );
};

export default RequestTypeSection;
