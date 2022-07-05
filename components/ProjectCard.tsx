import { ProjectData } from '../types'
import Link from 'next/link'

const ProjectCard = ({ name, subtext, description, siteLink, codeLink }: ProjectData) => {
  return (
    <div className='w-full relative pb-24'>
        <h1 className='font-bold text-2xl whitespace-nowrap mb-12'>{name} <br /> <span className='text-[#655f59] text-sm'>{subtext}</span></h1>
        <div className='block sm:grid grid-cols-6 gap-5'>
        <div className='col-start-3 col-end-7'>
            <p className='mb-12'><b>
            {description}</b></p>
            <div className="flex">
            <div className='border-4 rounded-full mr-10 border-black inline-block px-4 py-2 hover:bg-[#32cd32] transition-all ease-in-out delay-150'>
                <h1 className='font-bold'>
                <Link href={siteLink}>VISIT SITE</Link>
                </h1>
            </div>
            <div className='border-4 rounded-full mr-10 border-black inline-block px-4 py-2 hover:bg-[#32cd32] transition-all ease-in-out delay-150'>
                <h1 className='font-bold'>
                <Link href={codeLink}>GITHUB</Link>
                </h1>
            </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default ProjectCard