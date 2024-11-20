import React from 'react';
import H1 from '@/components/h1';
import {EventInfo} from '@/lib/types';
import EventsList from '@/components/eventslist';

const Events = async ({params}: {params: Record<'city', string>}) => {
    const city = params.city
    
    const response = await fetch('https://bytegrad.com/course-assets/projects/evento/api/events?city=austin')
    const events: EventInfo[] = await response.json();
    
    return (
        <main className={'flex flex-col items-center h-full py-24 px-[20px] min-h-[110vh]'}>
           <H1 className={'mb-28'}>
               {
                   city === 'all'
                   ? 'All events'
                   : `Events in ${city[0].toUpperCase() + city.slice(1)}`
               }
           </H1>
            
           <EventsList events={events}/>
        </main>
    );
};

export default Events;