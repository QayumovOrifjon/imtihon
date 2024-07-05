import React from 'react'
import { useNavigate } from 'react-router-dom'
import { CiLocationOn } from "react-icons/ci";
import { MdAccessTime } from "react-icons/md";
import { LuPhone } from "react-icons/lu";
import { CiMail } from "react-icons/ci";
import vkk from '../../../public/assets/vkk.svg'
import whatsapp from '../../../public/assets/whatsappp.svg'
import telegramm from '../../../public/assets/telegramm.svg'
import Form from '../../ui/Form';
import {  ButtSte, ButtTel } from '../../ui/Button';
import Footer from '../../components/Footer.jsx/Footer';
import Header from '../../components/Header/Header';

const Kontakt = () => {
    const navigate = useNavigate();

    const breadcast = () => {
        navigate("/");
      };
  return (
  <>
   <Header/>
    <div className='bg-[#F8F7F3] px-[35px] pb-[150px] '>
       
<div className='flex pt-5'>
<p onClick={breadcast} className='text-[#7A7687] text-[14px] font-normal leading-[normal] cursor-pointer'>Главная {">"}</p> <span className='text-[#202020] text-[14px] font-normal leading-[normal]'>Контакты</span>

  
</div> 
<h1 className='text-[#202020] text-[48px] font-medium leading-[110%] mb-10 mt-[100px]'>Контакты</h1>
<div className='grid grid-cols-2 gap-2'>
<div className='bg-white p-10 rounded-xl border-[#E5E2EE] border h-[590px]'>
<div className='flex flex-col gap-y-3'>
    <h2 className='text-[#202020] text-[30px] font-medium leading-[120%] mb-[10px]'>ООО Глобал Медикал Трейд</h2>
    <div>
    <p className='flex items-center gap-1 text-[#7A7687] text-[16px] font-medium leading-[140%]'  >
    <CiLocationOn />Юридический адрес:
    </p>
    <p className='text-[#202020] text-[16px] font-medium leading-[140%] pl-[20px]'>Россия, г. Москва, ул. Докукина, 8, стр. 2</p>
    </div>
    <div>
    <p className='flex items-center gap-1 text-[#7A7687] text-[16px] font-medium leading-[140%]'  >
    <CiLocationOn />Фактический адрес:
    </p>
    <p className='text-[#202020] text-[16px] font-medium leading-[140%] pl-[20px]'>Россия, г. Москва, ул. Докукина, 8, стр. 2</p>
    </div>
    <div>
    <p className='flex items-center gap-1 text-[#7A7687] text-[16px] font-medium leading-[140%]'  >
    <MdAccessTime />Режим работы:
    </p>
    <p className='text-[#202020] text-[16px] font-medium leading-[140%] pl-[20px]'>Пн-Пт с 09:00-19:00 </p>
    <p className='text-[#202020] text-[16px] font-medium leading-[140%] pl-[20px]'>Сб-Вс - выходной</p>

    <h2 className='text-[#202020] text-[18px] font-semibold leading-[normal] py-[25px]'>Звоните. Звонки по России бесплатны: </h2>
<div className='mb-[15px]'>
    <span className='flex items-center gap-1 text-[#7A7687] text-[16px] font-medium leading-[140%]'><LuPhone />Телефоны:</span>
    <p className='flex gap-5 text-[#202020] text-[16px] font-medium leading-[140%]'><a href="tell:8-800-000-00-00">8-800-000-00-00</a><a href="tell:+7-000-000-00-00">+7-000-000-00-00</a><a href="tell:+7-495-000-00-00">+7-495-000-00-00</a></p>
</div>
<div>
    <p className='text-[#7A7687] text-[16px] font-medium leading-[140%] flex items-center gap-2'><CiMail /> Пишите: </p>
    <span className='text-[#202020] text-[16px] font-medium leading-[140%]'>info@mail.ru</span>
</div>
<div className='flex gap-[70px]'>
  <div>
    <p className='text-[#202020] text-[18px] font-semibold leading-[normal] py-[25px]'>Реквизиты: </p>
  <div className='flex gap-8'>
      
      <div><p>ИНН</p><p>9717039181</p></div>
      <div><p>ОГРН</p>
      <p>1167746796986</p>
      </div>
          </div>
  </div>

  <div>
    <p className='text-[#202020] text-[18px] font-semibold leading-[normal] py-[25px]'>Мы в соцсетях</p>
    <div className="flex ml-auto gap-[10px] ">
                <img src={vkk} alt="" className=" text-white " />
                <img src={telegramm} alt="" className=" text-white " />
                <img src={whatsapp} alt="" className=" text-white " />
              </div>
  </div>
</div>
    </div>
</div>
</div>
<div>
   <Form text='Бесплатная консультация' subtitle='Оставьте свои координаты и наш менеджер перезвонит вам через 10 минут
'/>
</div>

</div>
<div className='relative overflow-hidden border-[#E5E2EE] border mt-2.5 rounded-xl '>
<iframe
src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.072884043826!2d69.20123767599627!3d41.2855182023078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8ba578f4f58d%3A0xd7a2ecf23413b7a0!2sNajot%20Ta&#39;lim%20Chilonzor%20Filial!5e0!3m2!1suz!2s!4v1719840169404!5m2!1suz!2s'
width='100%'
height='400px'
className='rounded-xl'
>

</iframe>
<span className=' absolute top-[35px] left-[10px] bg-white'> 

            <ButtSte title={"г. Москва, ул. Московская, д. 35"} />
          </span>
          <span className=" absolute bottom-[20px] right-[50px] ">
         
            <ButtTel title={"Построить маршрут"} />
          </span>
</div>
  </div>
<Footer/></>
  
  )
}

export default Kontakt