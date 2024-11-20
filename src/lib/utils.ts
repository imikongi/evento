import clsx, {ClassValue} from 'clsx';
import {twMerge} from 'tailwind-merge';

//combines twMerge and clsx
export const cn = (...classes: ClassValue[]) => {
	return twMerge(clsx(classes))
}