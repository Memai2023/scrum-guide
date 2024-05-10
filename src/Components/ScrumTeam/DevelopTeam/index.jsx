import styles from './Develop.module.css'
import {ScrumTeam} from '../../../data/data'

const DevelopTeam = () => {
    return (
        <>
        <main className={styles.wraper}>
            <div className={styles.wraperScrum}>
                <div className={styles.headerWraper}>
                    <p className={styles.headerScrum}>The Scrum Master</p>
                </div>
                <div className={styles.textWraper}>
                    <p className={styles.scrumText}>{ScrumTeam.scrumMasterText}</p>
                </div>                 
            </div>            
            <div className={styles.wraperDevelop}>
                <div className={styles.developText}>
                    <h1 className={styles.headerDevelop}>{ScrumTeam.bulletThree}</h1>
                </div>    
                <div className={styles.textWraper}>
                    <p className={styles.scrumText}>{ScrumTeam.developmentTeamText}</p>
                </div>
            </div>
        </main>    
        </>
    )
}

export default DevelopTeam