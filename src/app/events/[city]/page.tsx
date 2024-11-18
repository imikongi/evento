import React from 'react';
import H1 from '@/components/h1';

const Events = ({params}: {params: Record<'city', string>}) => {
    const city = params.city
    
    return (
        <main className={'flex justify-center items-start h-full py-24 px-[20px] min-h-[110vh]'}>
           <H1>
               {
                   city === 'all'
                   ? 'All events'
                   : `Events in ${city[0].toUpperCase() + city.slice(1)}`
               }
           </H1>
        </main>
    );
};

export default Events;