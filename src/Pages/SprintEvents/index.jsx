import EventsHero from "../../Components/SprintEvents/Hero"
import React from 'react';
import SprintEventsInfoOne from "../../Components/SprintEvents/SpringEventsInfoOne";
import SprintEventsInfoTwo from "../../Components/SprintEvents/SprintEventsInfoTwo";
import SprintCycle2 from "../../Components/SprintEvents/SprintCycle2"

const SprintEvents = () => {
    return(
        <div>
            <EventsHero />
            <SprintEventsInfoOne/>
            <SprintEventsInfoTwo />    
            <SprintCycle2 />            
        </div>
    );
};

export default SprintEvents;