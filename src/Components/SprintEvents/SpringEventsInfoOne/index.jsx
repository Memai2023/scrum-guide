import React from 'react';
import styles from './SprintEventsInfoOne.module.css';
import { SprintEvents } from '../../../data/data';

const SprintEventsInfoOne = () => {
  return (
    <div className={styles.container}>
        <div className={styles.card}>
          <h2>Sprint Planning</h2>
          <p>{SprintEvents.sprintPlanningText}</p>
        </div>
        <div className={styles.card}>
          <h2>Daily Scrum</h2>
          <p>{SprintEvents.dailyScrumText}</p>
      </div>
    </div>
  );
};

export default SprintEventsInfoOne;