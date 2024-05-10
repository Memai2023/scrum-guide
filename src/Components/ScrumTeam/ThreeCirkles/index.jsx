import styles from './Cirkles.module.css'
import {ScrumTeam} from '../../../data/data'
import Buttons from '../../Buttons'

const TreeCirkles = () => {
    return (
        <>
        <section className={styles.sec}>
            <main className={styles.wraper}>
                <div className={styles.mainText}>
                    <p className={styles.text}>{ScrumTeam.conclusionText}</p>
                </div>
                <div className={styles.imagewraper}>
                    <img src={ScrumTeam.circleImageSource} className={styles.image}/>
                </div>
            </main>
                <div className={styles.navigation}>
                    <Buttons direction="back" path="/essence" /> 
                    <Buttons direction="forward" path="/events" />                        
                </div>
        </section>
        </>
    )
}

export default TreeCirkles