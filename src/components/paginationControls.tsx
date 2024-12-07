import React from 'react';
import Link from 'next/link';
import {ArrowLeftIcon, ArrowRightIcon} from '@radix-ui/react-icons';

interface PaginationControlsProps {
	page: number
	city: string,
	eventsCount: number
}

const btnStyles = 'flex items-center gap-2 text-white px-5 py-3 bg-white/5 rounded-md opacity-75 hover:opacity-100 transition text-sm'

const PaginationControls = ({page, city, eventsCount}: PaginationControlsProps) => {
	
	return (
		<section className={'flex justify-between w-full '}>
			{page != 1 ?
				<Link
					href={`${city}/?page=${page - 1}`}
					className={btnStyles}>
					<ArrowLeftIcon/>
					Previous
				</Link> : <div/>}
			
			{eventsCount == 6 && <Link
                href={`${city}/?page=${page + 1}`}
                className={btnStyles}
            >
                Next
                <ArrowRightIcon/>
            </Link>}
		</section>
	);
};

export default PaginationControls;