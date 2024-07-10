import React from 'react';
import Slider from "react-slick";
import pay1 from "../../../public/assets/payment1.png";
import pay2 from "../../../public/assets/payment2.png";
import pay3 from "../../../public/assets/payment3.png";
import pay4 from "../../../public/assets/payment4.png";
import { ButtTel } from '../../ui/Button';

const SingleItem3 = () => {
  const payData = [
    {
      img: pay1,
      title: "Апробация"
    },
    {
      img: pay2,
      title: "Помощь в подборе оборудования"
    },
    {
      img: pay3,
      title: "Помощь инженеров в настройке"
    },
    {
      img: pay4,
      title: "Пуско-наладочные работы"
    },
  ];

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
        breakpoint: 768,
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

  return (
    <div className="relative px-[25px] py-[25px] bg-white rounded-[10px] ">
      <p className="text-[12px] md:text-[16px] lg:text-[18px] font-semibold pb-[20px] border-b md:border-b-0">Услуги и сервис</p>
      <Slider {...settings}>
        {payData.map((item, index) => (
          <div key={index} className="border border-[--border] lg:h-[224px] rounded-[10px] overflow-hidden">
            <div className="bg-white h-[102px] lg:h-[146px] flex justify-center items-center border-b border-[--border]">
              <img src={item.img} alt="image" className="w-full h-full" />
            </div>
            <div className="p-[15px] lg:p-[20px]">
              <p className="w-full lg:w-[90%] text-[12px] md:text-[14px] lg:text-[16px] font-medium lg:leading-[140%] leading-[120%]">
                {item.title}
              </p>
            </div>
          </div>
        ))}
      </Slider>
      <div className="flex justify-center pt-[20px]">
        <ButtTel title={"Все услуги"}/>
      </div>
    </div>
  );
};

export default SingleItem3;
