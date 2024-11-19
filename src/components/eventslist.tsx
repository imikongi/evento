import React from 'react';
import {EventInfo} from '@/lib/types';
import EventCard from '@/components/event-card';

interface EventsListProps {
	events: EventInfo[]
}

const EventsList: React.FunctionComponent<EventsListProps> = ({events}) => {
	return (
		<section className={'max-w-[68.75rem] flex flex-wrap gap-10 justify-center px-[20px]'}>
			{events.map(event => (
				<EventCard key={event.id} event={event}/>
			))}
		</section>
	);
};

export default EventsList;