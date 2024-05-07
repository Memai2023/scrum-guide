<<<<<<< HEAD
import React from 'react';
import ScrumTeamHero from "../../Components/ScrumTeam/Hero";
import ScrumTeamInfo from '../../Components/ScrumTeam/ScrumTeamInfo';

const ScrumTeam = () => {
    return (
    <div>
        <ScrumTeamHero />
        <ScrumTeamInfo />
        </div>
    );
};
=======
import ProductOwner from "../../Components/ScrumTeam/ProductOwner"
import styles from './ScrumTeam.module.css'

const ScrumTeam = () => {
    return(
        <div className={styles.scrumTeamContainer}>
            <ProductOwner />
        </div>
    )
}
>>>>>>> main

export default ScrumTeam;