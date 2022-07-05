import { FC } from 'react';
import Image from 'next/image';
import imageLoader from '../imageLoader';

const Intro: FC = () => {
  return (
    <section className='pt-10 w-full relative' data-scroll-section>
        <div className='mb-12'>
            <div className="relative">
            <h1>
                <span className='font-bold text-5xl sm:text-[13.5vw] mr-10' data-scroll>Front</span>
                <span className='font-bold text-5xl sm:text-[13.5vw]' data-scroll>End</span><br />
                <span className='font-bold text-5xl sm:text-[13.5vw]' data-scroll>Developer</span>
            </h1>
            </div>
        </div>
        <div className="w-full">
            <div className="h-[70vh] w-full sm:w-1/2 ml-auto bg-black relative">
                <Image loader={imageLoader} unoptimized src="/or-hakim-xvhroGtkC0Y-unsplash.jpg" className="object-cover object-top" alt="Yeah" layout='fill' />
            </div>
        </div>
    </section>
  )
}

export default Intro