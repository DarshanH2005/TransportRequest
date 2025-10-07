import React, { useMemo, useState } from 'react';
import styles from './ViolationHistory.module.css';
import downloadIcon from '../assets/download-28.svg';
import IncidentType from './IncidentType';
import IncidentInput from './IncidentInput';
import IncidentCategory from './IncidentCategory';
import calendarIcon from '../assets/calendar-16x18.svg';
import IncidentDescription from './IncidentDescription';
import UploadFile from './UploadFile';
import OptionalApprovers from './OptionalApprovers';

// Small sample data matching the JSON/spec screenshot
const SAMPLE_DATA = [
  {
    id: 1,
    workFlowId: '662_10057153',
    transportDate: '24-May-2024',
    transportCategory: 'Storage device found during exit Check',
    wfStatus: 'Approved'
  }
];

export default function ViolationHistory({ data = SAMPLE_DATA, title = 'Violation History of the Employee' }) {
  const filtered = useMemo(() => data, [data]);

  return (
    <>
    <section className={styles.container} aria-labelledby="violation-title">
      <h2 id="violation-title" className={styles.title}>{title}</h2>

  {/* separator removed per request */}

      <div className={styles.tableFrame} role="table" aria-label="Violation history table">
        <div className={styles.tableHeader} role="rowgroup">
          <div className={styles.headerRow} role="row">
            <div role="columnheader" className={styles.colWorkFlowId}>Work Flow ID</div>
            <div role="columnheader" className={styles.colTransportDate}>Transport Date</div>
            <div role="columnheader" className={styles.colTransportCategory}>Transport Category</div>
            <div role="columnheader" className={styles.colWfStatus}>WF Status</div>
          </div>
        </div>

        <div className={styles.tableBody} role="rowgroup">
          {filtered.length === 0 ? (
            <div className={styles.emptyRow}>No records found</div>
          ) : (
            filtered.map((row) => (
              <div key={row.id} className={styles.row} role="row">
                <div className={styles.colWorkFlowId} role="cell">{row.workFlowId}</div>
                <div className={styles.colTransportDate} role="cell">{row.transportDate || row.incidentDate}</div>
                <div className={styles.colTransportCategory} role="cell">{row.transportCategory || row.incidentCategory}</div>
                <div className={styles.colWfStatus} role="cell">{row.wfStatus}</div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
<br />
    {/* Transport Type component placed below Violation History */}

  </>
  );
}
