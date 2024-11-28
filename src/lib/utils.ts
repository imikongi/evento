import clsx, {ClassValue} from 'clsx';
import {twMerge} from 'tailwind-merge';
import {EventoEvent} from '@prisma/client';

//combines twMerge and clsx
export const cn = (...classes: ClassValue[]) => {
	return twMerge(clsx(classes))
}

export const capitalizeFirst = (string: string) => {
	return string[0].toUpperCase() + string.slice(1)
}

export async function getEvents(city: string) {
	const response = await fetch(`https://bytegrad.com/course-assets/projects/evento/api/events?city=${city}`, {
		next: {
			revalidate: 300
		}
	})
	const events: EventoEvent[] = await response.json();
	return events;
}

export async function getEvent(slug: string){
	const response = await fetch(`https://bytegrad.com/course-assets/projects/evento/api/events/${slug}`)
	const event: EventoEvent = await response.json();
	
	return event;
}