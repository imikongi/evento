import React from 'react';
import {twMerge} from 'tailwind-merge';
import {cn} from '@/lib/utils';

interface H1Props {
	children: React.ReactNode;
	className?: string;
}

const H1: React.FunctionComponent<H1Props> = ({children, className}) => {
	return (
		<h1 className={cn('text-3xl lg:text-6xl font-bold tracking-tight', className)}>{children}</h1>
	);
};

export default H1;