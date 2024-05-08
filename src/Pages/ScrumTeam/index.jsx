<<<<<<< HEAD
import TreeCirkles from "../../Components/ScrumTeam/ThreeCirkles"

const ScrumTeam = () => {
    return(
        <>
            <TreeCirkles />
        </>
=======
import ProductOwner from "../../Components/ScrumTeam/ProductOwner"
import styles from './ScrumTeam.module.css'

const ScrumTeam = () => {
    return(
        <div className={styles.scrumTeamContainer}>
            <ProductOwner />
        </div>
>>>>>>> main
    )
}

export default ScrumTeam