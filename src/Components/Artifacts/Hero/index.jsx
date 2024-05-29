import styles from './Artifacts.module.css'
import { Artifacts } from '../../../data/data'

const ArtifactHero = () => {
    return (
        <div style={{backgroundImage:`url(${Artifacts.heroImgSource})`}} className={styles.heroContainer}>
            <h1 className={styles.header}>{Artifacts.heroTitle}</h1>
        </div>
    )
}
export default ArtifactHero