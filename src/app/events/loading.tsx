import React from 'react';
import SkeletonCard from '@/components/skeleton-card';

const Loading = () => {
	return (
		<div className={'flex flex-wrap justify-center mx-auto max-w-[1100px] px-[20px] py-24 gap-20'}>
			{Array.from({length: 6}).map((item, i) => (
				<SkeletonCard key={i}/>
			))}
		</div>
	);
};

export default Loading;