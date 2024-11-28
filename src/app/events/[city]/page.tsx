import React, {Suspense} from 'react';
import H1 from '@/components/h1';
import EventsList from '@/components/eventslist';
import Loading from '@/app/events/loading';
import {capitalizeFirst} from '@/lib/utils';
import {Metadata} from 'next';

interface Props {
    params: {
        city: string
    }
}

export function generateMetadata({params}: Props): Metadata {
    const city = params.city;
    
    return {
        title: city === 'all' ? 'All events' : `Events in ${capitalizeFirst(city)}`
    }
}

const Events = async ({params}: Props) => {
    const city = params.city
    
    return (
        <main className={'flex flex-col items-center h-full py-24 px-[20px] min-h-[110vh]'}>
           <H1 className={'mb-28'}>
               {
                   city === 'all'
                   ? 'All events'
                   : `Events in ${capitalizeFirst(city)}`
               }
           </H1>
            
           <Suspense fallback={<Loading/>}>
               <EventsList city={city}/>
           </Suspense>
        </main>
    );
};

export default Events;