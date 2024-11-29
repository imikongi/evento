import clsx, {ClassValue} from 'clsx';
import {twMerge} from 'tailwind-merge';
import prisma from '@/lib/db';

//combines twMerge and clsx
export const cn = (...classes: ClassValue[]) => {
	return twMerge(clsx(classes))
}

export const capitalizeFirst = (string: string) => {
	return string[0].toUpperCase() + string.slice(1)
}

export async function getEvents(city: string) {
	const events = await prisma.eventoEvent.findMany({
		where: {
			city: city === 'all' ? undefined : capitalizeFirst(city)
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
	
	return event;
}