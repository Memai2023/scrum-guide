import WhatIsScrum from "../../Components/Essence/WhatIsScrum"
import History from "../../Components/Essence/History"
import HouseOfScrum from "../../Components/Essence/HouseOfScrum"
import Theory from "../../Components/Essence/Theory"
import ThreePillars from "../../Components/Essence/ThreePillars"
import styles from './Essence.module.css'

const Essence = () => {
    return(
        <div className={styles.essenceContainer}>
            <WhatIsScrum/>
            <History />
            <Theory />
            <HouseOfScrum />
            <ThreePillars />
        </div>
    )
}

export default Essence;