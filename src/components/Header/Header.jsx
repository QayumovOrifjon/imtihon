import React from 'react'
import logo from '../../../public/assets/Logo.svg'
import Header1 from '../../../public/assets/Header.svg'
import Header2 from '../../../public/assets/Header2.svg'
import Header3 from '../../../public/assets/Header3.svg'
import Header4 from '../../../public/assets/Header4.svg'
import { RiMenu2Fill } from 'react-icons/ri';
import { CiLocationOn } from 'react-icons/ci';
import { FiPhone } from 'react-icons/fi';

import { IoIosSearch } from "react-icons/io";
import { ButtTel, ButtZvo } from '../../ui/Button'
import Slider from '../Slider/Slider'

const Header = () => {
  return (
    <>
    <div className='px-[35px] bg-[#F8F7F3]' >
<div className='flex justify-between py-[26px]'>
 <div className='flex items-center gap-[35px] justify-start'>
 <img src={logo} alt="" className='m-0'/>

<div className='flex items-center border rounded-full bg-white border-[#D5D1E1]'> 

  <select className="text-[#7A7687] text-[14px] font-semibold leading-[normal] px-6 h-[39.5px] rounded-full bg-[#EFEFEF] outline-none" name="" id="">
                <option value="">Все категории</option>
              </select>
  
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
    <div className='border-b hidden md:block py-[20px] bg-[#F8F7F3]'>
<div className='flex items-center justify-between'>
  <ul className='flex gap-6 items-center'>
    <li className='flex  items-center gap-1'>
    <RiMenu2Fill />
    <span className='text-[#202020] text-[14px] font-semibold leading-[normal]'>Каталог</span>
    </li>
    <li className='text-[#202020] text-[14px] font-semibold leading-[normal]'>Производители</li>
    <li className='text-[#202020] text-[14px] font-semibold leading-[normal]'>Кабинеты под ключ
    </li>
    <li className='text-[#202020] text-[14px] font-semibold leading-[normal]'>Услуги</li>
    <li className='text-[#202020] text-[14px] font-semibold leading-[normal]'>Акции</li>
    <li className='text-[#202020] text-[14px] font-semibold leading-[normal]'>Покупателям</li>
    <li className='text-[#202020] text-[14px] font-semibold leading-[normal]'>Контакты</li>
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