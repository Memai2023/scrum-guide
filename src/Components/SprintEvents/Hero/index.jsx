import {SprintEvents} from '../../../data/data'
import styles from './Hero.module.css'

const EventsHero = () => {
    return (
        <>
        <div style={{backgroundImage:`url(${SprintEvents.heroImgSource})`}} className={styles.wraperHero} >                           
            <h1 className={styles.headerText}>Sprint Events</h1>  
        </div>                   
        </>
    )
}

export default EventsHero