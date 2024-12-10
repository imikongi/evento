import clsx, {ClassValue} from 'clsx';
import {twMerge} from 'tailwind-merge';

//combines twMerge and clsx
export const cn = (...classes: ClassValue[]) => {
	return twMerge(clsx(classes))
}

export const capitalizeFirst = (string: string) => {
	return string[0].toUpperCase() + string.slice(1)
}

