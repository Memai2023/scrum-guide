import styles from './Hero.module.css'
import {SprintEvents} from '../../../data/data'

const HeroEvents = () => {
    return (
        <>
            <div>
            <img className={styles.heroImage} src={SprintEvents.heroImgSource} alt="Image"/>
            </div>
        </>
    )
}

export default HeroEvents 