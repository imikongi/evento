import React from 'react';
import EventCard from '@/components/event-card';
import {getEvents} from '@/lib/utils';


const EventsList = async ({city}: {city: string}) => {
	const events = await getEvents(city)
	
	return (
		<section className={'max-w-[68.75rem] flex flex-wrap gap-10 justify-center px-[20px]'}>
			{events.map(event => (
				<EventCard key={event.id} event={event}/>
			))}
		</section>
	);
};

export default EventsList;