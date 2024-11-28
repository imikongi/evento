'use client'

import React, {useRef} from 'react';
import {EventInfo} from '@/lib/types';
import Image from 'next/image'
import Link from 'next/link';
import {motion, useScroll, useTransform} from 'framer-motion';

interface EventCardProps {
	event: EventInfo
}

const MotionLink = motion(Link)

const EventCard: React.FunctionComponent<EventCardProps> = ({event}) => {
	const ref = useRef(null)
	
	const {scrollYProgress} = useScroll({
		target: ref,
		offset: ['0 1', '1.5 1']
	})
	const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1])
	const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.3, 1])
	
	const eventDate = new Date(event.date)
	
	
	return (
		<MotionLink
			ref={ref}
			className={'max-h-[23.75rem] flex-1 basis-80 max-w-[31.25rem]'}
			href={`/event/${event.slug}`}
			style={{
				// @ts-ignore
				scale: scaleProgress,
				// @ts-ignore
				opacity: opacityProgress
			}}
			initial={{
				scale: 0.8,
				opacity: 0,
			}}
		>
			<section className={
				'w-full h-full relative flex flex-col bg-white/[3%] rounded-xl overflow-hidden state-effects'
			}>
				<Image
					src={event.imageUrl}
					alt={event.name}
					width={500}
					height={280}
					className={'h-[60%] object-cover'}/>
				
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
		</MotionLink>
	);
};

export default EventCard;