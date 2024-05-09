import styles from './ScrumGuide.module.css'
import Buttons from '../../Buttons'
import { Home } from '../../../data/data'

const ScrumGuide = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.textContainer}>
                    <h2 className={styles.title}>The Scrum Guide</h2>
                    <p className={styles.text}>{Home.aboutText}</p>
                    <p className={styles.smallText}>{Home.readyToGoText}</p>
                    <div className={styles.navigation}>
                        <Buttons direction="forward" path="/essence"/>
                    </div>
                </div>
                <div className={styles.imageContainer}>
                    <img src="/Images/happygirl.jpg" alt="Happy woman at office" />
                </div>
            </div>
        </>
    )
}

export default ScrumGuide;
