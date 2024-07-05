import React, { useRef} from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { GoHeart } from 'react-icons/go';
import { LuBarChartHorizontalBig } from 'react-icons/lu';

import Slider from 'react-slick';
import { carousel } from '../Data/data';
import { ButtCat, ButtSte, ButtTel } from './Button';

const Carousel = ({}) => {
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
      <div className="relative ">
        <Slider ref={sliderRef} {...settings}>
          {carousel.map((item) => (
            <div
              key={item.id}
              className="rounded-[10px] w-full max-w-[236px] md:max-w-[315px] border border-[#D5D1E1] overflow-hidden "
            >
              <div className="bg-white p-[10px] md:p-[30px] lg:p-[50px] relative mb-[15px] lg:mb-[20px]  flex justify-center items-center border-b border-[#D5D1E1]">
                <img src={item.img} alt="image" className='w-full h-[172px] md:h-[142px]  lg:h-[229px]' />
                <span className="absolute top-[15px] left-[15px] text-[#088269] text-[12px] lg:text-[14px] font-semibold leading-[normal] border border-[#088269] bg-[#E1EFE6] py-1 px-[10px] rounded-full ">
                  {item.status}
                </span>
                <div className="flex items-center gap-[10px] absolute top-[15px] right-[15px]">
                  <LuBarChartHorizontalBig className="w-6 h-6 rotate-[-90deg] hover:text-[#088269] duration-200 cursor-pointer" />
                  <GoHeart className="w-6 h-6 hover:text-[#088269] duration-200 cursor-pointer" />
                </div>
              </div>

              <div className="flex flex-col px-[15px] pb-[10px] lg:pb-[15px]">
                <div className="flex flex-col w-[90%] xl:w-[60%] mb-[15px]">
                  <p className="text-[16px] lg:text-[18px] font-semibold leading-[normal] mb-[10px]">
                    {item.title}
                  </p>
                  <span className="text-[12px] font-normal leading-[normal] text-[#888494] mb-1">
                    Артикул: {item.element}
                  </span>
                  <span className="text-[12px] font-normal leading-[normal] text-[#888494]">
                    {item.isAvailable ? 'В наличии' : 'нет в наличии'}
                  </span>
                  <p className=" mt-[15px] lg:mt-[30px] text-[16px] lg:text-[18px] font-semibold leading-[normal] text-[#202020]">
                    {item.price} руб.
                  </p>
                </div>
                <ButtCat title={'Добавить в корзину'} />
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <div className="flex justify-end lg:justify-between items-center mt-[25px] lg:mt-[40px]  ">
        <div className="hidden lg:flex gap-4 items-center ">
          <button
            onClick={() => sliderRef.current.slickPrev()}
            className="bg-[#F8F7F3] hover:border-[#088269] duration-200 focus:bg-[#e1efe6] focus:border-[#088269] transition-all rounded-full border border-[#D5D1E1] p-3"
          >
            <FaArrowLeft className="w-[17px] h-[17px]" />
          </button>

          <button
            onClick={() => sliderRef.current.slickNext()}
            className="bg-[#F8F7F3] hover:border-[#088269] duration-200 focus:bg-[#e1efe6] focus:border-[#088269] transition-all rounded-full border border-[#D5D1E1] p-3"
          >
            <FaArrowRight className="w-[17px] h-[17px]" />
          </button>
        </div>

        <div className="flex sm:hidden lg:flex  gap-4 px-[35px]">
          <ButtSte title={'Бесплатная консультация'} />
          <ButtTel title={'Все товары'} />
        </div>
      </div>
    </>
  );
};

export default Carousel;
