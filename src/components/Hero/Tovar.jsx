import React from 'react';
import Carousel from '../../ui/Carousel';
import { carousel } from '../../Data/data';
import { ButtSte, ButtTel } from '../../ui/Button';

const Tovar = () => {
  return (
    <div className="pl-[35px] grid grid-cols-1 lg:grid-cols-[1fr_3fr] overflow-hidden mb-[60px] md:mb-[120px] lg:mb-[150px] ">
     
      <div className="mb-[23px] md:mb-[19px] lg:mb-[0px]">
       
        <div className="mb-[25px] md:mb-[35px] lg:mb-[40px] flex justify-between">
         <p className='text-[18px] md:text-[20px] lg:text-[30px] font-medium leading-[120%] text-[#202020]'>Каталог товаров</p>
          <div className="hidden sm:flex lg:hidden  gap-4">
            <ButtSte title='Бесплатная консультация' />
            <ButtTel title='Все товары' />
          </div>
        </div>
        
        <div className="flex lg:flex-col gap-[15px]">
          <span className="text-[12px] md:text-[14px] opacity-50 lg:text-[16px] font-medium leading-[118%] lg:leading-[140%]">
            Хиты продаж
          </span>
          <span className="text-[12px] md:text-[14px] opacity-50 lg:text-[16px] font-medium leading-[118%] lg:leading-[140%]">
            Новинки
          </span>
          <span className="text-[12px] md:text-[14px] opacity-50 lg:text-[16px] font-medium leading-[118%] lg:leading-[140%]">
            Акции
          </span>
        </div>
      </div>

      <div className="overflow-hidden">
        <Carousel carousel={carousel} />
      </div>
    </div>
  );
};

export default Tovar;
