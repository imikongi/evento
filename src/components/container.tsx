import React from 'react';

const Container = ({children}: {children: React.ReactNode}) => {
	return (
		<div className={'max-w-7xl flex flex-col justify-between min-h-screen mx-auto bg-white/[2%]'}>
			{children}
		</div>
	);
};

export default Container;