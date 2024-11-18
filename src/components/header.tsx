'use client'

import React from 'react';
import Link from 'next/link';
import Logo from '@/components/logo';
import {usePathname} from 'next/navigation';
import clsx from 'clsx';
import {motion} from 'framer-motion';

const routes = [
	{
		name: 'Home',
		path: '/'
	},
	{
		name: 'All events',
		path: '/events/all'
	}
]

const Header = () => {
	const activePath = usePathname()
	
	console.log(activePath)
	
	return (
		<header className={'flex items-center justify-between w-full border-b border-white/10 h-14 px-3 md:px-9'}>
			<Logo/>
			
			<nav className={'h-full'}>
				<ul className={'flex h-full gap-6'}>
					{routes.map(route => {
						return (
							<li
								key={route.path}
								className={clsx('flex items-center hover:text-white transition relative', {
									'text-white': activePath === route.path,
									'text-white/50': activePath !== route.path
								})}
							><Link href={route.path}>{route.name}</Link>
								{activePath === route.path &&
                                    <motion.div layoutId={'nav-buttons'} className={'bg-accent h-1 w-full absolute bottom-0'}></motion.div>}
							</li>
						)
					})}
				</ul>
			</nav>
		</header>
	);
};

export default Header;