import React, {Suspense} from 'react';
import H1 from '@/components/h1';
import {EventInfo} from '@/lib/types';
import EventsList from '@/components/eventslist';
import Loading from '@/app/events/loading';

const Events = async ({params}: {params: Record<'city', string>}) => {
    const city = params.city
    
    return (
        <main className={'flex flex-col items-center h-full py-24 px-[20px] min-h-[110vh]'}>
           <H1 className={'mb-28'}>
               {
                   city === 'all'
                   ? 'All events'
                   : `Events in ${city[0].toUpperCase() + city.slice(1)}`
               }
           </H1>
            
           <Suspense fallback={<Loading/>}>
               <EventsList city={city}/>
           </Suspense>
        </main>
    );
};

export default Events;