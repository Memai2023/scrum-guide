import EventsHero from "../../Components/SprintEvents/Hero"
import React from 'react';
import Intro from "../../Components/SprintEvents/Intro"
import SprintEventsInfoOne from "../../Components/SprintEvents/SpringEventsInfoOne";
import SprintEventsInfoTwo from "../../Components/SprintEvents/SprintEventsInfoTwo";
import SprintCycle2 from "../../Components/SprintEvents/SprintCycle2"
import styles from "./Sprints.module.css"

const SprintEvents = () => {
    return(
        <div className={styles.sprintContainer}>
            <EventsHero />
            <Intro />
            <SprintEventsInfoOne/>
            <SprintEventsInfoTwo />    
            <SprintCycle2 />
        </div>
    )
}

export default SprintEvents;