import { FC } from 'react'

const About: FC = () => {
  return (
    <section className="mt-24 w-full relative" data-scroll-section>
        <div className="block sm:grid grid-cols-6 gap-5">
            <h1 className="font-sans text-base">About Me</h1><br />
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
  )
}

export default About