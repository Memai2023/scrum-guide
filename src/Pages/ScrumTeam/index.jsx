import ScrumHero from "../../Components/ScrumTeam/Hero"
import ProductOwner from "../../Components/ScrumTeam/ProductOwner"
import TreeCirkles from "../../Components/ScrumTeam/ThreeCirkles"
import styles from './ScrumTeam.module.css'

const ScrumTeam = () => {
    return(
        <div>
            <ScrumHero />
            <ProductOwner />
            <TreeCirkles />
        </div>
    )
}

export default ScrumTeam