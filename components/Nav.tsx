import { NextComponentType } from "next"
import Link from "next/link"
import gsap from 'gsap/dist/gsap'
import { useEffect } from "react"

const Nav: NextComponentType = () => {

  useEffect(()=>{
    navAnimation();
  }, [])

  const navAnimation = () => {
    gsap.to(".nav", {
      y: 0,
      delay: .25,
      opacity: 1,
    })
  }

  return (
    <div className="text-[#f4f4f4] absolute h-32 w-full px-5 sm:px-12 pt-10 grid grid-cols-4 gap-5 z-50 nav opacity-0 -translate-y-full">
        <div className="logo col-span-2">
            <h1 className="font-bold text-sm sm:text-xs"><Link href={"/"}>Joseph Jenkins</Link></h1>
        </div>
        <h1 className="font-bold text-sm sm:text-xs col-start-3 text-right">
          <Link href={"/about"}>About</Link>
        </h1>
        <h1 className="font-bold text-sm sm:text-xs col-start-4 text-right">
          <Link href={"https://github.com/JOSEPH-JENKINS"}>Projects</Link>
        </h1>
        {/* <div className="flex">
            <h1 className="font-sans text-sm sm:text-xs mr-3">
              <Link href={"https://github.com/JOSEPH-JENKINS"}>GITHUB</Link>
            </h1>
            <h1 className="font-sans text-sm sm:text-xs mr-3">
              <Link href={"https://twitter.com/amjosephjenkins"}>twitter</Link>
            </h1>
            <h1 className="font-sans text-sm sm:text-xs mr-3">
              <Link href={"https://instagram.com/amjosephjenkins"}>instagram</Link>
            </h1>
            <h1 className="font-sans text-sm sm:text-xs">
              <Link href={"https://www.linkedin.com/in/joseph-jenkins-b9a1a7221"}>linkedin</Link>
            </h1>
        </div> */}
    </div>
  )
}

export default Nav