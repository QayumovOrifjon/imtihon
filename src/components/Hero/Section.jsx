import React from "react";
import img1 from '../../../public/assets/Symbol.svg';
import img2 from '../../../public/assets/Symbol1.svg'
import img3 from '../../../public/assets/Symbol2.svg'
import img4 from '../../../public/assets/Symbol3.svg'

const Section = () => {
  return (
    <div className=" pb-[150px] container">
      <div className="max-w-full ">
        <h2 className="text-[30px] text-[#202020] pb-[30px]">
          Почему выбирают нас?
        </h2>
        <div className=" flex flex-wrap justify-between ">
          <div className="w-[340px] h-[320px] border rounded-lg flex-col gap-2  flex justify-center items-center">
     <img src={img1} alt="" className="w-[55px] h-[55px]"/>
            <h2 className="text-[#202020] text-center text-[16px] font-medium leading-[140%] mt-[40px]">Быстрая доставка</h2>
          </div>
          <div className="w-[340px] h-[320px] rounded-lg border flex-col flex gap-2 justify-center items-center">
        <img src={img2} alt=""  className="w-[55px] h-[55px]"/>
            <h2 className="text-[#202020] text-center text-[16px] font-medium leading-[140%] mt-[40px] w-[150px]">Весь товар сертифицирован</h2>
          </div>
          <div className="w-[340px] h-[320px] rounded-lg border flex-col flex gap-2 justify-center items-center">
      <img src={img3} alt=""  className="w-[55px] h-[55px]"/>
            <h2 className="text-[#202020] text-center text-[16px] font-medium leading-[140%] mt-[40px] w-[150px]">Гибкая система скидок</h2>
          </div>
          <div className="w-[340px] h-[320px] rounded-lg border flex flex-col  gap-2 justify-center items-center">
        <img src={img4} alt=""  className="w-[55px] h-[55px]"/>
            <h2 className="text-[#202020] text-center text-[16px] font-medium leading-[140%] mt-[40px]">Лет на рынке</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
