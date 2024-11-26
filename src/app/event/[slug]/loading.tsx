import React from 'react';
import Skeleton from '@/app/skeleton';

const Loading = () => {
	return (
		<div className={'flex flex-col items-center gap-4 pt-28'}>
			<Skeleton className={'w-[400px]'}/>
			<Skeleton/>
			<Skeleton/>
		</div>
	);
};

export default Loading;