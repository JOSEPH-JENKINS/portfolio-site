import { NextComponentType } from "next"
import Link from "next/link"

const Nav: NextComponentType = () => {
  return (
    <div className=" text-black h-24 items-center w-full px-5 sm:px-12 pt-5 flex justify-between z-[999]">
        <div className="logo">
            <h1 className="font-bold text-sm sm:text-base"><Link href={"/"}>Joseph Jenkins</Link></h1>
        </div>
        <div className="freelance text-right">
            <h1 className="font-bold text-sm sm:text-base">available for freelance work</h1>
        </div>
    </div>
  )
}

export default Nav