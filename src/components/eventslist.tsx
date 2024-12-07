import React from 'react';
import EventCard from '@/components/event-card';
import {getEvents} from '@/lib/utils';
import PaginationControls from '@/components/paginationControls';

interface EventsListProps {
	city: string,
	page?: number
}

const EventsList = async ({city, page = 1}: EventsListProps) => {
	const events = await getEvents(city, page)
	const eventsCount = events.length
	
	return (
		<section className={'max-w-[68.75rem] flex flex-wrap gap-10 justify-center px-[20px]'}>
			{events.map(event => (
				<EventCard key={event.id} event={event}/>
			))}
			
			<PaginationControls page={page} city={city} eventsCount={eventsCount}/>
		</section>
	);
};

export default EventsList;