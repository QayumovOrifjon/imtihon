import React from "react";
import { ButtTel } from '../../ui/Button';
import { brend } from "../../Data/data";
import Brend from "../../ui/Brend";

const Brends = () => {
  return ( 
    <div className="container grid grid-cols-1 g:grid-cols-[1fr_3fr] overflow-hidden py-[60px] md:py-[120px] lg:py-[150px] ">
      <div className="mb-[31px] lg:mb-0 flex justify-between items-center lg:items-start ">

        <div className=''>
        <p className="text-[18px] md:text-[20px] lg:text-[30px] font-medium leading-[120%] text-[#202020] ">
        Бренды
      
  </p>
          <p className="text-[12px] text-[#8C8B89] md:text-[14px] lg:text-[16px] font-medium lg:leading-[140%] leading-[120%] mt-[10px] lg:mt-[25px] ">
            Эксклюзивные поставщики
          </p>
        </div>
        <div className=' hidden sm:block lg:hidden '>
        <ButtTel title={"Сертификаты"} />
        </div>
      </div>

      <div className="overflow-hidden">
        <Brend brend={brend} />
      </div>
    </div>
  );
};

export default Brends;
