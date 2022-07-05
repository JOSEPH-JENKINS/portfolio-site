import { NextComponentType } from "next"
import Link from "next/link"

const Nav: NextComponentType = () => {
  return (
    <div className=" text-black h-32 w-full px-5 sm:px-12 pt-5 flex justify-between z-[999]">
        <div className="logo">
            <h1 className="font-bold text-sm sm:text-base"><Link href={"/"}>Joseph Jenkins</Link></h1>
        </div>
        <div className="freelance text-right">
            <h1 className="font-bold text-sm sm:text-base">
              <Link href={"https://github.com/JOSEPH-JENKINS"}>GITHUB</Link><br />
              <Link href={"https://twitter.com/amjosephjenkins"}>twitter</Link><br />
              <Link href={"https://instagram.com/amjosephjenkins"}>instagram</Link><br />
              <Link href={"https://www.linkedin.com/in/joseph-jenkins-b9a1a7221"}>linkedin</Link>
            </h1>
        </div>
    </div>
  )
}

export default Nav