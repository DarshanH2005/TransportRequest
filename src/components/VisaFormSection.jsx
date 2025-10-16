import React from 'react';
import '../styles/RequiredInfo.css';
import '../styles/formControls.css';
import ApplyHeading from './ApplyHeading';
import LateNightCabForm from './LateNightCabForm';

const VisaFormSection = ({ showDiscoverCheckbox = true, showTransportDetails = false, pageTitle = "" }) => {
  return (
    <div className="visa-form">
      <LateNightCabForm 
        showDiscoverCheckbox={showDiscoverCheckbox} 
        showTransportDetails={showTransportDetails}
        pageTitle={pageTitle}
      />
    </div>
  );
};

export default VisaFormSection;
