import React from 'react';
import ScrumTeamHero from "../../Components/ScrumTeam/Hero";
import ScrumTeamInfo from '../../Components/ScrumTeam/ScrumTeamInfo';
import ProductOwner from "../../Components/ScrumTeam/ProductOwner"

const ScrumTeam = () => {
    return (
    <div>
        <ScrumTeamHero />
        <ScrumTeamInfo />
        <ProductOwner />
    </div>
    );
};

export default ScrumTeam;