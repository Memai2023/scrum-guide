import React from 'react';
import ThreePillarsInfo from '../../Components/Essence/ThreePillarsInfo';
import WhatIsScrum from "../../Components/Essence/WhatIsScrum"
import History from "../../Components/Essence/History"
import HouseOfScrum from "../../Components/Essence/HouseOfScrum"
import Theory from "../../Components/Essence/Theory"
import ThreePillars from "../../Components/Essence/ThreePillars"
import FiveValues from "../../Components/Essence/FiveValues"
import HeroImage from "../../Components/Essence/HeroImage"
import styles from './Essence.module.css'

const Essence = () => {
    return(
        <div className={styles.essenceContainer}>
            <HeroImage />
            <WhatIsScrum/>
            <History />
            <Theory />
            <ThreePillars />
            <ThreePillarsInfo />
            <FiveValues />
            <HouseOfScrum />
        </div>
    )
}

export default Essence;