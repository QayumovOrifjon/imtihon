import React from 'react'
import { CgArrowTopRight } from "react-icons/cg";
import FooterBot from './FooterBot';

const Footer = () => {
  return (
   
<div className='bg-[#088269] '>
<div className='container grid grid-cols-1  sm:grid-cols-[1fr_3fr_1fr]  gap-[40px] lg:gap-[120px] pt-[15px] sm:pt-[40px] pb-[30px] lg:pb-[47px] '>
    <div className=''>
        <p className='text-[#F8F7F3] text-[14px] font-semibold leading-[normal] mb-4'>Покупателям</p>
      <div className='flex gap-[60px] border-t py-4'>
      <ul className='flex flex-col gap-y-2'>
        <li className='text-[#F8F7F3] text-[14px] font-normal leading-[normal]'>О компании</li>
        <li className='text-[#F8F7F3] text-[14px] font-normal leading-[normal]'>Сертификаты</li>
        <li className='text-[#F8F7F3] text-[14px] font-normal leading-[normal]'>Вакансии</li>
        <li className='text-[#F8F7F3] text-[14px] font-normal leading-[normal]'>Гарантии</li>
        <li className='text-[#F8F7F3] text-[14px] font-normal leading-[normal]'>Услуги</li>
        <li className='text-[#F8F7F3] text-[14px] font-normal leading-[normal]'>Акции</li>
        <li className='text-[#F8F7F3] text-[14px] font-normal leading-[normal]'>Доставка</li>
        </ul>
        <ul className='flex flex-col gap-y-2'>
            <li className='text-[#F8F7F3] text-[14px] font-normal leading-[normal]'>Оплата</li>
            <li className='text-[#F8F7F3] text-[14px] font-normal leading-[normal]'>Возврат</li>
            <li className='text-[#F8F7F3] text-[14px] font-normal leading-[normal]'>FAQ</li>
            <li className='text-[#F8F7F3] text-[14px] font-normal leading-[normal]'>Лизинг</li>
            <li className='text-[#F8F7F3] text-[14px] font-normal leading-[normal]'>Отзывы</li>
            <li className='text-[#F8F7F3] text-[14px] font-normal leading-[normal]'>Блог</li>
            </ul>
      </div>
        </div>
        <div className=''>
        <p className='text-[#F8F7F3] text-[14px] font-semibold leading-[normal] mb-4'>Каталог</p>
      <div className='flex gap-[60px] border-t py-4'>
      <ul className='flex flex-col gap-y-2'>
        <li className='text-[#F8F7F3] text-[14px] font-normal leading-[normal]'>Реанимация</li>
        <li className='text-[#F8F7F3] text-[14px] font-normal leading-[normal]'>Хирургия</li>
        <li className='text-[#F8F7F3] text-[14px] font-normal leading-[normal]'>Офтальмология</li>
        <li className='text-[#F8F7F3] text-[14px] font-normal leading-[normal]'>Лабораторная диагностика</li>
        <li className='text-[#F8F7F3] text-[14px] font-normal leading-[normal]'>Акушерство и Гинекология</li>
        <li className='text-[#F8F7F3] text-[14px] font-normal leading-[normal]'>Гистология</li>
        <li className='text-[#F8F7F3] text-[14px] font-normal leading-[normal]'>Косметология</li>
        </ul>
        <ul className='flex flex-col gap-y-2'>
            <li className='text-[#F8F7F3] text-[14px] font-normal leading-[normal]'>Орториноларингология</li>
            <li className='text-[#F8F7F3] text-[14px] font-normal leading-[normal]'>Рентгенология и томография</li>
            <li className='text-[#F8F7F3] text-[14px] font-normal leading-[normal]'>Стрерилизация</li>
            <li className='text-[#F8F7F3] text-[14px] font-normal leading-[normal]'>Физиотерапия и реабилитация</li>
            <li className='text-[#F8F7F3] text-[14px] font-normal leading-[normal]'>Функциональная диагностика</li>
            <li className='text-[#F8F7F3] text-[14px] font-normal leading-[normal]'>Эндоскопия</li>
            </ul>
            <ul className='flex flex-col gap-y-2'>
            <li className='text-[#F8F7F3] text-[14px] font-normal leading-[normal]'>Новинки</li>
            <li className='text-[#F8F7F3] text-[14px] font-normal leading-[normal]'>Распродажи</li>
            <li className='text-[#F8F7F3] text-[14px] font-normal leading-[normal]'>Стрерилизация</li>
            <li className='text-[#F8F7F3] text-[14px] font-normal leading-[normal]'>Кабинеты под ключ</li>
            <li className='text-[#F8F7F3] text-[14px] font-normal leading-[normal]'>Скачать каталог</li>
            </ul>
      </div>
        </div>
        <div className=''>
        <p className='text-[#F8F7F3] text-[14px] font-semibold leading-[normal] mb-4'>Контакты</p>
      <div className=' gap-[60px] border-t py-4'>
     
        <p className='text-[#F8F7F3] text-[14px] font-semibold leading-[normal] mb-1'>Адрес:</p>
        <p className='text-[#F8F7F3] text-[14px] font-normal leading-[normal]'>г. Москва, ул. Московская, д. 35 </p>
        <p className='flex items-center gap-2 text-[#F8F7F3] text-[14px] font-semibold leading-[normal] py-[25px]'>Карта проезда <CgArrowTopRight/></p>
      <p className='text-[#F8F7F3] text-[14px] font-normal leading-[normal]'>График работы:</p>
      <p className='text-[#F8F7F3] text-[14px] font-normal leading-[normal]'>Пн-Пт с 09:00-19:00,</p>
      <p className='text-[#F8F7F3] text-[14px] font-normal leading-[normal]'>Сб-Вс - выходной</p>
      <p className='text-[#F8F7F3] text-[14px] font-normal leading-[normal] mt-[25px]'><a href="tell:+7 000-000-00-00">+7 000-000-00-00</a></p>
      <p className='text-[#F8F7F3] text-[14px] font-normal leading-[normal]'><a href="tell:+7 495-000-00-00">+7 495-000-00-00</a></p>
      <p className='text-[#F8F7F3] text-[14px] font-normal leading-[normal]'><a href="tell:8 800-000-00-00">8 800-000-00-00</a></p>
      <p className='text-[#F8F7F3] text-[14px] font-normal leading-[normal]'><a href="gmail">info@mail.ru</a></p>
    
      </div>
        </div>



</div>
<hr className=' pb-[15px] border-[#E5E2EE] w-[1370px] mx-auto'/>
<FooterBot/>
    </div>
  )
}

export default Footer