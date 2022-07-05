import Link from "next/link"

const Contact = () => {
  return (
    <section className="w-full mt-24 pb-12 flex justify-center items-center">
        <div className='text-center'>
            <span className="font-sans text-[#655f59]"><b>say hi to me for your next project!</b></span>
            <h1 className='font-bold text-xl sm:text-2xl'><Link href={"mailto:amjosephjenkins@gmail.com"}>amjosephjenkins@gmail.com</Link></h1>
        </div>
    </section>
  )
}

export default Contact