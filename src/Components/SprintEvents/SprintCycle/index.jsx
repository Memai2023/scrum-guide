import styles from './SprintCycle.module.css'
import { SprintEvents } from '../../../data/data' 
import { Link } from 'react-router-dom'
import Buttons from '../../Buttons'

const SprintCycle = () => {
    return (
        <div className={styles.mainContent}>
            <div className={styles.topSection}>
                    <div className={styles.box}>
                        <div className={styles.text}>
                            <h2 className={styles.title}>Sprint Review</h2>
                            <p>{SprintEvents.sprintReviewText}</p>
                        </div>
                    <div className={styles.box}>
                        <div className={styles.text}>
                            <h2 className={styles.title}>Sprint Retrospective</h2>
                            <p>{SprintEvents.retrospectiveText}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SprintCycle;
