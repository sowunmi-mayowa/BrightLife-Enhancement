import { Link } from "react-router-dom"
import logoWhite from "../assets/logo-white.svg"
import CtaBanner from "./CtaBanner"

const Footer = () => {
  return (
    <div className='bg-primaryGreen font-lato relative mt-16'>
    <div className='mx-8 md:mx-12 py-16 xl:mx-auto xl:max-w-6xl pt-24 lg:pt-32'>
      <div className='absolute mx-8 md:mx-12 xl:mx-auto xl:max-w-6xl inset-x-0 -top-14 '>
        <CtaBanner isblur={false} />
      </div>
      <div className="flex justify-between items-start flex-wrap flex-col md:flex-row text-white">
        <div>
          <div className='flex gap-3 items-center'>
            <img src={logoWhite} alt="brightlife logo" className='w-8 h-8' />
            <h3 className='text-xl font-bold'>BrightLife</h3>
          </div>
          <p className='max-w-40 pt-4'>5, Public Square, Suite 428, Hagerstown, MD 21740.</p>
        </div>
        <div className="mt-4 md:mt-0">
          <h4 className="font-semibold">Menu</h4>
          <div className='flex gap-2 md:gap-4 flex-col justify-start py-2 md:py-4 capitalize'>
            <Link to={"/home"}>Home</Link>
            <Link to={"/about"}>about</Link>
            <Link to={"/services"}>services</Link>
            <Link to={"/contact-us"}>conact us</Link>
          </div>
        </div>
        <div className="mt-4 md:mt-0">
          <h4 className="font-semibold">Legal </h4>
          <div className='flex gap-2 md:gap-4 flex-col justiy-start py-2 md:py-4 capitalize'>
            <Link to={"/#"}>Contact information</Link>
            <Link to={"/#"}>Legal information</Link>
            <Link to={"/#"}>Improve this site</Link>
          </div>
        </div>
        <div>
          <h4 className="font-semibold">Newsletter</h4>
          <p className="capitalize text-base pt-2 md:py-4  ">contact information</p>
          <form className="bg-white px-2 py-2 rounded-xl flex gap-2">
            <input type="email" name="emaiil" id="email" placeholder="Your e-mail address" className="placeholder:text-primaryGreen focus:border-none p-2 " />
            <input type="submit" value="Subscribe"  className="bg-primaryGreen text-white rounded-lg px-6 py-3"/>
          </form>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Footer