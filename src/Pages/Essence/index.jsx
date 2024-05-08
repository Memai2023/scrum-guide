import WhatIsScrum from "../../Components/Essence/WhatIsScrum"
import History from "../../Components/Essence/History"
import HouseOfScrum from "../../Components/Essence/HouseOfScrum"
import Theory from "../../Components/Essence/Theory"
import FiveValues from "../../Components/Essence/FiveValues"
import styles from './Essence.module.css'

const Essence = () => {
    return(
        <div className={styles.essenceContainer}>
            <WhatIsScrum/>
            <History />
            <Theory />
            <FiveValues />
            <HouseOfScrum />    
        </div>
    )
}

export default Essence;