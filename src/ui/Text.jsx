import React from 'react'
import CustomizedAccordions from './AccordionTwo'

const Text = ({text,subtitle,textTwo}) => {
  return (
   <>
    <p className="text-[18px] md:text-[20px] lg:text-[30px] font-medium leading-[120%]  ">
      
      {text} 
  </p>
  <p className='text-[#7A7687] text-[16px] font-medium leading-[140%] '>
    {subtitle}
  </p>
  <p className='text-[18px] font-semibold leading-[normal]'>
    {textTwo}   
  </p>

   </>
  )
}

export default Text