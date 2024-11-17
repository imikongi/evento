import React from 'react';
import Link from 'next/link';

const routes = [{
    path: '/terms-conditions',
    name: 'Terms & Conditions',
},
    {
        path: '/privacy-policy',
        name: 'Privacy Policy',
    }
]


const Footer = () => {
    return (
        <footer className={'flex justify-between items-center border-t border-white/10 h-14 text-white/25 px-3 sm:px-9 text-sm'}>
            <small className={'text-sm'}>&copy; 2030 What. All rights reserved </small>
            
            <ul className={'flex gap-2 sm:gap-8'}>
                {routes.map(route => (
                    <li className={'hover:text-white transition'} key={route.path}>
                        <Link href={route.path}>{route.name}</Link>
                    </li>
                ))}
            </ul>
        </footer>
    );
};

export default Footer;