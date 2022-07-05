import type { NextPage } from 'next'
import Head from 'next/head'
import { useRef } from 'react'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import Cursor from '../components/Cursor'
import Intro from '../components/Intro'
import Nav from '../components/Nav'

const Home: NextPage = () => {
  const containerRef = useRef(null);

  return (
    <>
      <Cursor />

      <div data-scroll-container className='w-full bg-[#f0e3d6]' ref={containerRef}>
        <Head>
          <title>Joseph Jenkins - Creative Developer</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Nav />
        <main className='w-full px-5 sm:px-12'>
          <Intro />
          <section className="mt-48 w-full relative" data-scroll-section>
            <div className="block sm:grid grid-cols-6 gap-5">
              <h1 className="font-sans text-sm">About Me</h1><br />
              <div className='font-bold w-full ml-auto text-lg col-start-3 col-end-7'>
                <h1>
                  I am a front-end developer based in Lagos, Nigeria who is driven to creating empathic experiences on the world wide web.
                  Passionate about web technologies. I love working with a careful thought-out design and bringing that design to life with those web technologies.
                  <br /><br />
                  When I'm not creating intriguing web experiences, i'm probably watching anime or reading something.
                </h1>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  )
}

export default Home
