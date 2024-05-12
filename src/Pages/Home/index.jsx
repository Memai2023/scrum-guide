import HomeHero from "../../Components/Home/HomeHero"
import ScrumGuide from '../../Components/Home/ScrumGuide'
import styles from "./Homepage.module.css"

const Home = () => {
    return(
        <div className={styles.homeContainer}>
            <HomeHero/>
            <ScrumGuide />
        </div>
    )
}

export default Home