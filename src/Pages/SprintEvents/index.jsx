import EventsHero from "../../Components/SprintEvents/Hero"
import React from 'react';
import Intro from "../../Components/SprintEvents/Intro"
import SprintEventsInfoOne from "../../Components/SprintEvents/SpringEventsInfoOne";
import SprintEventsInfoTwo from "../../Components/SprintEvents/SprintEventsInfoTwo";

const SprintEvents = () => {
    return(
        <div>
            <EventsHero />
            <Intro />
            <SprintEventsInfoOne/>
            <SprintEventsInfoTwo />
        </div>
    )
}

export default SprintEvents;