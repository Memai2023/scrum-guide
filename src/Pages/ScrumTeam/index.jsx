import React from 'react';
import ScrumTeamHero from "../../Components/ScrumTeam/Hero";
import TreeCirkles from "../../Components/ScrumTeam/ThreeCirkles"
import ProductOwner from "../../Components/ScrumTeam/ProductOwner"
import DevelopTeam from '../../Components/ScrumTeam/DevelopTeam'
const ScrumTeam = () => {
    return (
    <div>
        <ScrumTeamHero />
        <ProductOwner /> 
        <DevelopTeam />
        <TreeCirkles />
    </div>
    );
};

export default ScrumTeam;