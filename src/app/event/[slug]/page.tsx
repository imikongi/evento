import React from 'react';
import {EventInfo} from '@/lib/types';
import Image from 'next/image'

interface EventPageProps {
    params: {
        slug: string;
    }
}

const EventPage: React.FunctionComponent<EventPageProps> = async ({params}) => {
    const slug = params.slug
    const response = await fetch(`https://bytegrad.com/course-assets/projects/evento/api/events/${slug}`)
    const event: EventInfo = await response.json();
    
    
    return (
        <main>
            <section className={'relative h-[361px] overflow-hidden'}>
                <Image
                    className={'object-cover blur-3xl z-0'}
                    src={event.imageUrl}
                    alt={'Event background image'}
                    //we don't need high quality on blurred img
                    quality={50}
                    //with fill we make image widen on whole screen, but with sizes we limit it's width
                    //basically it would be 100vw, until screen becomes bigger than 1280px, then it would be 1280px as well
                    fill
                    sizes={'(max-width: 1280px) 100vw, 1280px'}
                    //to make it load first
                    priority
                />
                
                <div className={'z-1 relative'}>
                    <Image src={event.imageUrl} alt={event.name} width={300} height={200}/>
                </div>
            </section>
            
            
            <div>
            
            </div>
        </main>
    );
};

export default EventPage;