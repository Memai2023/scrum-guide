import styles from './Intro.module.css'
import { SprintEvents } from '../../../data/data'

const Intro = () => {
    return (
        <div className={styles.introContainer}>
            <div className={styles.imgWrapper}>
                <img src={SprintEvents.thumbsUpImageSource} alt="a team doing tumbs up to you" />
            </div>
            <div className={styles.txtWrapper}>
                <p>{SprintEvents.whatText}</p>
                <ul>
                    <li>{SprintEvents.bulletOne}</li>
                    <li>{SprintEvents.bulletTwo}</li>
                    <li>{SprintEvents.bulletThree}</li>
                    <li>{SprintEvents.bulletFour}</li>
                </ul>
            </div>
        </div>
    )
}

export default Intro