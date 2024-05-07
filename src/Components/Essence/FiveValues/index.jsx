import { Essence } from '../../../data/data'
import styles from './FiveValues.module.css'

const FiveValues = () => {
    return (
        <div>
            <div className={styles.container}>
                <h1 className={styles.title}>The 5 values of Scrum</h1>
                <p className={styles.sideText}>{Essence.fiveValuesText}</p>
            </div>
            <div className={styles.mainContainer}>
                    <div className={styles.circle}>
                        <h2 className={styles.circleTitle}>Commitment</h2>
                        <p>{Essence.commitmentCircleText}</p>
                    </div>
                    <div className={styles.circle}>
                        <h2 className={styles.circleTitle}>Courage</h2>
                        <p>{Essence.courageCircleText}</p>
                    </div>
                    <div className={styles.circle}>
                        <h2 className={styles.circleTitle}>Focus</h2>
                        <p>{Essence.focusCirleText}</p>
                    </div>
                    <div className={styles.circle}>
                        <h2 className={styles.circleTitle}>Openness</h2>
                        <p>{Essence.openessCircleText}</p>
                    </div>
                    <div className={styles.circle}>
                        <h2 className={styles.circleTitle}>Respect</h2>
                        <p>{Essence.respectCircleText}</p>
                    </div>
                </div>
            <hr className={styles.lines} />
        </div>
    );
};
export default FiveValues;