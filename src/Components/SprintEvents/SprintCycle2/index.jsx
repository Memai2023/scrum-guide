import styles from './SprintCycle2.module.css'
import { SprintEvents } from '../../../data/data'
import { Link } from 'react-router-dom'
import Buttons from '../../Buttons'

const SprintCycle2 = () => {
    return (
        <>
            <div className={styles.content}>
                <img src="../../../public/Images/sprintevent.jpg" alt="sprint circle" />
            <div className={styles.text}>
                <p>{SprintEvents.eventConclusionText}</p>
                <div className={styles.navigationButton}>
                    <Buttons direction="back" path="/scrum-team"/>
                    <Buttons direction="forward" path="/artifacts"/>
                </div>
            </div>
        </div>
    </>
    )
}
export default SprintCycle2;