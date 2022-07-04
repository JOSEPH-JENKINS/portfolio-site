import { NextComponentType } from "next"
import Link from "next/link"

const Nav: NextComponentType = () => {
  return (
    <div className="fixed w-full px-5 pt-5 flex justify-between mix-blend-difference z-[999]">
        <div className="logo">
            <Link href={"/"}><h1 className="font-bold text-xs">Joseph Jenkins</h1></Link>
        </div>
        <div className="email hidden sm:block">
            <Link href="mailto:amjosephjenkins@gmail.com"><h1 className="font-bold text-xs">amjosephjenkins@gmail.com</h1></Link>
        </div>
        <div className="freelance hidden sm:block">
            <h1 className="font-bold text-xs">available for freelance work</h1>
        </div>
        <div className="contact">
            <h1 className="font-bold text-xs">&copy; 2022</h1>
        </div>
    </div>
  )
}

export default Nav