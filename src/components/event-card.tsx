import React from 'react';
import {EventInfo} from '@/lib/types';
import Image from 'next/image'
import Link from 'next/link';

interface EventCardProps {
	event: EventInfo
}

const EventCard: React.FunctionComponent<EventCardProps> = ({event}) => {
	const eventDate = new Date(event.date)
	
	return (
		<Link className={'max-h-[23.75rem] flex-1 basis-80 max-w-[31.25rem]'} href={`/event/${event.slug}`}>
			<section className={
				'w-full h-full relative flex flex-col bg-white/[3%] rounded-xl overflow-hidden hover:scale-105 active:scale-[1.02] transition'
			}>
				<Image
					src={event.imageUrl}
					alt={event.name}
					width={500}
					height={280}
					className={'h-[60%] object-fit'}/>
				
				<section
					className={'flex flex-col justify-center items-center absolute left-[12px] top-[12px] h-[45px] w-[45px] bg-black/30 rounded-md'}>
					<h2 className={'text-xl font-bold -mb-[5px]'}>{eventDate.toLocaleDateString('en-EN', {day: '2-digit'})}</h2>
					<h2 className={'text-xs uppercase text-accent/90'}>{eventDate.toLocaleDateString('en-EN', {month: 'short'})}</h2>
				</section>
				
				<div className={'flex flex-col flex-1 justify-center items-center h-full'}>
					<h2 className={'text-2xl font-semibold'}>{event.name}</h2>
					<p className={'italic text-white/75'}>By {event.organizerName}</p>
					<p className={'text-sm text-white/50 mt-4'}>{event.location}</p>
				</div>
			</section>
		</Link>
	);
};

export default EventCard;