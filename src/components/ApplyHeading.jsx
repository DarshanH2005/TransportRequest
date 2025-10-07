import React from 'react';
import styles from '../styles/ApplyHeading.module.css';

const ApplyHeading = ({ className = '', onClick }) => {
  return (
    <div className={`${styles.applyHeadingContainer} ${className}`} onClick={onClick}>
      <div className={styles.applyHeadingFrame}>
        <div className={styles.applyHeadingContent}>
         
          
          <div className={styles.headingText}>
            Transport Details
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplyHeading;