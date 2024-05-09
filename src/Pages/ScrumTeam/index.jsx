import React from 'react';
import ScrumTeamHero from "../../Components/ScrumTeam/Hero";
import TreeCirkles from "../../Components/ScrumTeam/ThreeCirkles"
import ProductOwner from "../../Components/ScrumTeam/ProductOwner"

const ScrumTeam = () => {
    return (
    <div>
        <ScrumTeamHero />
        <ProductOwner />
        <TreeCirkles />
    </div>
    );
};

export default ScrumTeam;