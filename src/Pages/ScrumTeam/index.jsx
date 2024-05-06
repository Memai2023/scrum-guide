import ProductOwner from "../../Components/ScrumTeam/ProductOwner"
import styles from './ScrumTeam.module.css'

const ScrumTeam = () => {
    return(
        <div className={styles.scrumTeamContainer}>
            <ProductOwner />
        </div>
    )
}

export default ScrumTeam