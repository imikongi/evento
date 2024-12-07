import React, {Suspense} from 'react';
import H1 from '@/components/h1';
import EventsList from '@/components/eventslist';
import Loading from '@/app/events/loading';
import {capitalizeFirst} from '@/lib/utils';
import {Metadata} from 'next';
import {z} from 'zod';
import * as sea from 'node:sea';

interface Props {
    params: {
        city: string
    }
}

interface EventsPageProps extends Props {
    searchParams: {[key: string]: string | string[] | undefined};
}

export function generateMetadata({params}: Props): Metadata {
    const city = params.city;
    
    return {
        title: city === 'all' ? 'All events' : `Events in ${capitalizeFirst(city)}`
    }
}

const pageNumberSchema = z.coerce.number().int().positive().optional()

const Events = async ({params, searchParams}: EventsPageProps) => {
    const city = params.city
    const parsedPage = pageNumberSchema.safeParse(searchParams.page)
    if(!parsedPage.success) {
        throw new Error('Invalid page number.')    }
    
    return (
        <main className={'flex flex-col items-center h-full py-24 px-[20px] min-h-[110vh]'}>
           <H1 className={'mb-28'}>
               {
                   city === 'all'
                   ? 'All events'
                   : `Events in ${capitalizeFirst(city)}`
               }
           </H1>
            
           <Suspense key={city + parsedPage.data} fallback={<Loading/>}>
               <EventsList city={city} page={parsedPage.data}/>
           </Suspense>
        </main>
    );
};

export default Events;