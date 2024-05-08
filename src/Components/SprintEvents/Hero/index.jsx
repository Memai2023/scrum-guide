import {SprintEvents} from '../../../data/data'
import styles from './Hero.module.css'

const EventsHero = () => {
    return (
        <>
        <div style={{backgroundImage:`url(${SprintEvents.heroImgSource})`}} className={styles.wraperHero} >                           
            <h1 className={styles.headerText}>Scrum Events</h1>  
            <hr class={styles.border}/>
        </div>                   
        </>
    )
}

export default EventsHero