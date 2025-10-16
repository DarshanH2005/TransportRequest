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
import "../styles/TransportDetails.css";
import calendarIcon from "../assets/Calendar2.svg";
import clockIcon from "../assets/clock-new.svg";

// Custom Radio Icon Component matching Figma design
const RadioIcon = ({ isSelected }) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle 
      cx="10" 
      cy="10" 
      r="9" 
      stroke={isSelected ? "#838383" : "#c4c6cbff"} 
      strokeWidth="2"
      fill="none"
    />
    {isSelected ? (
      <circle cx="10" cy="10" r="5" fill="#838383" />
    ) : (
      <circle cx="10" cy="10" r="5" fill="#ffffffff" />
    )}
  </svg>
);

const TransportDetails = ({ 
  onDataChange,
  initialData = {},
  isEditable = false 
}) => {
  const [tripType, setTripType] = useState(initialData.tripType || "Trip Details");
  const [vendorName, setVendorName] = useState(initialData.vendorName || "Alliance");
  const [tripSheetNo, setTripSheetNo] = useState(initialData.tripSheetNo || "114283/13");
  const [tripDate, setTripDate] = useState(initialData.tripDate || new Date(2025, 5, 20));
  const [tripTime, setTripTime] = useState(initialData.tripTime || new Date(2025, 5, 20, 12, 0));
  const [vehicleModel, setVehicleModel] = useState(initialData.vehicleModel || "Tata Indica");
  const [vehicleNo, setVehicleNo] = useState(initialData.vehicleNo || "KA-03-MH-2880");

  const handleChange = (field, value) => {
    const updatedData = {
      tripType,
      vendorName,
      tripSheetNo,
      tripDate,
      tripTime,
      vehicleModel,
      vehicleNo,
      [field]: value
    };

    if (onDataChange) {
      onDataChange(updatedData);
    }
  };

  const handleTripTypeChange = (type) => {
    setTripType(type);
    handleChange('tripType', type);
  };

  return (
    <Box className="transport-details-container">
      <Box className="form-section">
        <div className="section-label">Transport Details</div>
        
        {/* Custom Radio Buttons */}
        <div className="custom-radio-row">
          <div 
            className="custom-radio-option"
            onClick={() => !isEditable && handleTripTypeChange("Trip Details")}
            style={{ cursor: isEditable ? 'not-allowed' : 'pointer' }}
          >
            <RadioIcon isSelected={tripType === "Trip Details"} />
            <span className={`trip-type-label ${tripType === "Trip Details" ? 'selected' : ''}`}>
              Trip Details
            </span>
          </div>
          
          <div 
            className="custom-radio-option"
            onClick={() => !isEditable && handleTripTypeChange("Driver Details")}
            style={{ cursor: isEditable ? 'not-allowed' : 'pointer' }}
          >
            <RadioIcon isSelected={tripType === "Driver Details"} />
            <span className={`trip-type-label ${tripType === "Driver Details" ? 'selected' : ''}`}>
              Driver Details
            </span>
          </div>
        </div>

        {/* First Row: Vendor Name | Trip Sheet No | Trip Schedule for */}
        <div className="transport-row transport-row-three-col">
          <div className="transport-field">
            <label className="input-label">Vendor Name</label>
            <InputBase
              className="input-base"
              value={vendorName}
              onChange={(e) => {
                const value = e.target.value;
                setVendorName(value);
                handleChange('vendorName', value);
              }}
              disabled={!isEditable}
            />
          </div>
          
          <div className="transport-field">
            <label className="input-label">Trip Sheet No</label>
            <InputBase
              className="input-base"
              value={tripSheetNo}
              onChange={(e) => {
                const value = e.target.value;
                setTripSheetNo(value);
                handleChange('tripSheetNo', value);
              }}
              disabled={!isEditable}
            />
          </div>

          <div className="transport-field trip-schedule-field">
            <label className="input-label">
              Trip Schedule for <span className="required-star">*</span>
            </label>
            <div className="trip-schedule-inputs">
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  value={tripDate}
                  onChange={(date) => {
                    setTripDate(date);
                    handleChange('tripDate', date);
                  }}
                  format="dd-MMM-yyyy"
                  disabled={!isEditable}
                  slotProps={{
                    textField: {
                      variant: "outlined",
                      className: "trip-date-input",
                      InputProps: { 
                        endAdornment: <img src={calendarIcon} alt="Calendar" className="calendar-icon" /> 
                      }
                    }
                  }}
                />
                <TimePicker
                  value={tripTime}
                  onChange={(time) => {
                    setTripTime(time);
                    handleChange('tripTime', time);
                  }}
                  format="hh:mm a"
                  disabled={!isEditable}
                  slotProps={{
                    textField: {
                      variant: "outlined",
                      className: "trip-time-input",
                      InputProps: { 
                        endAdornment: <img src={clockIcon} alt="Clock" className="calendar-icon" /> 
                      }
                    }
                  }}
                />
              </LocalizationProvider>
            </div>
          </div>
        </div>

        {/* Second Row: Vehicle Model | Vehicle No */}
        <div className="transport-row transport-row-two-col">
          <div className="transport-field">
            <label className="input-label">Vehicle Model</label>
            <InputBase
              className="input-base"
              value={vehicleModel}
              onChange={(e) => {
                const value = e.target.value;
                setVehicleModel(value);
                handleChange('vehicleModel', value);
              }}
              disabled={!isEditable}
            />
          </div>
          
          <div className="transport-field">
            <label className="input-label">Vehicle No</label>
            <InputBase
              className="input-base"
              value={vehicleNo}
              onChange={(e) => {
                const value = e.target.value;
                setVehicleNo(value);
                handleChange('vehicleNo', value);
              }}
              disabled={!isEditable}
            />
          </div>
        </div>
      </Box>
    </Box>
  );
};

export default TransportDetails;
