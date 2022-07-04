import { NextComponentType } from "next"
import Image from "next/image"
import Link from "next/link"
import { ProjectData } from "../types"
import { useLocomotiveScroll } from "react-locomotive-scroll"
import imageLoader from "../imageLoader"

const ProjectCard = ({ first, last }: ProjectData) => {
  return (
    <>
        <div className="head mb-12 col-start-6 col-end-13" data-scroll>
            <h1 className='text-right'>
                <span className='font-bold text-9xl'>{first}</span>
                <span className='font-stylish text-9xl'>{last}</span>
            </h1>
        </div>
        <div className="col-start-4 col-end-13 bg-black h-[80vh] relative -z-10" data-scroll>
            <Image loader={imageLoader} unoptimized src="/Capture.png" alt="Yeah" layout='fill' />
        </div>
        <div className='col-start-1 col-end-5' data-scroll>
            <p>Worked on redesigning the Axer Studios site. This project was done out of fun after applying for the frontend developer internship role at Axer Studios. 
                <Link href={"/"}>Click to know more &rarr;</Link>
            </p>
        </div>
    </>
  )
}

export default ProjectCard