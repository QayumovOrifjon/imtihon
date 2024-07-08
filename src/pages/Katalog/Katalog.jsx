import React from 'react'
import NapravleniyaList from '../../components/NapravleniyaList'
import Katalog1 from '../../../public/assets/Katalog1.png'
import Katalog2 from '../../../public/assets/Katalog2.png'
import Katalog3 from '../../../public/assets/Katalog3.png'
import Katalog4 from '../../../public/assets/Katalog4.png'
import Katalog5 from '../../../public/assets/Katalog5.png'
import Katalog6 from '../../../public/assets/Katalog6.png'
import Katalog7 from '../../../public/assets/Katalog7.png'
import Katalog8 from '../../../public/assets/Katalog8.png'
import Katalog9 from '../../../public/assets/Katalog9.png'
import Katalog10 from '../../../public/assets/Katalog10.png'
import Kabinet from '../../components/Hero/Kabinet'
import Section from '../../components/Hero/Section'
import Tovar from '../../components/Hero/Tovar'
import Brends from '../../components/Hero/Brends'
import Kompaniye from '../../components/Hero/Kompaniye'
import CustomizedAccordions from '../../components/Hero/Accordion'
import Form from '../../ui/Form'
import Email from '../../components/Email/Email'
import Footer from '../../components/Footer.jsx/Footer'
import Header from '../../components/Header/Header'
import { useNavigate } from 'react-router-dom'


const Katalog = () => {
  const navigate = useNavigate();

    const breadcast = () => {
      navigate('/')
    }

  return (
    <>
    <Header/>
    <div className='flex pt-5 px-[35px]'>
<p onClick={breadcast} className='text-[#7A7687] text-[14px] font-normal leading-[normal] cursor-pointer'>Главная {" > " } </p> <span className='text-[#202020] text-[14px] font-normal leading-[normal]'>Каталог</span>

  
</div> 
      <div className="px-[35px] grid lg:grid-cols-[1fr_3fr] md:pt-[25px] grid-cols-1 gap-[10px] mb-[60px] md:mb-[120px] lg:mb-[150px]">
      <NapravleniyaList/>

      <div className="grid grid-cols-2 md:grid-cols-3  gap-[10px] mb-[25px] ">
        <div className="border border-[#e5e2ee] rounded-[10px] overflow-hidden h-[154px] sm:h-[216px] lg:h-[304px] ">
          <div className=" bg-white h-[109px] sm:h-[148px] lg:h-[220px] ">
            <img src={Katalog1} alt="" className="w-full h-full object-contain " />
          </div>
          <div className=" py-[10px] px-[15px] lg:py-[20px] lg:px-[25px] pr-[50px] border-t ">
            <p className=" text-[12px] md:text-[14px] lg:text-[16px] font-medium leading-[118%] lg:leading-[140%]  ">
              Дерматологическое оборудование
            </p>
          </div>
        </div>

        <div className="border border-[#e5e2ee] rounded-[10px] overflow-hidden h-[154px] sm:h-[216px] lg:h-[304px] ">
          <div className=" bg-white h-[109px] sm:h-[148px] lg:h-[220px] ">
            <img src={Katalog3} alt="" className="w-full h-full object-contain " />
          </div>
          <div className=" py-[10px] px-[15px] lg:py-[20px] lg:px-[25px] pr-[50px] border-t ">
            <p className=" text-[12px] md:text-[14px] lg:text-[16px] font-medium leading-[118%] lg:leading-[140%]  ">
              Дерматологическое оборудование
            </p>
          </div>
        </div>

        <div className="border border-[#e5e2ee] rounded-[10px] overflow-hidden row-[span_2]  ">
          <div className=" bg-white h-[272px] sm:h-[378px] lg:h-[534px] ">
            <img src={Katalog2} alt="" className="w-full h-full object-contain " />
          </div>
          <div className="py-[10px] px-[15px] lg:py-[20px] lg:px-[25px] pr-[50px]  border-t ">
            <p className="text-[12px] md:text-[14px] lg:text-[16px]  font-medium leading-[140%]  ">
              Дерматологическое оборудование
            </p>
          </div>
        </div>

        <div className="border border-[#e5e2ee] rounded-[10px] overflow-hidden h-[154px] sm:h-[216px] lg:h-[304px] ">
          <div className=" bg-white h-[109px] sm:h-[148px] lg:h-[220px] ">
            <img src={Katalog4} alt="" className="w-full h-full object-contain " />
          </div>
          <div className=" py-[10px] px-[15px] lg:py-[20px] lg:px-[25px] pr-[50px] border-t ">
            <p className=" text-[12px] md:text-[14px] lg:text-[16px] font-medium leading-[118%] lg:leading-[140%]  ">
              Дерматологическое оборудование
            </p>
          </div>
        </div>

        <div className="border border-[#e5e2ee] rounded-[10px] overflow-hidden h-[154px] sm:h-[216px] lg:h-[304px] ">
          <div className=" bg-white h-[109px] sm:h-[148px] lg:h-[220px] ">
            <img src={Katalog5} alt="" className="w-full h-full object-contain " />
          </div>
          <div className=" py-[10px] px-[15px] lg:py-[20px] lg:px-[25px] pr-[50px] border-t ">
            <p className=" text-[12px] md:text-[14px] lg:text-[16px] font-medium leading-[118%] lg:leading-[140%]  ">
              Дерматологическое оборудование
            </p>
          </div>
        </div>

        <div className="border border-[#e5e2ee] rounded-[10px] overflow-hidden row-[span_2]  ">
          <div className=" bg-white h-[272px] sm:h-[378px] lg:h-[534px] ">
            <img src={Katalog6} alt="" className="w-full h-full object-contain " />
          </div>
          <div className="py-[10px] px-[15px] lg:py-[20px] lg:px-[25px] pr-[50px]  border-t ">
            <p className="text-[12px] md:text-[14px] lg:text-[16px]  font-medium leading-[140%]  ">
              Дерматологическое оборудование
            </p>
          </div>
        </div>

        <div className="border border-[#e5e2ee] rounded-[10px] overflow-hidden h-[154px] sm:h-[216px] lg:h-[304px] ">
          <div className=" bg-white h-[109px] sm:h-[148px] lg:h-[220px] ">
            <img src={Katalog7} alt="" className="w-full h-full object-contain " />
          </div>
          <div className=" py-[10px] px-[15px] lg:py-[20px] lg:px-[25px] pr-[50px] border-t ">
            <p className=" text-[12px] md:text-[14px] lg:text-[16px] font-medium leading-[118%] lg:leading-[140%]  ">
              Дерматологическое оборудование
            </p>
          </div>
        </div>

        <div className="border border-[#e5e2ee] rounded-[10px] overflow-hidden h-[154px] sm:h-[216px] lg:h-[304px] ">
          <div className=" bg-white h-[109px] sm:h-[148px] lg:h-[220px] ">
            <img src={Katalog8} alt="" className="w-full h-full object-contain " />
          </div>
          <div className=" py-[10px] px-[15px] lg:py-[20px] lg:px-[25px] pr-[50px] border-t ">
            <p className=" text-[12px] md:text-[14px] lg:text-[16px] font-medium leading-[118%] lg:leading-[140%]  ">
              Дерматологическое оборудование
            </p>
          </div>
        </div>

        <div className="border border-[#e5e2ee] rounded-[10px] overflow-hidden h-[154px] sm:h-[216px] lg:h-[304px] ">
          <div className=" bg-white h-[109px] sm:h-[148px] lg:h-[220px] ">
            <img src={Katalog9} alt="" className="w-full h-full object-contain " />
          </div>
          <div className=" py-[10px] px-[15px] lg:py-[20px] lg:px-[25px] pr-[50px] border-t ">
            <p className=" text-[12px] md:text-[14px] lg:text-[16px] font-medium leading-[118%] lg:leading-[140%]  ">
              Дерматологическое оборудование
            </p>
          </div>
        </div>

        <div className="border border-[#e5e2ee] rounded-[10px] overflow-hidden h-[154px] sm:h-[216px] lg:h-[304px] ">
          <div className=" bg-white h-[109px] sm:h-[148px] lg:h-[220px] ">
            <img src={Katalog10} alt="" className="w-full h-full object-contain " />
          </div>
          <div className=" py-[10px] px-[15px] lg:py-[20px] lg:px-[25px] pr-[50px] border-t ">
            <p className=" text-[12px] md:text-[14px] lg:text-[16px] font-medium leading-[118%] lg:leading-[140%]  ">
              Дерматологическое оборудование
            </p>
          </div>
        </div>
      </div>
    </div>
    <Kabinet/>
    <Section/>
    <Tovar textTwo='Ранее смотрели'/>
    <Brends/>
    <Kompaniye/>
    <CustomizedAccordions text='Часто задоваемые вопросы'/>
    <div className='grid grid-cols-2 gap-2.5 mb-[150px] px-[35px]'>
        <div>
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23985.317776691176!2d69.20951579999999!3d41.283519350000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8a4758a84dc7%3A0xd5e59538910cd043!2sGafur%20Gulyam%20Recreation%20Park!5e0!3m2!1sen!2s!4v1719390343527!5m2!1sen!2s"
            style={{ width: "100%", height: "100%" }}
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            className='rounded-xl'
          ></iframe>
        </div>
        <div><Form text='Остались вопросы?' subtitle='Задайте их по номеру телефона +7 (495) 000-00-00 или оставьте свои координаты и наш менеджер перезвонит вам через 10 минут
'/></div>
      </div>
      <Email/>
      <Footer/>
    </>
  )
}

export default Katalog