import React, { useRef } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ButtSte, ButtTel } from '../../ui/Button';
import { kabinet } from '../../Data/data';



const Kabinet = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className=" mb-[82px] md:mb-[120px] lg:mb-[150px]  pl-[35px]">
      <div className=" mb-[25px] lg:mb-[43px]">
      
      </div>
      <p className="text-[18px] md:text-[20px] lg:text-[30px] font-medium leading-[120%] text-[#202020] ">
      Комплексное оснащение кабинетов
      
  </p>
      <div className="overflow-hidden ">
        <Slider ref={sliderRef} {...settings}>
          {kabinet.map((item) => (
            <div key={item.id} className="border max-w-[430px] border-[#E5E2EE] rounded-[10px]">
              <div className="lg:h-[517px]">
                <img src={item.img} alt={item.title} className="w-full h-full" />
              </div>
              <div className=" py-[15px] px-[15px]  lg:px-[25px] lg:py-[20px]">
                <p className=" text-[12px] md:text-[14px] lg:text-[16px] font-medium leading-[140%]">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <div className="flex justify-center sm:justify-end lg:justify-between items-center mt-[40px]  ">
        <div className="hidden lg:flex gap-4 items-center ">
          <button
            onClick={() => sliderRef.current.slickPrev()}
            className="bg-[#F8F7F3] hover:border-[#088269] duration-200 focus:bg-[#e1efe6] focus:border-[#088269] transition-all rounded-full border border-[#E5E2EE] p-3"
          >
            <FaArrowLeft className="w-[17px] h-[17px]" />
          </button>

          <button
            onClick={() => sliderRef.current.slickNext()}
            className="bg-[#F8F7F3] hover:border-[#088269] duration-200 focus:bg-[#e1efe6] focus:border-[#088269] transition-all rounded-full border border-[#E5E2EE] p-3"
          >
            <FaArrowRight className="w-[17px] h-[17px]" />
          </button>
        </div>

        <div className="flex flex-col sm:flex-row justify-center px-[35px]  gap-4">
          <ButtSte title={'Бесплатная консультация'} />
          <ButtTel title={'Рассчитать стоимость'} />
        </div>
      </div>
    </div>
  );
};

export default Kabinet;
