import React from 'react';
import SprintEventsInfoOne from "../../Components/SprintEvents/SpringEventsInfoOne";
import SprintEventsInfoTwo from "../../Components/SprintEvents/SprintEventsInfoTwo";


import EventsHero from "../../Components/SprintEvents/Hero"

const SprintEvents = () => {
    return(
        <div>
            <SprintEventsInfoOne/>
            <SprintEventsInfoTwo /> <EventsHero />
        </div>
    )
}

export default SprintEvents;