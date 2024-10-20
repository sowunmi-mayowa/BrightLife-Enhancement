import { Link } from "react-router-dom"
import HeroImg from "../assets/hero.png"
import HeroImgMobile from "../assets/hero-mobile.png"
import HomeImg1 from "../assets/home-img1.png"
import HomeImg2 from "../assets/home-img2.png"
import slideImg1 from "../assets/carouselImg1.png"
import medical from "../assets/medical.png"
import carf from "../assets/carf.png"
import logoWhite from "../assets/logo-white.svg"
import CtaBanner from '../components/CtaBanner'
import  { motion, useScroll, useMotionValueEvent, useTransform } from "framer-motion"
import { FiUserCheck } from "react-icons/fi";
import { CgCalendarDates } from "react-icons/cg";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";import LazyLoad from '../components/LazyLoad'
;
import Footer from "../components/Footer"

const Home = () => {

  const {scrollYProgress} = useScroll();

  // useMotionValueEvent(scrollYProgress, "change", (val) => {
  //   console.log(val)
  // })

  const scale  = useTransform(scrollYProgress, [0.017, 0.22], [0.6, 1]);
  const opacity  = useTransform(scrollYProgress, [0.017, 0.22], [0.4, 1]);
  const scale1  = useTransform(scrollYProgress, [0.3, 0.44], [0.6, 1]);

  const settings = {
    dots: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1
  } 

  const mobileSettings = {
    dots: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1
  }

  return (
    <div>
      <div className='bg-lightGreen font-lato h-[80vh]  lg:h-[80vh]'>
        <div className='mx-8 md:mx-12 xl:mx-auto xl:max-w-6xl md:py-8 '>
          <div className='flex flex-col md:flex-row items-center justify-between'>
            <motion.div className='pt-4 pb-8 lg:pt-24 xl:pt-32' 
              initial={{x: '-100vw'}}
              animate={{x: 0}}
              transition={{delay: 1, duration: 1, type: 'tween'}}
            >
              <h1 className='text-[24px] lg:text-4xl xl:text-5xl max-w-sm md:max-w-[300px] lg:max-w-md xl:max-w-lg'>BrightLife Enhancement Services: Your Path to <span className='text-primaryGreen'>Holistic Health.</span></h1>
              <p className='font-medium text-sm md:text-xs md:max-w-52 lg:max-w-fit  lg:text-base'>Discover a comprehensive approach to wellness and vitality.</p>
            </motion.div>
            <motion.div
              // initial={{ opacity: 0 }}
              // animate={{ opacity: 1 }}
              // transition={{delay: 1, duration: 3}}
            >
              <div className="max-w-xs">

                <img src={HeroImgMobile} alt="mobile hero image" className='lg:hidden w-full h-full lg:w-[380px]' />
              </div>
              <img src={HeroImg} alt="hero image" className='hidden lg:block lg:absolute top-[70px] right-0 lg:w-[480px] xl:w-[600px]' />
            </motion.div>
          </div>
          <div className='relative w-full'>

          <div className='absolute inset-x-0 -bottom-[100px] mx-1 mb-10 md:-bottom-[60px] lg:bottom-[inherit] lg:mt-10 xl:mt-0 '>
            <CtaBanner isblur={true} />
          </div>
          </div>
        </div>
      </div>
      <div className='bg-white pb-20 md:pb-10 font-lato'>
        <motion.div className='mx-8 md:mx-12 py-12 xl:mx-auto xl:max-w-6xl' style={{
          scale, opacity
        }}
          // initial={{opacity: 0}}
          // whileInView={{opacity: 1}}
          // transition={{ease: 'easeIn', duration: 1}}
          // viewport={{amount: 'all', once: true }}
        >
          <div className='flex flex-col-reverse lg:flex-row gap-2 md:gap-4 lg:gap-8 items-start lg:items-center'>
            <div className='lg4 relative'>
              {/* <LazyLoad image={HomeImg1} alt={"image"} className='lg:w-[700px]' /> */}
              <img src={HomeImg1} alt="image" className='lg:w-[700px]' />
                <div className='bg-primaryGreen flex justify-between gap-2 md:gap-6 p-2 md:p-4 rounded-2xl lg:hidden absolute  inset-x-0 -bottom-16 md:-bottom-9 mx-2'>
                  <div className=' '>
                  <FiUserCheck className='text-3xl  bg-white rounded-md text-primaryGreen w-10 h-10 p-2' />
                  </div>
                  <div className='text-white'>
                    <h4 className='text-sm'>Initial Visits</h4>
                    <p className='text-xs'>Our initial consultations are conducted in person to establish a strong therapeutic relationship and assess your individual needs.</p>
                  </div>
                </div>
            </div>
            <div>
              <h3 className='text-2xl lg:text-3xl xl:text-4xl'>Prioritize your <span className='text-primaryGreen'>well-being</span></h3>
              <p className='text-sm xl:text-base  xl:max-w-lg lg:max-w-md py-4'>We understand that your mental health is a priority. That's why we offer a flexible approach to care that combines in-person appointments with convenient telehealth options.</p>
              <div className='bg-primaryGreen lg:flex justify-between gap-4 p-4 rounded-lg hidden'>
                <div className=' '>
                <FiUserCheck className='text-3xl bg-white rounded-lg text-primaryGreen w-12 h-12 p-2' />
                </div>
                <div className='text-white'>
                  <h4 className='text-lg xl:text-xl'>Initial Visits</h4>
                  <p className='text-sm xl:text-base max-w-2xl'>Our initial consultations are conducted in person to establish a strong therapeutic relationship and assess your individual needs.</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <motion.div className=' font-lato md:pb-10 pb-20' style={{scale: scale1}}>
        <div className='mx-8 md:mx-12 py-12 xl:mx-auto xl:max-w-6xl'>
          <div className='flex flex-col-reverse lg:flex-row-reverse gap-2 md:gap-4 lg:gap-8 items-start lg:items-center'>
            <div className='lg:w-3/4 relative'>
              <img src={HomeImg2} alt="image" className='lg:w-[700px]' />
                <div className='bg-white text-primaryGreen flex justify-between gap-2 md:gap-6 p-2 md:p-4 rounded-2xl lg:hidden absolute  inset-x-0 -bottom-16 md:-bottom-9 mx-2'>
                  <div className=' '>
                  <CgCalendarDates className='text-3xl bg-primaryGreen rounded-lg text-white w-10 h-10 p-2' />
                  </div>
                  <div className='text-primaryGreen'>
                    <h4 className='text-sm'>Scheduling</h4>
                    <p className='text-xs'>To schedule an appointment or a phone consultation with one of our experienced therapists, please book an appointment or visit the contact page. Our friendly staff will be happy to assist you.</p>
                  </div>
                </div>
            </div>
            <div>
              <h3 className='text-2xl lg:text-3xl xl:text-4xl capitalize lg:max-w-sm'>Schedule Your Appointment <span className='text-primaryGreen'>with ease</span></h3>
              <p className='text-sm xl:text-base lg:max-w-md xl:max-w-[820px] py-4'>Booking an appointment has never been easier. With flexible hours and a convenient scheduling system, you can reserve your spot for a personalized consultation at a time that fits your lifestyle.</p>
              <div className='bg-white text-primaryGreen lg:flex justify-between gap-4 p-4 rounded-lg hidden'>
                <div className=' '>
                <CgCalendarDates className='text-3xl bg-primaryGreen rounded-lg text-white w-12 h-12 p-2' />
                </div>
                <div>
                  <h4 className='text-lg xl:text-xl'>Scheduling</h4>
                  <p className='text-sm xl:text-base lg:max-w-xl max-w-2xl'>To schedule an appointment or a phone consultation with one of our experienced therapists, please book an appointment or visit the contact page. Our friendly staff will be happy to assist you.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      {/* services */}
      <div className='bg-white font-lato'>
        <div className='mx-8 md:mx-12 py-16 xl:mx-auto xl:max-w-6xl'>
          <div className='text-center flex flex-col items-center'>
            <h3 className='text-4xl'>Our <span className="text-primaryGreen italic">Services</span></h3>
            <p className='text-sm lg:text-base my-4 max-w-4xl '>We offer compassionate, confidential support tailored to you. Our expert team provides counseling, therapy, and wellness programs to help you manage stress, anxiety, and more. We're here to guide you toward better well-being.</p>
          </div>
          <div className='hidden lg:block my-6'>
            <Slider {...settings}>
            <div className="relative">
                <LazyLoad image={slideImg1} alt={"carousel images"} />
                <h1 className="absolute inset-x-0 bottom-[6px] rounded-b-3xl mx-auto bg-gradient-to-t from-primaryGreen to-transparent text-lg font-bold text-white w-[98.5%] text-center p-4">Treatment Programs</h1>
              </div>
                <LazyLoad image={slideImg1} alt={"carousel images"} />
                <LazyLoad image={slideImg1} alt={"carousel images"} />
            </Slider>
        </div>
        <div className='lg:hidden my-4'>
            <Slider {...mobileSettings}>
                <LazyLoad image={slideImg1} alt={"carousel images"}/>
                <LazyLoad image={slideImg1} alt={"carousel images"} />
                <LazyLoad image={slideImg1} alt={"carousel images"} />
            </Slider>
        </div>
        <div className="flex justify-center mt-10">
          <Link to={"/services"}>
            <button className="bg-primaryGreen text-white px-6 py-2 text-lg rounded-xl">See more</button>
          </Link>
        </div>
        </div>
      </div>
      {/* marquee */}
      <div className='font-lato'>
        <div className='mx-8 md:mx-12 py-16 xl:mx-auto xl:max-w-6xl'>
        <div className="overflow-hidden">
          <div className="flex items-center space-x-8 animate-marquee">
            <div className="flex items-center space-x-4 w-screen">
              <img src={carf} alt="Logo" className="w-40 h-w-40" />
              <p className="text-2xl max-w-xl"> Our <span className="text-primaryGreen">Health Promotion</span> Support and <span className="text-primaryGreen"> Healthy Lifestyle</span> Development.
              </p>
            </div>
            <img src={medical} alt="Red Cross" className="w-40 h-w-40" />
            <p className="text-2xl">Through <span className="text-primaryGreen">best practices</span> and evidence-based interventions, we enhance <span className="text-primaryGreen">Self-management</span> and physical conditions.
            </p>
          </div>
        </div>
        </div>
      </div>
      {/* footer */}
      <Footer />
    </div>
  )
}

export default Home