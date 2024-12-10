import 'server-only'

import {unstable_cache} from 'next/cache';
import prisma from '@/lib/db';
import {notFound} from 'next/navigation';
import {capitalizeFirst} from '@/lib/utils';

export const getEvents= unstable_cache(async (city: string, page = 1) => {
	const events = await prisma.eventoEvent.findMany({
		where: {
			city: city === 'all' ? undefined : capitalizeFirst(city)
		},
		//sorting events in ascending order by date
		orderBy: {
			date: 'asc'
		},
		take: 6,
		skip: (page - 1) * 6
	})
	
	// const totalCount = await prisma.eventoEvent.count({
	// 	where: {
	// 		city: capitalizeFirst(city)
	// 	}
	// })
	
	return events;
} )
export const getEvent = unstable_cache(async (slug: string) => {
	
	const event = await prisma.eventoEvent.findUnique({
		where: {
			slug: slug
		}
	})
	
	if(!event){
		return notFound()
	}
	
	return event;
})