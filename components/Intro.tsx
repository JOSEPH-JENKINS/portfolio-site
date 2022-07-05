import { FC, useEffect } from 'react';
import Image from 'next/image';
import imageLoader from '../imageLoader';
import { gsap, Power2 } from 'gsap';

const Intro: FC = () => {

  useEffect(()=>{
    gsap.to(document.querySelectorAll(".intro h1"), {
        y: 0,
        stagger: .25,
        delay: 1,
        ease: Power2.easeInOut
    });
   }, [])

  return (
    <section className='pt-10 w-full relative'>
        <div className='mb-12'>
            <div className="relative overflow-hidden">
                <span className='intro relative'>
                    <h1 className='font-bold text-5xl sm:text-[13.5vw] mr-5 inline-block translate-y-[200%]'>Front</h1>
                    <h1 className='font-bold text-5xl sm:text-[13.5vw] inline-block translate-y-[200%]'>End</h1><br />
                    <h1 className='font-bold text-5xl sm:text-[13.5vw] inline-block translate-y-[200%]'>Developer</h1>
                </span>
            </div>
        </div>
        <div className="w-full">
            <div className="h-[70vh] w-full sm:w-1/2 ml-auto bg-black relative">
                <Image loader={imageLoader} unoptimized src="/kunal-patil-kf1OAlprrZA-unsplash.jpg" className="object-cover" alt="Yeah" layout='fill' />
            </div>
        </div>
    </section>
  )
}

export default Intro