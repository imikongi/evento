import React from 'react';
import {EventInfo} from '@/lib/types';
import EventCard from '@/components/event-card';


const EventsList = async ({city}: {city: string}) => {
	const response = await fetch(`https://bytegrad.com/course-assets/projects/evento/api/events?city=${city}`, {
		next: {
			revalidate: 300
		}
	})
	const events: EventInfo[] = await response.json();
	
	return (
		<section className={'max-w-[68.75rem] flex flex-wrap gap-10 justify-center px-[20px]'}>
			{events.map(event => (
				<EventCard key={event.id} event={event}/>
			))}
		</section>
	);
};

export default EventsList;