import { FC, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import ImageLink from "./ImageLink";

const Hobbies: FC = () => {
    useEffect(()=>{
        gsap.registerPlugin(ScrollTrigger);
        hobbiesAnimation();
    }, []);

    const hobbiesAnimation = () => {
        gsap.to(".hobbies-img", {
          scrollTrigger: {
            trigger: ".hobbies",
            start: 'top 90%',
            end: "bottom 20px",
            scrub: 1,
          },
          yPercent: "-50",
        });
    };

    return (
        <section className='h-screen w-screen px-5 sm:px-12 relative grid grid-cols-4 grid-rows-5 sm:grid-cols-12 gap-5 hobbies'>
            <div className='col-start-1 md:col-start-1 md:col-end-7 col-end-4 sm:col-start-1 sm:col-end-5 leading-[1.4]'>
              <h1>
                When i am not creating these intriguing web experiences, i'm probably watching anime or indulging in something silly.
                I do enjoy watching football and sometimes basketball. I sometimes hang out with some friends to catch up some fun.
              </h1>
            </div>
            <div className="col-start-2 md:col-start-8 md:col-end-13 col-end-6 row-start-4 row-end-7 sm:col-start-8 sm:col-end-12 sm:row-start-2 sm:row-end-6 bg-black hobbies-img relative">
              <ImageLink src="./shaquiel-mckenzie-7zXywjoX5tg-unsplash.jpg" />
            </div>
          </section>
    );
}

export default Hobbies;