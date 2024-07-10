import React from 'react';
import { LuBarChartHorizontalBig } from 'react-icons/lu';
import { GoHeart } from 'react-icons/go';



import Slider from 'react-slick';
import {  ButtTel } from '../../ui/Button';
import { aksiya } from '../../Data/data';

const PalataSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    draggable: true,
    swipe: true,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
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

  const Status = (status) => {
    switch (status) {
      case 'Новинка':
        return { backgroundColor: '#E1EFE6', color: '#088269', borderColor: '#088269' };
      case 'Хит продаж':
        return { backgroundColor: '#E6E6FD', color: '#424285', borderColor: '#424285' };
      case '-30%':
        return { backgroundColor: '#FFE095', color: '#AD7B00', borderColor: '#AD7B00' };
      default:
        return { backgroundColor: '#FFFFFF', color: 'inherit', borderColor: 'transparent' };
    }
  };

  return (
    <div className="relative px-[25px] py-[25px] bg-white rounded-[10px] ">
      <p className=" md:hidden font-semibold pb-[15px] mb-[20px] text-[12px] border-b  border-[#088269]">
        Список товаров
      </p>

      <Slider {...settings}>
        {aksiya.map((item ) => (
         <div
         className="rounded-[10px]  w-full max-w-[236px] md:max-w-[320px] border border-[#E5E2EE] overflow-hidden "
       >
         <div className="bg-white p-[10px] md:p-[30px] lg:p-[50px] relative mb-[15px] lg:mb-[20px]  flex justify-center items-center border-b border-[#E5E2EE]">
           <img src={item.img} alt="image" className="w-full object-contain h-[172px] md:h-[142px]  lg:h-[229px]" />
           <span
             style={Status(item.status)}
             className={`absolute top-[15px] left-[15px] text-[#088269] text-[12px] lg:text-[14px] font-semibold leading-[normal] border border-[#088269 ] py-1 px-[10px] rounded-full`}
           >
             {item.status}
           </span>
           <div className="flex items-center gap-[10px] absolute top-[15px] right-[15px]">
             <LuBarChartHorizontalBig className="w-6 h-6 rotate-[-90deg] hover:text-[#088269] duration-200 cursor-pointer" />
   
             <div 
             // onClick={(e)=> handleLikeClick(e, item)}
             >
               {/* {isLiked ? (
                 <GoHeartFill className="w-6 h-6 text-[--pri] duration-200 cursor-pointer" />
               ) : (
                 <GoHeart className="w-6 h-6 hover:text-[--pri] duration-200 cursor-pointer" />
               )} */}
                  <GoHeart className="w-6 h-6 duration-200 cursor-pointer hover:text-[#088269] " />
             </div>
           </div>
         </div>
   
         <div className="flex flex-col   px-[15px] pb-[10px] lg:pb-[15px]">
           <div className="flex flex-col   mb-[15px]">
             <p className="text-[16px] lg:text-[18px] w-[80%] font-semibold leading-[normal] mb-[10px]">
               {item.title}
             </p>
             <span className="text-[12px] font-normal leading-[normal] text-[--text] mb-1">
               Артикул: {item.number}
             </span>
             <span className="text-[12px] font-normal leading-[normal] text-[--text]">
               {item.pay ? 'В наличии' : 'нет в наличии'}
             </span>
             <p className=" mt-[15px] lg:mt-[30px] text-[16px] lg:text-[18px] font-semibold leading-[normal] text-[--second]">
               {item.price} руб.
             </p>
           </div>
           <button
             onClick={(e) => handleCartClick(e, item)}
             className="text-[12px]   py-2 lg:py-[11px] px-[20px] lg:px-[30px] border border-[#088269] hover:bg-[#088269] hover:text-white text-[#088269] rounded-full font-semibold  hover:border-[#07745E] duration-200  "
           >
             Добавить в корзину
           </button>
         </div>
       </div>
        ))}
      </Slider>
      <div className="hidden md:flex justify-center pt-[20px]  ">
        <ButtTel title={'Все товары'} />
      </div>
    </div>
  );
};

export default PalataSlider;
