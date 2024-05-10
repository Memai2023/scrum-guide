import DevelopTeam from '../../Components/ScrumTeam/DevelopTeam'
import ProductOwner from "../../Components/ScrumTeam/ProductOwner"
import styles from './ScrumTeam.module.css'

const ScrumTeam = () => {
    return(
        <div className={styles.scrumTeamContainer}>
         <ProductOwner />
         <DevelopTeam />    
        </div>
    )
}

export default ScrumTeam