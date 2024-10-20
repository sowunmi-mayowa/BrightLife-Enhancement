import React from 'react'
import CtaButton from './CtaButton'
import { motion } from 'framer-motion'

const CtaBanner = ({isblur}) => {
  return (
    <motion.div className={` ${isblur ? "backdrop-blur-md bg-white/20" : "bg-white"}  sticky top-0 font-lato py-4 md:h-20 lg:h-28 xl:h-32 px-4 md:px-8 xl:px-16 rounded-3xl lg:rounded-[45px] shadow-lg `}
      initial={{y: '100vw'}}
      animate={{y: 0}}
      transition={{delay: 1.5 ,duration: 1, type: 'tween'}}
    >
        <div className='flex flex-col md:flex-row gap-1 md:gap-4 items-center justify-between h-full'>
            <div>
                <p className=' text-[9px] md:text-xs lg:text-base'>Experience personalized wellness solutions tailored to your needs.</p>
                <h3 className=' text-[17px] font-bold md:text-2xl lg:text-4xl xl:text-[40px] leading-[30px] max-w-[280px] md:max-w-[inherit]'>Start Your Journey to <span className='text-primaryGreen'>Brighter Days</span></h3>
            </div>
            <CtaButton />
        </div>
    </motion.div>
  )
}

export default CtaBanner