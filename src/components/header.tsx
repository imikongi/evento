import React from 'react';
import Link from 'next/link';
import Logo from '@/components/logo';

const routes = [
	{
		name: 'Home',
		path: '/'
	},
	{
		name: 'All events',
		path: 'events/all'
	}
]

const Header = () => {
	return (
		<header className={'flex items-center justify-between w-full border-b border-white/10 h-14 px-3 md:px-9'}>
			<Logo/>
			
			<nav>
				<ul className={'flex gap-2'}>
					{routes.map(route => (
						<li
							key={route.path}
							className={'text-white/50 hover:text-white active:text-white transition'}
						><Link href={route.path}>{route.name}</Link></li>
					))}
				</ul>
			</nav>
		</header>
	);
};

export default Header;