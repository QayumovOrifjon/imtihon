import React, { useState } from 'react'
import logo from '../../../public/assets/Logo.svg'
import Header1 from '../../../public/assets/Header.svg'
import Header2 from '../../../public/assets/Header2.svg'
import Header3 from '../../../public/assets/Header3.svg'
import Header4 from '../../../public/assets/Header4.svg'
import { RiMenu2Fill } from 'react-icons/ri';
import { CiLocationOn } from 'react-icons/ci';
import { FiPhone } from 'react-icons/fi';
import { IoCaretDownOutline } from "react-icons/io5";

import { IoIosSearch } from "react-icons/io";
import { ButtTel, ButtZvo } from '../../ui/Button'
import { NavLink } from 'react-router-dom'

const Header = () => {
  const [searchfilter, setSearchfilter] = useState(false);

  return (
    <>
    <div className='px-[35px] bg-[#F8F7F3]' >
<div className='flex justify-between py-[26px]'>
 <div className='flex items-center gap-[35px] justify-start'>
 <img src={logo} alt="" className='m-0'/>

<div className='relative  flex items-center border rounded-full bg-white border-[#D5D1E1]'> 
<div
       onClick={() => setSearchfilter(!searchfilter)} 
 className='flex items-center gap-1 text-[#7A7687] text-[14px] font-semibold leading-[normal] px-6 h-[39.5px] rounded-full bg-[#EFEFEF] outline-none'>

<p>Все категории </p>
<IoCaretDownOutline 
className={`${searchfilter? 'rotate-180':'rotate-0'} duration-200`}
/>

</div>
{searchfilter && (
                  <div className="absolute top-[40.5px] z-50 w-[270px] flex flex-col gap-2 left-0  bg-[#fff] px-[15px] py-[10px] rounded-lg border">
                    <p className="text-[12px] cursor-pointer">Реанимация</p>
                    <p className="text-[12px] cursor-pointer">Хирургия</p>
                    <p className="text-[12px] cursor-pointer">Офтальмология</p>
                    <p className="text-[12px] cursor-pointer">
                      Лабораторная диагностика
                    </p>
                    <p className="text-[12px] cursor-pointer">Акушерство</p>
                    <p className="text-[12px] cursor-pointer">Гинекология</p>
                    <p className="text-[12px] cursor-pointer">Гистология</p>
                    <p className="text-[12px] cursor-pointer">Косметология</p>
                    <p className="text-[12px] cursor-pointer">
                      Оториноларингология
                    </p>
                    <p className="text-[12px] cursor-pointer">
                      Рентгенология и томография
                    </p>
                    <p className="text-[12px] cursor-pointer">
                      Оториноларингология
                    </p>
                    <p className="text-[12px] cursor-pointer">Стерилизация</p>
                    <p className="text-[12px] cursor-pointer">
                      Физиотерапия и реабилитация
                    </p>
                    <p className="text-[12px] cursor-pointer"> Эндоскопия</p>
                    <p className="text-[12px] cursor-pointer"> Новинки</p>
                    <p className="text-[12px] cursor-pointer"> Распродажи</p>
                    <p className="text-[12px] cursor-pointer">
                      Кабинеты под ключ
                    </p>
                  </div>
                )}
  
              <div className='flex items-center bg-[#D5D1E1] rounded-full'>
  <input type="search" id='search' placeholder='Поиск' className='text-[#7A7687] w-[420px] text-[14px] font-normal leading-[normal] outline-none p-2.5  rounded-r-full ' />
<label htmlFor="search" className='rounded-r-full flex items-center'>

<IoIosSearch className='text-[24px] mx-3 text-[#7A7687]'/>
 </label>
 </div>
 </div>
<div>
 <p className='text-[#7A7687] text-[12px] font-medium leading-[normal]'>Пн-Пт с 09:00-19:00 
</p>
<p className='text-[#7A7687] text-[12px] font-medium leading-[normal]'> Сб-Вс - выходной</p></div>
 </div>
<div className='flex gap-[25px]'>
<div className=''><img className='block mx-auto' src={Header1} alt="" /><p className='text-[#7A7687] text-[12px] font-medium leading-[normal] py-1'>Войти</p></div>
<div className=''><img className='block mx-auto' src={Header2} alt="" /><p className='text-[#7A7687] text-[12px] font-medium leading-[normal] py-1'>Избранное</p></div>
<div className=''><img className='block mx-auto' src={Header3} alt="" /><p className='text-[#7A7687] text-[12px] font-medium leading-[normal] py-1'>Сравнить</p></div>
<div className=''><img className='block mx-auto' src={Header4} alt="" /><p className='text-[#7A7687] text-[12px] font-medium leading-[normal] py-1'>Корзина</p></div>

</div>
</div>

    </div>
    <hr className='border-[#E5E2EE]'/>
    <div className='border-b hidden md:block py-[20px] px-[35px] bg-[#F8F7F3]'>
<div className='flex items-center justify-between'>
  <ul className='flex gap-6 items-center '>
    <li className='flex  items-center gap-1 cursor-pointer'>
    <RiMenu2Fill />
    <span className='text-[#202020] text-[14px] font-semibold leading-[normal]'><NavLink to='/Katalog'>Каталог</NavLink></span>
    </li>
    <li className='text-[#202020] text-[14px] font-semibold leading-[normal] cursor-pointer'><NavLink to='/Proizvoditeli'>Производители</NavLink></li>
    <li className='text-[#202020] text-[14px] font-semibold leading-[normal] cursor-pointer'><NavLink to='/Kobinet'>Кабинеты под ключ</NavLink>
    </li>
    <li className='text-[#202020] text-[14px] font-semibold leading-[normal] cursor-pointer'><NavLink to='/Uslugi'>Услуги</NavLink></li>
    <li className='text-[#202020] text-[14px] font-semibold leading-[normal] cursor-pointer'><NavLink to='/Aktsiya'>Акции</NavLink></li>
    <li className='text-[#202020] text-[14px] font-semibold leading-[normal] cursor-pointer'>Покупателям</li>
    <li className='text-[#202020] text-[14px] font-semibold leading-[normal] cursor-pointer'><NavLink to='/Kontakt'>Контакты</NavLink></li>
  </ul>
  <div className='flex items-center gap-4'>
<span className='flex items-center '><span>Москва</span>
<CiLocationOn />
</span>
<div className='bg-[#088269] rounded-full text-white p-2 xl:hidden ' >
              <FiPhone/>
            </div>
            <div className=' gap-[10px] hidden xl:flex '>
           <ButtZvo title={'+7(495)000-00-00'} />
           <ButtTel title={'Заказать звонок'} />
           </div>
  </div>
</div>

    </div>
    </>
  )
}

export default Header