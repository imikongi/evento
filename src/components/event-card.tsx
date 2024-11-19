import React from 'react';
import {EventInfo} from '@/lib/types';
import Image from 'next/image'

interface EventCardProps {
	event: EventInfo
}

const EventCard: React.FunctionComponent<EventCardProps> = ({event}) => {
	return (
		<section className={
			'flex flex-col max-h-[23.75rem] flex-1 basis-80 max-w-[31.25rem] bg-white/[3%] rounded-xl overflow-hidden'
		}>
			<Image
				src={event.imageUrl}
				alt={event.name}
				width={500}
				height={280}
				className={'h-[60%] object-fit'}/>
			<div className={'flex flex-col flex-1 justify-center items-center h-full'}>
				<h2 className={'text-2xl font-semibold'}>{event.name}</h2>
				<p className={'italic text-white/75'}>By {event.organizerName}</p>
				<p className={'text-sm text-white/50 mt-4'}>{event.location}</p>
			</div>
		</section>
	);
};

export default EventCard;