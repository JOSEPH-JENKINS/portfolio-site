import { FC, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import ImageLink from "./ImageLink";

const About: FC = () => {
    useEffect(()=>{
        gsap.registerPlugin(ScrollTrigger);
        aboutAnimation();
    }, [])

    const aboutAnimation = () => {
        gsap.to(".about-img", {
          scrollTrigger: {
            trigger: ".about",
            start: 'top 90%',
            end: "bottom 20px",
            scrub: 1,
          },
          yPercent: "-50"
        });
    };

    return (
        <section className='h-screen w-screen px-5 sm:px-12 relative grid grid-cols-4 grid-rows-5 sm:grid-cols-12 gap-5 about'>
            <div className='col-start-2 md:col-start-7 col-end-5 sm:col-start-9 sm:col-end-13 leading-[1.4]'>
              <h1>
                I am a front-end developer based in Lagos, Nigeria who is driven to creating empathic digital web experiences on the world wide web.
                Passionate about web technologies, I love working with a careful thought-out design and bringing that design to life.
              </h1>
            </div>
            <div className="relative md:col-start-1 md:col-end-6 col-start-1 col-end-4 row-start-4 row-end-7 sm:col-start-4 sm:col-end-8 sm:row-start-2 sm:row-end-6 bg-black about-img">
              <ImageLink src="./katsiaryna-endruszkiewicz-BteCp6aq4GI-unsplash.jpg" />
            </div>
        </section>
    );
}

export default About;