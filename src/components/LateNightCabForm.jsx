import React, { useState } from "react";
import {
  Box,
  Button,
  InputBase,
  Select,
  MenuItem,
  Checkbox,
  Snackbar,
  Alert,
} from "@mui/material";
import {
  LocalizationProvider,
  TimePicker,
} from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import "../styles/LateNightCabForm.css";
import clockIcon from "../assets/clock.svg";
import TransportDetails from "./TransportDetails";
import DriverDetails from "./DriverDetails";
import RedirectToPM from "./RedirectToPM";
import ApprovalButtons from "./ApprovalButtons";

// Custom dropdown icon
const CustomDropdownIcon = () => (
  <svg width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ paddingRight: '25px' }}>
    <path d="M14.266 1.15967L7.63789 7.78779L1.00977 1.15967" stroke="#202224" strokeWidth="1.89375" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const projectList = [
  "IoT_Advanced_Features_(SRI_B)_Y2025",
  "Project X",
  "Project Y",
];

const mainAreaList = [
  { value: "A Narayanapura", label: "A Narayanapura" },
  { value: "Banaswadi", label: "Banaswadi" },
  { value: "KR Puram", label: "KR Puram" },
];

const reportingBuildings = ["Phoenix", "Orion", "Galaxy"];

const LateNightCabForm = ({ onSubmit, showDiscoverCheckbox = true, showTransportDetails = false, pageTitle = "" }) => {
  const [project, setProject] = useState(projectList[0]);
  const [cabTiming, setCabTiming] = useState(new Date());
  const [mainArea, setMainArea] = useState(mainAreaList[0].value);
  const [reportingBuilding, setReportingBuilding] = useState(reportingBuildings[0]);
  const [landmark, setLandmark] = useState("");
  const [extensionNo, setExtensionNo] = useState("Phoenix");
  const [mobileNo, setMobileNo] = useState("+91 7550142047");
  const [reason, setReason] = useState("");
  const [comment, setComment] = useState("");
  const [isMobileDifferent, setIsMobileDifferent] = useState(true);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  
  // Redirect to PM state
  const [selectedPMProject, setSelectedPMProject] = useState("IoT_Advanced_Features_(SRI_B)_Y2025");
  
  // Check if this is Cab Coordinator or Transport Report page
  const isCabCoordinatorPage = pageTitle === "Cab Coordinator Approval";
  const isTransportReportPage = pageTitle === "Transport Report";

  const handleMobileCheckbox = (e) => setIsMobileDifferent(e.target.checked);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const formData = {
      cabType: "Late Night",
      project,
      cabTiming,
      reportingBuilding,
      mainArea,
      landmark,
      extensionNo,
      mobileNo,
      reason,
      comment,
      isMobileDifferent,
    };

    setSnackbarOpen(true);
    
    // Call parent's onSubmit if provided
    if (onSubmit) {
      setTimeout(() => {
        onSubmit(formData);
      }, 1200);
    }
  };

  const handlePMProjectChange = (projectValue) => {
    setSelectedPMProject(projectValue);
    console.log('Selected PM Project:', projectValue);
  };

  const handlePMTransfer = (projectValue) => {
    console.log('Transferring workflow to PM for project:', projectValue);
    // Add your transfer logic here
    alert(`Workflow transferred to PM for project: ${projectValue}`);
  };

  const handleApprove = () => {
    console.log('Request approved');
    setSnackbarOpen(true);
    // Add your approval logic here
    if (onSubmit) {
      setTimeout(() => {
        onSubmit({ status: 'approved' });
      }, 1200);
    }
  };

  const handleReject = () => {
    console.log('Request rejected');
    alert('Request rejected');
    // Add your rejection logic here
    if (onSubmit) {
      onSubmit({ status: 'rejected' });
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Box className="employee-container">
        {/* Project Details */}
        <Box className="form-section">
          <div className="section-label">Project Details</div>
          <br />
          <div className="input-label">Project</div>
          <Select
            value={project}
            onChange={(e) => setProject(e.target.value)}
            className="project-input"
            IconComponent={CustomDropdownIcon}
          >
            {projectList.map((p) => (
              <MenuItem key={p} value={p}>
                {p}
              </MenuItem>
            ))}
          </Select>
        </Box>
        <br />

        {/* Booking Details */}
        <Box className="form-section">
          <div className="section-label">Booking Details</div>
          <br />
          <div className="booking-details-row">
            {/* Cab Timing for Late Night */}
            <div className="booking-col">
              <div className="input-label">Cab Timing</div>
              <TimePicker
                value={cabTiming}
                onChange={setCabTiming}
                format="hh:mm a"
                slots={{
                  openPickerIcon: () => (
                    <img src={clockIcon} alt="Clock" className="cab-time-icon" />
                  ),
                }}
                slotProps={{
                  textField: {
                    variant: "outlined",
                    className: "cab-timing-input",
                    InputProps: { endAdornment: null },
                  },
                }}
              />
            </div>

            {/* Reporting Building */}
            <div className="booking-col">
              <div className="input-label">Reporting Building</div>
              <InputBase
                fullWidth
                value={reportingBuilding}
                onChange={(e) => setReportingBuilding(e.target.value)}
                className="input-base"
                placeholder="Enter reporting building"
              />
            </div>
          </div>

          {/* Main Area and Landmark */}
          <div className="booking-details-row">
            <div className="booking-col">
              <div className="input-label">
                Main/ Closest Area <span className="required-star">*</span>
              </div>
              <Select
                fullWidth
                value={mainArea}
                onChange={(e) => setMainArea(e.target.value)}
                className="input-select"
                IconComponent={CustomDropdownIcon}
              >
                {mainAreaList.map((a) => (
                  <MenuItem key={a.value} value={a.value}>
                    {a.label}
                  </MenuItem>
                ))}
              </Select>
            </div>
            <div className="booking-col">
              <div className="input-label">Landmark/ Locality</div>
              <InputBase
                fullWidth
                value={landmark}
                onChange={(e) => setLandmark(e.target.value)}
                className="input-base"
                placeholder="Type your Landmark here..."
              />
            </div>
          </div>
        </Box>

        {/* Contact Details */}
        <Box className="form-section">
          <div className="section-label">Contact Details</div>
          <br />
          <div className="contact-details-row">
            <div className="booking-col">
              <label className="input-label">Extension No</label>
              <InputBase
                className="input-base"
                value={extensionNo}
                onChange={(e) => setExtensionNo(e.target.value)}
              />
            </div>
            <div className="booking-col">
              <label className="input-label">Mobile No</label>
              <InputBase
                className="input-base"
                value={mobileNo}
                onChange={(e) => setMobileNo(e.target.value)}
              />
              {showDiscoverCheckbox && (
                <div className="discover-checkbox-row">
                  <Checkbox
                    checked={isMobileDifferent}
                    onChange={handleMobileCheckbox}
                    className="discover-checkbox"
                    color="primary"
                    size="small"
                  />
                  <span className="discover-checkbox-label">
                    We found this Mobile Number is different from Discover. Do you want to Update in Discover?
                  </span>
                </div>
              )}
            </div>
          </div>
        </Box>

        {/* Transport Details Section */}
        {showTransportDetails && <TransportDetails isEditable={true} />}

        {/* Driver Details Section */}
        {showTransportDetails && <DriverDetails isEditable={true} />}

        {/* Redirect to PM Section - Hide for Cab Coordinator and Transport Report */}
        {showTransportDetails && !isCabCoordinatorPage && !isTransportReportPage && (
          <RedirectToPM
            projects={projectList.map(p => ({ value: p, label: p }))}
            selectedProject={selectedPMProject}
            onProjectChange={handlePMProjectChange}
            onTransfer={handlePMTransfer}
          />
        )}

        {/* Reason for Using Cab - Hide for Cab Coordinator and Transport Report */}
        {!isCabCoordinatorPage && !isTransportReportPage && (
          <Box className="form-section">
            <div className="input-label">Reason for Using Cab</div>
            <InputBase
              fullWidth
              multiline
              minRows={3}
              maxRows={4}
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              className="reason-input"
              placeholder="xxx-xxx-xx-xxx"
              defaultValue={"xxx-xxx-xx-xxx"}
            />
          </Box>
        )}

        {/* Comment - Hide for Transport Report */}
        {!isTransportReportPage && (
          <Box className="form-section">
            <div className="input-label">Comment (Max 500 Chars)</div>
            <InputBase
              fullWidth
              multiline
              minRows={3}
              maxRows={4}
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="comment-input"
              placeholder="xxx-xx-xxx-xx-xxx"
              defaultValue={"xxx-xxx-xx-xxx"}
            />
          </Box>
        )}

        {/* Submit Button or Approval Buttons based on route */}
        {showTransportDetails && !isTransportReportPage ? (
          <ApprovalButtons
            onApprove={handleApprove}
            onReject={handleReject}
          />
        ) : showTransportDetails && isTransportReportPage ? (
          // No buttons for Transport Report page
          null
        ) : (
          <Box className="submit-btn-row">
            <Button variant="contained" className="submit-btn" onClick={handleSubmit}>
              Submit
            </Button>
          </Box>
        )}

        <Snackbar
          open={snackbarOpen}
          autoHideDuration={1000}
          onClose={() => setSnackbarOpen(false)}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        >
          <Alert severity="success" sx={{ width: "100%" }}>
            Request submitted successfully!
          </Alert>
        </Snackbar>
      </Box>
    </LocalizationProvider>
  );
};

export default LateNightCabForm;
