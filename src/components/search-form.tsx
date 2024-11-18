"use client"

import React, {useState} from 'react';
import {useRouter} from 'next/navigation';

const SearchForm = () => {
	const [searchQuery, setSearchQuery] = useState('')
	const router = useRouter()
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if(searchQuery){
			router.push(`/events/${searchQuery}`)
		}
	}
	
	return (
		<form
			onSubmit={handleSubmit}
			className={'w-full sm:w-[36.25rem]'}
			action="">
			<input
				className={'w-full h-16 rounded-lg bg-white/[7%] px-6 outline-none ring-accent/50 transition focus:ring-2 focus:bg-white/10'}
				type="text"
				value={searchQuery}
				onChange={e => setSearchQuery(e.target.value)}
				placeholder={'Search events in any city...'}
				spellCheck={false}/>
		</form>
	);
};

export default SearchForm;