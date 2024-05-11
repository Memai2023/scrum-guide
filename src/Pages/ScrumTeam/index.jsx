<<<<<<<<< Temporary merge branch 1
import React from 'react';
import ScrumTeamHero from "../../Components/ScrumTeam/Hero";
import TreeCirkles from "../../Components/ScrumTeam/ThreeCirkles"
import ScrumHero from "../../Components/ScrumTeam/Hero"
import ProductOwner from "../../Components/ScrumTeam/ProductOwner"
import DevelopTeam from '../../Components/ScrumTeam/DevelopTeam'

const ScrumTeam = () => {
    return (
    <div>
        <ScrumHero />
        <ProductOwner /> 
        <DevelopTeam />
        <TreeCirkles />
    </div>
    );
};

export default ScrumTeam;