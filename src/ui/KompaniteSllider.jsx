import React from 'react';
import { useRef} from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { ButtTel } from './Button';
import { kompaniyeSlider } from '../Data/data';

const KompaniyeSlider = ({}) => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    draggable: true, 
    swipe: true,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="relative">
        <Slider ref={sliderRef} {...settings}>
          {kompaniyeSlider.map((item) => (
                <div key={item.id} className='border border-[#E5E2EE]  rounded-[10px] overflow-hidden'> 
                  <div className='bg-white   flex justify-center items-center border-b border-[#E5E2EE]' >
                    <img src={item.img} alt="image" />
                  </div>
                  <div className='px-[15px] lg:px-[20px] lg:pt-[15px] pt-[15px]'>
                    <p className='w-[70%] lg:w-[90%] text-[12px] md:text-[14px] lg:text-[16px] font-medium lg:leading-[140%] leading-[120%] '>{item.title} </p>
                  </div>
                  <div className='p-[15px]'><p className='text-[#7A7687] text-[16px] font-medium leading-[140%]'>
                    {item.desc}
                    </p></div>
                </div>
          ))}
        </Slider>
      </div>

      <div className="flex justify-center lg:justify-between items-center mt-[25px] lg:mt-[40px]  ">

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

        <div className="flex sm:hidden lg:flex  gap-4">
          <ButtTel title={'Сертификаты'} />
        </div>
      </div>
    </>
  );
};

export default KompaniyeSlider;