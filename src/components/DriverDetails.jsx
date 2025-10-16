import React, { useState } from "react";
import {
  Box,
  InputBase,
} from "@mui/material";
import {
  LocalizationProvider,
  DatePicker,
  TimePicker,
} from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import "../styles/DriverDetails.css";
import calendarIcon from "../assets/Calendar2.svg";
import clockIcon from "../assets/clock-new.svg";

const DriverDetails = ({ 
  onDataChange,
  initialData = {},
  isEditable = false 
}) => {
  const [driverName, setDriverName] = useState(initialData.driverName || "Madhu");
  const [driverMobile, setDriverMobile] = useState(initialData.driverMobile || "8050165770");
  const [opDateTime, setOpDateTime] = useState(initialData.opDateTime || new Date(2025, 5, 20, 12, 0));
  const [openKM, setOpenKM] = useState(initialData.openKM || "20km");
  const [noOfWarnings, setNoOfWarnings] = useState(initialData.noOfWarnings || "0");

  const handleChange = (field, value) => {
    const updatedData = {
      driverName,
      driverMobile,
      opDateTime,
      openKM,
      noOfWarnings,
      [field]: value
    };

    if (onDataChange) {
      onDataChange(updatedData);
    }
  };

  return (
    <Box className="driver-details-container">
      <Box className="form-section">
        <div className="section-label">Driver Details</div>

        {/* First Row: Driver Name | Driver Mobile Number | OP Data Time */}
        <div className="driver-row driver-row-three-col">
          <div className="driver-field">
            <label className="input-label">Driver Name</label>
            <InputBase
              className="input-base"
              value={driverName}
              onChange={(e) => {
                const value = e.target.value;
                setDriverName(value);
                handleChange('driverName', value);
              }}
              disabled={!isEditable}
            />
          </div>
          
          <div className="driver-field">
            <label className="input-label">Driver Mobile Number</label>
            <InputBase
              className="input-base"
              value={driverMobile}
              onChange={(e) => {
                const value = e.target.value;
                setDriverMobile(value);
                handleChange('driverMobile', value);
              }}
              disabled={!isEditable}
            />
          </div>

          <div className="driver-field op-datetime-field">
            <label className="input-label">
              OP Data Time <span className="required-star">*</span>
            </label>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <div className="op-datetime-wrapper">
                <DatePicker
                  value={opDateTime}
                  onChange={(date) => {
                    setOpDateTime(date);
                    handleChange('opDateTime', date);
                  }}
                  format="dd-MMM-yyyy"
                  disabled={!isEditable}
                  slotProps={{
                    textField: {
                      variant: "outlined",
                      className: "op-date-input",
                      InputProps: { 
                        endAdornment: <img src={calendarIcon} alt="Calendar" className="calendar-icon" /> 
                      }
                    }
                  }}
                />
                <TimePicker
                  value={opDateTime}
                  onChange={(time) => {
                    setOpDateTime(time);
                    handleChange('opDateTime', time);
                  }}
                  format="hh:mm a"
                  disabled={!isEditable}
                  slotProps={{
                    textField: {
                      variant: "outlined",
                      className: "op-time-input",
                      InputProps: { 
                        endAdornment: <img src={clockIcon} alt="Clock" className="calendar-icon" /> 
                      }
                    }
                  }}
                />
              </div>
            </LocalizationProvider>
          </div>
        </div>

        {/* Second Row: Open KM | No of warnings - Combined Input */}
        <div className="driver-row driver-row-single">
          <div className="driver-field km-warnings-field">
            <div className="km-warnings-labels">
              <label className="input-label">Open KM</label>
              <label className="input-label warnings-label">No of warnings</label>
            </div>
            <div className="km-warnings-wrapper">
              <div className="open-km-input-wrapper">
                <InputBase
                  className="input-base open-km-input"
                  value={openKM}
                  onChange={(e) => {
                    const value = e.target.value;
                    setOpenKM(value);
                    handleChange('openKM', value);
                  }}
                  disabled={!isEditable}
                />
                <svg className="info-icon" width="22" height="14" viewBox="0 0 22 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11 9.69231C12.215 9.69231 13.2 10.6566 13.2 11.8462C13.2 13.0357 12.215 14 11 14C10.5856 14 10.198 13.8878 9.86706 13.6928L6.6 11.8462L9.86711 9.99945C10.198 9.80447 10.5856 9.69231 11 9.69231ZM11 0C17.0751 0 22 4.82155 22 10.7692V12.3846H16.5V10.7692C16.5 7.79542 14.0375 5.38462 11 5.38462C7.9624 5.38462 5.5 7.79542 5.5 10.7692V12.3846H0V10.7692C0 4.82155 4.92486 0 11 0ZM20.35 10.7692C20.35 8.43829 19.46 6.31082 17.9947 4.69474L16.4355 6.22128C17.5044 7.44466 18.15 9.03312 18.15 10.7692H20.35ZM4.79375 3.92264L6.35294 5.44912C7.46928 4.51365 8.88355 3.90907 10.4371 3.79061V1.6317C8.27668 1.75732 6.31367 2.60109 4.79375 3.92264ZM15.6586 5.45887L17.2176 3.93255C15.6901 2.60007 13.7132 1.75092 11.5371 1.63025V3.78872C13.1062 3.90282 14.5344 4.51269 15.6586 5.45887ZM1.65 10.7692H3.85C3.85 9.02774 4.49955 7.43481 5.57441 6.20997L4.01538 4.68359C2.54402 6.30102 1.65 8.43295 1.65 10.7692Z" fill="#6E7A89"/>
                </svg>
              </div>
              
              <div className="warnings-input-wrapper">
                <InputBase
                  className="input-base warnings-input"
                  value={noOfWarnings}
                  onChange={(e) => {
                    const value = e.target.value;
                    setNoOfWarnings(value);
                    handleChange('noOfWarnings', value);
                  }}
                  disabled={!isEditable}
                />
                <svg className="warning-icon" width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21.7505 15.4287L12.6139 0.859026C12.2816 0.327474 11.6662 0 11 0C10.3338 0 9.71842 0.327738 9.3861 0.859026L0.249498 15.4287C-0.0833376 15.9592 -0.0830799 16.6129 0.249755 17.1433C0.582848 17.6738 1.19799 18.0005 1.8634 18H20.1366C20.8023 18.0003 21.4174 17.6738 21.7502 17.1433C22.0831 16.6129 22.0833 15.9592 21.7505 15.4287ZM12.1001 15.7496H9.90018V13.4997H12.1001V15.7496ZM12.1001 4.49974V12.3744H9.90018V4.49947L12.1001 4.49974Z" fill="#6E7A89"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </Box>
    </Box>
  );
};

export default DriverDetails;
