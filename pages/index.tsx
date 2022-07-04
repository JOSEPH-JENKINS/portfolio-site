import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'
import asPath from 'next/router'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import ProjectCard from '../components/ProjectCard'
import imageLoader from '../imageLoader'

const Home: NextPage = () => {
  const containerRef = useRef(null);

  return (
    <LocomotiveScrollProvider
    options={
      {
        smooth: true
      }
    }
    location={asPath}
    containerRef={containerRef}
    >
      <div data-scroll-container ref={containerRef}>
        <Head>
          <title>Joseph Jenkins - Creative Developer</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className='w-full px-5'>
          <section className='pt-32 w-full grid grid-cols-4 sm:grid-cols-12 gap-5' data-scroll-section>
            <p className='col-start-8 col-end-11 font-bold text-sm' data-scroll>
              I am Joseph Jenkins, a full stack developer, frontend heavy. Not your conventional developer, I work on projects with empathy
              in mind.
            </p>
            <div className='col-start-1 col-end-12 pt-10'>
              <h1>
                <span className='font-bold text-9xl' data-scroll>Full</span><br />
                <span className='font-stylish text-9xl hover:text-orange-900' data-scroll>Stack</span><br />
                <span className='font-bold text-9xl' data-scroll>Developer</span>
              </h1>
              <p>Intuitive design is how I give you new superpowers</p>
            </div>
          </section>
          <section className='pt-32 w-full gap-5 grid grid-cols-4 sm:grid-cols-12' data-scroll-section>
            <ProjectCard first='Axer' last='Studios'/>
            <div className="head mb-12 col-start-1 col-end-6" data-scroll>
              <h1 className='text-right'>
                <span className='font-bold text-9xl'>Shevon</span>
                <span className='font-stylish text-9xl'>Salmon</span>
              </h1>
            </div>
            <div className="col-start-1 col-end-10 bg-black h-[80vh] relative -z-10" data-scroll>
              <Image loader={imageLoader} unoptimized src="/shevon.png" alt="Yeah" layout='fill' />
            </div>
            <div className='col-start-1 col-end-5' data-scroll>
              <p>Worked on a fan site for my dear friend and youtuber, shevon salmon. 
                <Link href={"/"}>Click to know more &rarr;</Link>
              </p>
            </div>
          </section>
        </main>
      </div>
    </LocomotiveScrollProvider>
  )
}

export default Home
