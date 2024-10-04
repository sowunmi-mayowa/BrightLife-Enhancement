import React from 'react'
import CtaButton from './CtaButton'

const CtaBanner = ({isblur}) => {
  return (
    <div className={` ${isblur ? "backdrop-blur-lg bg-white/30" : "bg-white"}  sticky top-0 font-lato py-4 md:h-20 lg:h-32 px-4 md:px-8 xl:px-16 rounded-3xl lg:rounded-[45px] shadow-lg `}>
        <div className='flex flex-col md:flex-row gap-2 md:gap-4 justify-between items-start md:items-center h-full'>
            <div>
                <p className=' text-[16px] md:text-xs lg:text-base  hidden md:block'>Experience personalized wellness solutions tailored to your needs.</p>
                <h3 className='text-2xl md:text-2xl lg:text-4xl xl:text-[40px] leading-[30px] max-w-[280px] md:max-w-[inherit]'>Start Your Journey to <span className='text-primaryGreen'>Brighter Days</span></h3>
            </div>
            <CtaButton />
        </div>
    </div>
  )
}

export default CtaBanner