import React, { useRef } from 'react';
import { RiDownloadLine } from 'react-icons/ri';
import { sertifikat, uslugi } from '../../Data/data';
import { ButtSte, ButtTel } from '../../ui/Button';
import Text from '../../ui/Text';
import Slider from 'react-slick';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Form from '../../ui/Form';
import Footer from '../../components/Footer.jsx/Footer';
import Header from '../../components/Header/Header';
import { useNavigate } from 'react-router-dom';


const Uslugi = () => {

    const sliderRef = useRef(null);

    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      draggable: true,
      swipe: true,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
      ],
    };
  
    const navigate = useNavigate();

    const breadcast = () => {
      navigate('/')
    }
  return (
    <>
   <Header/>
<div className='container'>
<div className='flex pt-5 container mt-[220px]'>
<p onClick={breadcast} className='text-[#7A7687] text-[14px] font-normal leading-[normal] cursor-pointer'>Главная {">"}</p> <span className='text-[#202020] text-[14px] font-normal leading-[normal]'>Услуги</span>

  
</div> 
      <div className="mt-[40px] md:mt-[50px] lg:mt-[100px] ">
        <p className="mb-[30px] lg:mb-[40px]  text-[28px] md:text-[34px] lg:text-[48px] ">Услуги</p>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-[10px] '>
          {uslugi.map((item) => (
      <div className="bg-white rounded-[10px] overflow-hidden border-[#E5E2EE] border grid grid-cols-1 lg:grid-cols-[3fr_2fr]  ">
      <div className="  h-full ">
        <div className="p-[15px] lg:pt-[20px] lg:pr-[15px]  lg:pl-[25px] lg:pb-[25px] h-full flex flex-col justify-between ">
          <div>
            <p className="text-[14px] md:text-[16px] lg:text-[18px] mb-[10px] lg:mb-[15px]  leading-[normal]">
              {item.title}
            </p>
            <p className="text-[12px] font-normal leading-[normal] text-[#7A7687]">Описание услуги</p>
            <p className=" lg:mb-[93px] text-[#7A7687] text-[16px] font-medium leading-[140%]">{item.desc} </p>
          </div>
          <div className="mt-auto  ">
            <ButtSte title={'Заказать'} />
          </div>
        </div>
      </div>

      <div className="  overflow-hidden  ">
        <img src={item.img} alt="image" className="w-full h-[245px] lg:h-full object-cover  " />
      </div>
    </div>
          ))}
        </div>
      </div>

      <div className=" grid grid-cols-1 lg:grid-cols-2  mt-[150px]">
        <div>
          <Text text={'Цифры и факты'} />
          <p className="text-[12px] md:text-[14px] lg:text-[16px] font-medium leading-[120%] lg:leading-[140%] w-[90%] lg:w-[50%] pt-[10px] md:pt-[20px] lg:pt-[25px] pb-[30px] opacity-50  ">
            Мы работаем на результат и продаём только качественную продукцию
          </p>
        </div>

        <div className="flex flex-col gap-[20px] mb-[150px]">
          <div className="grid grid-cols-[2fr_3fr] items-center border-b border-[#E5E2EE] pb-[10px] lg:pb-[20px] ">
            <p className="text-[28px] md:text-[34px] text-[#088269] lg:text-[48px] font-medium leading-[110%]">
              7 лет
            </p>
            <p className="md:text-[14px] text-[16px] font-medium leading-[140%]">на рынке</p>
          </div>
          <div className="grid grid-cols-[2fr_3fr] items-center border-b border-[#E5E2EE] pb-[10px] lg:pb-[20px] ">
            <p className="text-[28px] md:text-[34px] text-[#088269] lg:text-[48px] font-medium leading-[110%]">
              964+
            </p>
            <p className="md:text-[14px] text-[16px] font-medium leading-[140%]">
              оригинальной продукции со всего мира
            </p>
          </div>
          <div className="grid grid-cols-[2fr_3fr] items-center border-b border-[#E5E2EE] pb-[10px] lg:pb-[20px] ">
            <p className="text-[28px] md:text-[34px] text-[#088269] lg:text-[48px] font-medium leading-[110%]">
              23+
            </p>
            <p className="md:text-[14px] text-[16px] font-medium leading-[140%]">
              международных сертификатов качества
            </p>
          </div>
          <div className="grid grid-cols-[2fr_3fr] items-center">
            <p className="text-[28px] md:text-[34px] text-[#088269] lg:text-[48px] font-medium leading-[110%]">
              2452+
            </p>
            <p className="md:text-[14px] text-[16px] font-medium leading-[140%]">
              товаров всегда в наличии
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 ">
        <div className=" ">
          <p className=" font-medium w-[575px] leading-[120%] text-[18px] md:text-[20px] xl:text-[30px] pb-[25px] md:pb-[30px] lg:pb-0  ">
            Вы сможете <span className="text-[#088269] ">оставить заявку</span> на услуги и скачать
            бланк для заполнения
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 mb-[10px] gap-[10px] col-span-2 lg:col-span-1 order-2 lg:order-1  ">
          <label
            htmlFor="fileone"
            className="cursor-pointer flex justify-between items-center  border border-[#E5E2EE] rounded-[10px] p-[22px]  bg-white "
          >
            <p className="text-[16px] lg:text-[18px] font-semibold ">Бланк для заполнения</p>
            <p className=" custom-text text-[--text] font-medium border border-[#E5E2EE] rounded-[5px] p-[5px] ">
              <RiDownloadLine className=" w-[20px] h-[20px] " />
            </p>
            <input type="file" name="" id="fileone" className=" hidden" />
          </label>

          <label
            htmlFor="filetwo"
            className="cursor-pointer flex justify-between items-center  border border-[#E5E2EE] rounded-[10px] p-[22px]  bg-white "
          >
            <p className="text-[16px] lg:text-[18px] font-semibold ">Заполненная форма</p>
            <p className=" custom-text text-[--text] font-medium border border-[#E5E2EE] rounded-[5px] p-[5px] ">
              <RiDownloadLine className=" w-[20px] h-[20px] " />
            </p>
            <input type="file" name="" id="filetwo" className=" hidden" />
          </label>
        </div>

        <div className=" order-3 md:order-1 flex items-center justify-center md:justify-end  lg:col-span-2  lg:mt-[25px] ">
          <ButtTel title={'Оставить заявку'} />
        </div>
      </div>




    <div className="bg-[#F8F7F3] px-[35px] grid grid-cols-1  lg:grid-cols-[1fr_3fr] overflow-hidden py-[60px] md:py-[120px] lg:py-[150px]">
      <div className="mb-[31px] lg:mb-0 flex justify-between items-center lg:items-start ">

        <div className=''>
        <p className="text-[18px] mt-[20px] w-[210px] md:text-[20px] lg:text-[30px] font-medium leading-[120%] text-[#202020] ">
        Сертификаты на продукцию
      
  </p>
          
        </div>
       
      </div>

      <div className=" grid  overflow-hidden ">
      <div className='mb-[25px] md:mb-[30px] '>
   <p></p>
      </div>

      <div className="overflow-hidden">
        <div className="relative ">
          <Slider ref={sliderRef} {...settings}>
            {sertifikat.map((item) => (
              <div
                key={item.id}
                className="max-w-[200px] rounded-[10px] overflow-hidden border-white border-[5px]  "
              >
                <img src={item.img} alt="image" className='h-[184px] md:h-[212px] lg:h-[248px] w-[100%]' />
              </div>
            ))}
          </Slider>
        </div>
        <div className="hidden lg:flex gap-4 items-center mt-[40px] ">
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
      </div>
    </div>
    </div>


    <div className='grid grid-cols-2 gap-3 bg-[#F8F7F3] pb-[150px]'>
      <div className='rounded-xl'>
      <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23985.317776691176!2d69.20951579999999!3d41.283519350000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8a4758a84dc7%3A0xd5e59538910cd043!2sGafur%20Gulyam%20Recreation%20Park!5e0!3m2!1sen!2s!4v1719390343527!5m2!1sen!2s"
            style={{ width: "100%", height: "100%" }}
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            className='rounded-xl'
          ></iframe>
      </div>
      <div>
        <Form text='Вам нужна консультация? '
        subtitle="Задайте их по номеру телефона +7 (495) 000-00-00 или оставьте свои координаты и наш менеджер перезвонит вам через 10 минут
"
        />
      </div>
    </div>
</div>
    <Footer/>
    </>
  );
};

export default Uslugi;
