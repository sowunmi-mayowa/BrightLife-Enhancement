import React from 'react'
import HeroImg from "../assets/hero.png"
import HeroImgMobile from "../assets/hero-mobile.png"
import CtaBanner from '../components/CtaBanner'

const Home = () => {
  return (
    <div>
      <div className='bg-lightGreen font-lato h-[90vh] md:h-[70vh] lg:h-[80vh]'>
        <div className='mx-8 md:mx-12 xl:mx-auto xl:max-w-6xl py-8'>
          <div className='flex flex-col md:flex-row items-center'>
            <div className='pt-4 pb-8 lg:pt-24 xl:pt-32'>
              <h1 className='text-[24px] lg:text-4xl xl:text-5xl max-w-sm md:max-w-md xl:max-w-lg'>BrightLife Enhancement Services: Your Path to <span className='text-primaryGreen'>Holistic Health.</span></h1>
              <p className='font-medium text-sm md:text-xs  lg:text-base'>Discover a comprehensive approach to wellness and vitality.</p>
            </div>
            <div>
              <img src={HeroImgMobile} alt="mobile hero image" className='lg:hidden md:w-[380px]' />
              <img src={HeroImg} alt="hero image" className='hidden lg:block lg:absolute top-[70px] right-0 lg:w-[480px] xl:w-[600px]' />
            </div>
          </div>
          <div className='relative w-full'>

          <div className='absolute inset-x-0 -bottom-[100px] md:-bottom-[60px] lg:bottom-[inherit] lg:mt-10 xl:mt-0 '>
            <CtaBanner isblur={true} />
          </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Home