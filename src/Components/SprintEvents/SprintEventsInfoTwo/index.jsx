import React from 'react';
import styles from './SprintEventsInfoTwo.module.css';
import { SprintEvents } from '../../../data/data';

const SprintEventsInfoTwo = () => {
  return (
    <div className={styles.container}>
        <div className={styles.card}>
          <h2>Sprint Review</h2>
          <p>{SprintEvents.sprintReviewText}</p>
        </div>
        <div className={styles.card}>
          <h2>Daily Retrospective</h2>
          <p>{SprintEvents.retrospectiveText}</p>
        </div>
    </div>
  );
};

export default SprintEventsInfoTwo;