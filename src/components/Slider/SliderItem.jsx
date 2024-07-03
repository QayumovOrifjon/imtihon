import React from 'react';
import { ButtSte, ButtTel } from "../../ui/Button"
import img from '../../../public/assets/slider.png'
import img2 from '../../../public/assets/image.png'

const SliderItem = () => {
  return (
    
    <div className={` min-w-full h-full grid grid-cols-1 md:grid-cols-2 `}>
    <div className=" px-[20px] py-[17px] lg:py-[33px] lg:pl-[60px] ">
      <p className=" text-[28px] lg:text-[48px] font-medium text-[--second] mb-[15px] md:mb-[25px] leading-[110%]">
        Заголовок баннера <br /> в пару строк
      </p>
      <p className="text-[12px] lg:text-[16px] font-medium leading-[140%] text-[--text] w-[80%] md:w-[60%] mb-[23px] lg:mb-[65px] ">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor{' '}
      </p>

      <div className='flex gap-4' >
        <ButtTel title={'Запросить цену'} />
        <ButtSte title={"В каталог"} />
      </div>
    </div>
    
    <img src={img} alt="" className="h-full hidden w-full md:block " />
    <img src={img2} alt="" className="h-[200px] sm:h-[300px] rounded-[10px] w-full pt-[7px] md:hidden " />
    
  </div>
  )
}

export default SliderItem