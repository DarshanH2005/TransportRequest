import React from 'react';
import styles from './TransferWorkflow.module.css';
import transferWorkflowBg from './assets/transfer-workflow-bg.svg';
import transferWorkflowSymbol from './assets/transfer-workflow-symbol.svg';
import chevronRight from './assets/chevron-right.svg';

/**
 * TransferWorkflow Component
 * 
 * A clickable workflow transfer button with background SVG, icon, text and chevron
 * 
 * @param {Object} props - Component props
 * @param {Function} props.onClick - Callback function when the component is clicked
 * @param {string} props.className - Additional CSS class names
 * 
 * @example
 * <TransferWorkflow onClick={() => console.log('Workflow transfer clicked')} />
 */
const TransferWorkflow = ({ onClick, className = '' }) => {
  return (
    <div className={`${styles.transferWorkflowSection} ${className}`}>
      <div 
        className={styles.transferWorkflowContainer}
        onClick={onClick}
        role="button"
        tabIndex={0}
        onKeyPress={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            onClick && onClick();
          }
        }}
      >
        <img 
          src={transferWorkflowBg} 
          alt="Transfer Workflow Background" 
          className={styles.transferWorkflowBg} 
        />
        <div className={styles.transferWorkflowContent}>
          <img 
            src={transferWorkflowSymbol} 
            alt="Transfer Workflow" 
            className={styles.transferWorkflowIcon} 
          />
          <span className={styles.transferWorkflowText}>Transfer Workflow</span>
        </div>
        <div className={styles.transferWorkflowChevron}>
          <img src={chevronRight} alt="chevron" />
        </div>
      </div>
    </div>
  );
};

export default TransferWorkflow;
