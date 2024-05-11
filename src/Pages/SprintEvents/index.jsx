import EventsHero from "../../Components/SprintEvents/Hero"
import React from 'react';
import Intro from "../../Components/SprintEvents/Intro"
import SprintEventsInfoOne from "../../Components/SprintEvents/SpringEventsInfoOne";
import SprintEventsInfoTwo from "../../Components/SprintEvents/SprintEventsInfoTwo";
import SprintCycle from "../../Components/SprintEvents/SprintCycle"
import SprintCycle2 from "../../Components/SprintEvents/SprintCycle2"

const SprintEvents = () => {
    return(
        <div>
            <EventsHero />
            <Intro />
            <SprintEventsInfoOne/>
            <SprintEventsInfoTwo />    
            <SprintCycle />
            <SprintCycle2 />
        </div>
    )
}

export default SprintEvents;