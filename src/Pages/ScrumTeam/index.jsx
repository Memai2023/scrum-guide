import ScrumHero from "../../Components/ScrumTeam/Hero"
import ProductOwner from "../../Components/ScrumTeam/ProductOwner"
import styles from './ScrumTeam.module.css'

const ScrumTeam = () => {
    return(
        <div>
            <ScrumHero />
            <ProductOwner />
        </div>
    )
}

export default ScrumTeam