import { Essence } from '../../../data/data'
import Buttons from '../../Buttons'
import styles from './HouseOfScrum.module.css'

const HouseOfScrum = () => {
    return (
        <>
            <div className={styles.container}>
                <img src="/Images/greenhouse.jpg" alt="house of scrum picture" />
                <div className={styles.text}>
                    <h2 className={styles.title}>The house of Scrum</h2>
                    <p>{Essence.houseOfScrumTextOne}</p>
                    <p>{Essence.houseOfScrumTextTwo}</p>
                    <Buttons path={'/'}/>
                    <Buttons direction={'forward'} path={'/scrum-team'} />
                </div>
            </div>
        </>
    )
}

export default HouseOfScrum;