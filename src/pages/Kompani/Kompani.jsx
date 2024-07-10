import React, { useRef, useState } from 'react'
import Header from '../../components/Header/Header'
import { useNavigate } from 'react-router-dom'
import img from '../../../public/assets/Rectanglemin.png'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import img1 from '../../../public/assets/6-min.png' 
import img2 from '../../../public/assets/7-min.png' 
import img3 from '../../../public/assets/8-min.png' 
import imgAbout from '../../../public/assets/9-min.png'
import Marqueee from '../../components/Hero/Marquee';
import Section from '../../components/Hero/Section';
import Brends from '../../components/Hero/Brends';
import { sertifikat } from '../../Data/data';
import Slider from 'react-slick';
import Form from '../../ui/Form';
import Footer from '../../components/Footer.jsx/Footer';

const Kompani = () => {
  const navigate = useNavigate();

  const breadcast = () => {
    navigate('/')
  }

  const [Img, setImg] = useState(1);

  const handle = (img) => {
    if (Img == 1) {
      return img1;
    } else if (Img == 2) {
      return img2;
    } else if (Img == 3) {
      return img3;
    }
  };



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

  return (
 <>
 <Header/>
 <div className=' mt-[220px]'>
       
 <div className='flex pt-5 container'>
<p onClick={breadcast} className='text-[#7A7687] text-[14px] font-normal leading-[normal] cursor-pointer'>Главная {">"}</p> <span className='text-[#202020] text-[14px] font-normal leading-[normal]'>О компании</span>

  
</div> 
<div className="w-full container mb-[60px] md:mb-[120px] lg:mb-[150px] mt-[15px] md:mt-[25px] lg:mt-[40px] ">
        <div className="mb-[25px] lg:mb-10">
          <img src={img} alt="" className='w-full'/>
        </div>

        <div className=" grid grid-cols-1 lg:grid-cols-2 ">
          <p className="text-[28px] md:text-[34px] lg:text-[48px] font-medium leading-[110%] text-[#202020] mb-[15px] md:mb-[20px] ">
            Глобал медикал трейд
          </p>

          <div className='pr-[35px]'>
            <p className="text-[12px] md:text-[14px] lg:text-[16px] font-medium text-[#202020] mb-4 ">
              Учитывая стремительное развитие мировых медицинских технологий, врачи в Российской
              Федерации и соседних странах столкнулись с вызовом, требующим обновления приборов
              в различных направлениях, от установок компьютерной томографии до ультразвуковых
              сканеров и ЛОР комбайнов. Переход на полностью цифровую платформу при диагностике
              и лечении заболеваний также стал серьёзным испытанием для большинства больниц
              и частных клиник.
            </p>
            <p className="text-[12px] md:text-[14px] lg:text-[16px] font-medium text-[#202020] ">
              Компания ООО «Глобал Медикал Трейд» считает своим долгом оказать специалистам
              всю необходимую помощь в деле поставок медицинского оборудования. Наш каталог включает
              передовое оборудование от лучших производителей России, Европы, Азии и США.
            </p>
          </div>
        </div>
      </div>

      <div className="container mb-[60px] md:mb-[120px] lg:mb-[150px] grid grid-cols-1 lg:grid-cols-2 ">
        <div>
        <p>Цифры и факты</p>
          <p className="text-[12px] md:text-[14px] lg:text-[16px] font-medium leading-[120%] lg:leading-[140%] w-[90%] lg:w-[50%] pt-[10px] md:pt-[20px] lg:pt-[25px] pb-[30px] opacity-50  ">
            Мы работаем на результат и продаём только качественную продукцию
          </p>
        </div>

        <div className="flex flex-col gap-[20px] ">
          <div className="grid grid-cols-[2fr_3fr] items-center border-b border-[#D5D1E1] pb-[10px] lg:pb-[20px] ">
            <p className="text-[28px] md:text-[34px] text-[#088269] lg:text-[48px] font-medium leading-[110%]">
              7 лет
            </p>
            <p className="text-3 md:text-[14px] lg:text-4 text-[#202020] ">на рынке</p>
          </div>
          <div className="grid grid-cols-[2fr_3fr] items-center border-b border-[#D5D1E1] pb-[10px] lg:pb-[20px] ">
            <p className="text-[28px] md:text-[34px] text-[#088269] lg:text-[48px] font-medium leading-[110%]">
              964+
            </p>
            <p className="text-3 md:text-[14px] lg:text-4 text-[#202020] ">
              оригинальной продукции со всего мира
            </p>
          </div>
          <div className="grid grid-cols-[2fr_3fr] items-center border-b border-[#D5D1E1] pb-[10px] lg:pb-[20px] ">
            <p className="text-[28px] md:text-[34px] text-[#088269] lg:text-[48px] font-medium leading-[110%]">
              23+
            </p>
            <p className="text-3 md:text-[14px] lg:text-4 text-[#202020] ">
              международных сертификатов качества
            </p>
          </div>
          <div className="grid grid-cols-[2fr_3fr] items-center">
            <p className="text-[28px] md:text-[34px] text-[#088269] lg:text-[48px] font-medium leading-[110%] react-number">
              2452+
            </p>
            <p className="text-3 md:text-[14px] lg:text-4 text-[#202020] ">
              товаров всегда в наличии
            </p>
          </div>
        </div>
      </div>

      <div className="  mb-[60px] md:mb-[120px] lg:mb-[150px] bg-[#088269]">
        <div className="container grid grid-cols-1 lg:grid-cols-2 py-[50px] lg:py-[80px] mr-[120px]  ">
          <img src={imgAbout} alt="image" className=" pb-[25px] lg:pr-[120px]  " />

          <div>
            <p className="text-[18px] md:text-[20px] lg:text-[30px] font-medium leading-[120%] text-white pb-[10px] md:pb-[20px] lg:pb-[25px] ">
              Наши партнёры
            </p>
            <p className="custom-text lg:text-[16px] text-white ">
              Нашими партнёрами являются наиболее серьёзные игроки на мировом рынке профильного
              оборудования. Это позволяет нам наладить долгосрочное и успешное сотрудничество,
              добиться лучших цен для государственных учреждений здравоохранения, медицинских
              центров, лабораторий, а также ветеринарных клиник и кабинетов. Купить нужную
              вам технику по оптимальным ценам, выбрать подходящую модель устройства в рамках
              бюджета в нашей компании окажется намного проще. Мы поддерживаем скидки и особые
              предложения для наших партнёров, предлагаем оформление аппаратов в лизинг и готовы
              предоставить системы в рассрочку на выгодных условиях.
            </p>
          </div>
        </div>
      </div>

      <div className=" container grid grid-cols-1 lg:grid-cols-2 pb-[60px] md:pb-[120px] lg:pb-[150px]  ">
        <div className="mb-[30px] md:mb-[40px]">
          <div className="w-[80%] sm:w-[50%] md:w-[40%] lg:w-[90%] xl:w-[70%] ">
          <p>Опытные сотрудники из производственных компаний</p>
          </div>
          <p className="custom-text custom-space md:w-[80%] ">
            Наши сотрудники имеют огромный опыт работы в сложных условиях, в том числе в разгар
            пандемии COVID–19. В этот период мы осуществили поставки медицинских аппаратов
            в новейшие клиники Минобороны в различных регионах страны.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-[10px]  ">
          <div className="border border-[#E5E2EE] rounded-[10px] overflow-hidden ">
            <div className="w-full h-[261px] border-b bg-[#d6d7d9] ">
              <img src={handle()} alt="image" className="w-full h-full object-cover" />
            </div>
            <div className="p-[15px] md:p-[20px]  ">
              <p className="custom-text font-medium leading-[140%]">
                {Img == 1
                  ? 'Константин Константинопольский'
                  : Img == 2
                  ? 'НМИЦ онкологии Блохина'
                  : 'Лабораторная диагностика'}
              </p>
              <p className="text-3 lg:text-[14px] text-[--text] ">Основатель компании</p>
            </div>
          </div>

          <div className="hidden md:flex flex-col gap-[10px] ">
            <img
              src={Img == 1 ? img2 : Img == 2 ? img1 : img1}
              alt="image"
              className="h-[178px]  rounded-[10px] "
            />
            <img
              src={Img == 1 ? img3 : Img == 2 ? img3 : img3}
              alt="image"
              className="h-[178px] "
            />
          </div>

          <div className="hidden md:flex gap-4 items-center mt-[30px] ">
            <button
              onClick={() => setImg((prev) => (prev > 1 ? prev - 1 : 3))}
              className="bg-[#F8F7F3] hover:border-[#088269] duration-200 focus:bg-[#e1efe6] focus:border-[#088269] transition-all rounded-full border border-[#E5E2EE] p-3"
            >
              <FaArrowLeft className="w-[17px] h-[17px]" />
            </button>

            <button
              onClick={() => setImg((prev) => (prev < 3 ? prev + 1 : 1))}
              className="bg-[#F8F7F3] hover:border-[#088269] duration-200 focus:bg-[#e1efe6] focus:border-[#088269] transition-all rounded-full border border-[#E5E2EE] p-3"
            >
              <FaArrowRight className="w-[17px] h-[17px]" />
            </button>
          </div>
        </div>
      </div>
 </div>
 <Marqueee/>
<div className='mt-[150px]'> <Section/></div>
 <Brends/>
 <div className="bg-[#F8F7F3] container grid grid-cols-1  lg:grid-cols-[1fr_3fr] overflow-hidden py-[60px] md:py-[120px] lg:py-[150px]">
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
    <div className='grid grid-cols-2 container gap-3 bg-[#F8F7F3] pb-[150px]'>
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
    <Footer/> 
 </>
  )
}

export default Kompani