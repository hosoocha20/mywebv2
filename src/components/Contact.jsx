import React, {forwardRef} from 'react'

const Contact = forwardRef((props , ref) => {
  return (
    <div ref={ref} className='w-full h-screen bg-[#121212] text-[#eaeaea] px-[2rem] py-[2rem]'>
      <h1 className='text-[5rem] contact-text'>Get in touch</h1>
    </div>
  )
});

export default Contact