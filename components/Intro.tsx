import { FC, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import ImageLink from "./ImageLink";

const Intro: FC = () => {
    useEffect(()=>{
        gsap.registerPlugin(ScrollTrigger);
        introAnimation();
        heroTextAnimation();
    }, [])

    const introAnimation = () => {
        gsap.to(".hero-img", {
            scrollTrigger: {
              trigger: ".hero",
              start: 'top top',
              end: "bottom 20px",
              scrub: 1
            },
            yPercent: "-50",
        });
    }

    const heroTextAnimation = () => {
        gsap.to(".hero-text span", {
          y: 0,
          delay: 1,
          opacity: 1,
          stagger: .28,
        })
      }

    return (
        <section className='h-screen w-screen px-5 sm:px-12 relative grid grid-cols-4 grid-rows-5 sm:grid-cols-12 gap-5 hero'>
            <div className="relative lg:hidden md:col-start-5 md:col-end-13 col-start-2 col-end-13 row-start-3 row-end-6 sm:col-start-1 sm:col-end-5 sm:row-start-2 sm:row-end-6 bg-black hero-img">
              <ImageLink src="./katsiaryna-endruszkiewicz-BteCp6aq4GI-unsplash.jpg" />
            </div>
            <div className='relative col-start-1 col-end-13 row-start-2 sm:col-end-13 sm:row-start-2 sm:row-end-6'>
              <h1 className='w-full font-bold text-3xl md:text-5xl sm:text-9xl md:leading-[1.14] hero-text inline-flex items-center flex-wrap justify-between'>
                <span className='translate-y-5 opacity-0 '>building</span>
                <span className='translate-y-5 opacity-0 '>empathic</span> 
                <span className='translate-y-5 opacity-0 '>digital</span>
                <span className='hidden lg:block font-sans text-xs'>wanna know more about my shit, scroll down</span>
                <span className='translate-y-5 opacity-0 '>web</span>
                <span className='translate-y-5 opacity-0 '>experiences</span>
              </h1>
            </div>
        </section>
    );
}

export default Intro;