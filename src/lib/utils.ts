import clsx, {ClassValue} from 'clsx';
import {twMerge} from 'tailwind-merge';
import prisma from '@/lib/db';
import {notFound} from 'next/navigation';

//combines twMerge and clsx
export const cn = (...classes: ClassValue[]) => {
	return twMerge(clsx(classes))
}

export const capitalizeFirst = (string: string) => {
	return string[0].toUpperCase() + string.slice(1)
}

export async function getEvents(city: string, page = 1) {
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
	
	const totalCount = await prisma.eventoEvent.count({
		where: {
			city: capitalizeFirst(city)
		}
	})
	
	return events;
}

export async function getEvent(slug: string){
	
	const event = await prisma.eventoEvent.findUnique({
		where: {
			slug: slug
		}
	})
	
	if(!event){
		return notFound()
	}
	
	return event;
}