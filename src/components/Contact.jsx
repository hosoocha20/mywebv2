import React, {forwardRef} from 'react'
import { AnimationOnScroll } from "react-animation-on-scroll";

const Contact = forwardRef((props , ref) => {
  return (
    <div ref={ref} className='w-full h-screen bg-[#121212] text-[#eaeaea] px-[4rem] py-[2rem]'>
      <div className='w-full h-full flex flex-col justify-center items-center'>
        <div className='flex w-fit justify-center gap-[1.5rem] relative'>
          <AnimationOnScroll animateIn="animate__fadeInUp" delay={100}><h1 className='text-[5.5rem] contact-text '>Get</h1></AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__fadeInUp" delay={200}><h1 className='text-[5.5rem] contact-text '>in</h1></AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__fadeInUp" delay={300}><h1 className='text-[5.5rem] contact-text '>Touch</h1></AnimationOnScroll>
          
        </div>
        <AnimationOnScroll animateIn="animate__fadeIn" delay={400}><a href="mailto:Hosoo.cha@gmail.com" className='z-[99999]'>hosoo.cha@gmail.com</a></AnimationOnScroll>
        


        
      </div>
    </div>
  )
});

export default Contact