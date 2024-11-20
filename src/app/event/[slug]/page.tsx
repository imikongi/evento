import React from 'react';
import {EventInfo} from '@/lib/types';
import Image from 'next/image'
import H1 from '@/components/h1';

interface EventPageProps {
    params: {
        slug: string;
    }
}

const EventPage: React.FunctionComponent<EventPageProps> = async ({params}) => {
    const slug = params.slug
    const response = await fetch(`https://bytegrad.com/course-assets/projects/evento/api/events/${slug}`)
    const event: EventInfo = await response.json();
    const eventDate = new Date(event.date)
    
    
    return (
        <main>
            <section className={'relative overflow-hidden flex justify-start lg:justify-center items-center py-14 md:py-20 px-14'}>
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
                
                <div className={'z-1 relative flex flex-col gap-6 lg:gap-16 lg:flex-row'}>
                    <Image
                        className={'rounded-xl border-2 border-white/50 object-cover'}
                        src={event.imageUrl}
                        alt={event.name}
                        width={300}
                        height={200}/>
                    
                    <div className={'flex flex-col justify-between'}>
                        <div>
                            <p className={'text-white/75'}>
                                {eventDate.toLocaleDateString('en-EN', {
                                    weekday: 'long',
                                    month: 'long',
                                    day: '2-digit'
                                })}
                            </p>
                            <H1 className={'mb-2 mt-1 whitespace-nowrap lg:text-5xl'}>{event.name}</H1>
                            <p className={'whitespace-nowrap text-xl text-white/75'}>
                                Organized by <span className={'italic'}>{event.organizerName}</span>
                            </p>
                        </div>
                        <button className={'bg-white/20 bg-blur text-lg capitalize mt-5 w-[95%] ' +
                            'sm:w-[full] py-2 rounded-md border-white/10 border-2 hover:scale-105 focus:active:scale-[1.02] transition '}>
                            Get tickets
                        </button>
                    </div>
                </div>
            </section>
            
            
            <div>
            
            </div>
        </main>
    );
};

export default EventPage;