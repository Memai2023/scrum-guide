import React from 'react';
import styles from './ThreePillarsInfo.module.css';
import { Essence } from '../../../data/data'; 

const PillarCard = ({ title, text, postScript }) => {
  return (
    <div className={styles.pillarCard}>
      <div className={styles.pillarHeader}>{title}</div>
      <div className={styles.pillarBody}>{text}</div>
      <div className={styles.pillarFooter}>{postScript}</div>
    </div>
  );
};

const ThreePillarsInfo = () => {
    return (
        <div className={styles.threePillarsContainer}>
            <div className={styles.pillarContainer}>
              <PillarCard title="Inspection" text={Essence.inspectionText} postScript={Essence.inspectionPS} className={styles.firstcard} />
              <PillarCard title="Adaptation" text={Essence.adaptionText} postScript={Essence.adaptionPS} className={styles.secondcard} />
              <PillarCard title="Transparency" text={Essence.transparencyText} postScript={Essence.transparencyPS} className={styles.thirdcard}/>
            </div>
        </div>
    );
};

export default ThreePillarsInfo;