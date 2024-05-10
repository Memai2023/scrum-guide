import React from 'react';
import ScrumTeamHero from "../../Components/ScrumTeam/Hero";
import ProductOwner from "../../Components/ScrumTeam/ProductOwner"
import TreeCirkles from "../../Components/ScrumTeam/ThreeCirkles"
import styles from './ScrumTeam.module.css'

const ScrumTeam = () => {
    return(
        <div className={styles.scrumTeamContainer}>
            <ScrumTeamHero />
            <ProductOwner />
            <TreeCirkles />
        </div>
    )
}

export default ScrumTeam;