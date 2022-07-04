import { NextComponentType } from "next"

const Nav: NextComponentType = () => {
  return (
    <div className="fixed w-full px-5 pt-5 flex justify-between mix-blend-difference z-[999]">
        <div className="logo">
            <a href="/"><h1 className="font-bold text-xs">Joseph Jenkins</h1></a>
        </div>
        <div className="email hidden sm:block">
            <a href="mailto:amjosephjenkins@gmail.com"><h1 className="font-bold text-xs">amjosephjenkins@gmail.com</h1></a>
        </div>
        <div className="freelance hidden sm:block">
            <h1 className="font-bold text-xs">available for freelance work</h1>
        </div>
        <div className="contact">
            <h1 className="font-bold text-xs">contact me</h1>
        </div>
    </div>
  )
}

export default Nav