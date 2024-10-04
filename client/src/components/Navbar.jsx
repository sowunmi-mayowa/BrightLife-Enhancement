import { Link } from "react-router-dom"
import CtaButton from "./CtaButton"
import { IoMenuSharp } from "react-icons/io5";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
    <div className='backdrop-blur-lg bg-white/30 sticky top-0 font-lato z-50 '>
      <div className="mx-8 md:mx-12 xl:mx-auto xl:max-w-6xl py-4">
        <div className="flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <div className='bg-primaryGreen w-10 h-10 rounded-full '></div><p>BrightLife</p>
          </div>
          <div className="hidden lg:block">
            <div className="flex gap-4">
              <Link to={"/home"}>Home</Link>
              <Link to={"/about"}>about</Link>
              <Link to={"/services"}>services</Link>
              <Link to={"/contact-us"}>conact us</Link>
            </div>
          </div>
          <div className="hidden lg:block">
            <CtaButton />
          </div>
          <IoMenuSharp  className="lg:hidden cursor-pointer text-2xl" onClick={() => setIsOpen(!isOpen)}/>
        </div>
      </div>
    </div>
    <div className={`lg:hidden fixed top-20 right-0 h-1/4 w-60 bg-[#F7FEF1] transition-transform transform ${isOpen ? "translate-x-0" : "translate-x-full"} ease-in-out duration-700`}>
      <div className={`flex gap-4 flex-col justify-start py-4 capitalize font-semibold bg-[#F7FEF1] px-6 `}>
        <Link to={"/home"}>Home</Link>
        <Link to={"/about"}>about</Link>
        <Link to={"/services"}>services</Link>
        <Link to={"/contact-us"}>conact us</Link>
        <CtaButton />
      </div>
    </div>
    </>
  )
}

export default Navbar