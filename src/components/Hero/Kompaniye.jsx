import React from 'react'
import { ButtTel } from '../../ui/Button';
import KompaniyeSlider from '../../ui/KompaniteSllider';

const Kompaniye = () => {
    return (
        <div className="pl-[35px] grid grid-cols-1 lg:grid-cols-[1fr_3fr] overflow-hidden py-[60px] md:py-[120px] lg:py-[150px] ">
          <div className="mb-[31px] lg:mb-0 flex justify-between items-center lg:items-start ">
    
            <div className=''>
            <p className="text-[18px] md:text-[20px] lg:text-[30px] font-medium leading-[120%] text-[#202020] ">
            Новости компании
          
      </p>
              
            </div>
            <div className=' hidden sm:block lg:hidden '>
            <ButtTel title={"Сертификаты"}/>
            </div>
          </div>
    
          <div className="overflow-hidden">
       <KompaniyeSlider/>
          </div>
        </div>
      );
}

export default Kompaniye