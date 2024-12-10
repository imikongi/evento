import Link from 'next/link';
import React from 'react';
import SearchForm from '@/components/search-form';
import H1 from '@/components/h1';


export default function Home() {
	
	
	return (
		<main className={'flex flex-col items-center justify-center pt-36 px-3'}>
			<H1>Find events around you</H1>
			<p className={'mb-12 mt-7 text-2xl lg:text-3xl opacity-75'}>
				Browse more then <span className={'font-bold italic text-accent underline'}>10,000 events</span> worldwide</p>
			
			<SearchForm/>
			
			<section className={'mt-4 flex gap-4 text-sm text-white/50'}>
				<p>Popular:</p>
				
				<div className={'space-x-2 font-semibold'}>
					<Link href={'events/austin'}>Austin</Link>
					<Link href={'events/seattle'}>Seattle</Link>
				</div>
			</section>
		
		</main>
	)
}