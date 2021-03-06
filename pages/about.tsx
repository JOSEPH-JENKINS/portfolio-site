import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link';
import ImageLink from '../components/ImageLink';
import Nav from '../components/Nav';
import { motion } from 'framer-motion';

const About: NextPage = () => {
    return (
        <motion.div 
            exit={{ y: -100, opacity: 0 }} 
            initial={{ y: -100, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }}
            className='w-full bg-[#121212] text-[#f4f4f4]'>
            <Head>
                <title>Joseph Jenkins - Creative Developer</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <motion.main className='w-full overflow-x-hidden' animate={{opacity: 1}} initial={{opacity:0}}>
                <Nav />
                <section className='h-screen w-screen px-5 sm:px-12 relative grid grid-cols-4 grid-rows-5 sm:grid-cols-12 gap-5 about'>
                    <div className='col-start-1 col-end-5 sm:col-start-5 sm:col-end-13 row-start-2 leading-[1.4]'>
                        <h1 className='font-bold text-base md:text-2xl sm:text-5xl'>
                            I am a front-end developer based in Lagos, Nigeria who is driven to creating empathic digital web experiences on the world wide web.
                            Passionate about web technologies, I love working with a careful thought-out design and bringing that design to life.
                        </h1>
                        <br /><br /><br /><br /><br />
                        <h1 className='font-bold text-base md:text-2xl sm:text-5xl'>
                            You need help with your next project? <br /> Say hello, send me a mail  👋
                        </h1><br /><br /><br /><br /><br />
                        <h1 className="font-bold text-base md:text-2xl sm:text-5xl underline">
                            <Link href={"mailto:amjosephjenkins@gmail.com"}>amjosephjenkins@gmail.com</Link>
                        </h1>
                    </div>
                    <div className="col-start-1 col-end-4 hidden sm:block bg-white row-start-3 row-end-7 relative about-img">
                        <ImageLink src="./katsiaryna-endruszkiewicz-BteCp6aq4GI-unsplash.jpg" />
                    </div>
                </section>
            </motion.main>
        </motion.div>
    );
}

export default About;