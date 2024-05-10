import React from "react";
import { ScrumTeam } from "../../../data/data";
import styles from "./Hero.module.css";


const ScrumHero = () => {
 return (
   <div className={styles.heroContainer} style={{backgroundImage: `url(${ScrumTeam.heroImgSource})`}}>
     <h1 className={styles.header}>{ScrumTeam.heroTitle}</h1>
   </div>
 )
}
export default ScrumHero;