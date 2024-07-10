import React from 'react'
import { IoIosArrowDown } from 'react-icons/io';
import { Link, NavLink } from 'react-router-dom';

const NapravleniyaList = () => {
  return (
    <div>
          <div className="hidden lg:block border border-[#E5E2EE] p-[15px] rounded-[10px] h-max ">
      <p className="text-[16px] font-medium pb-[15px] mb-[20px] border-b ">Направления</p>

      <ul className={`rounded-[5px]  flex flex-col gap-2 w-auto `}>
      
          <li className="flex justify-between items-center text-[14px] hover:text-[#088269] duration-200 hover:underline hover:scale-105 ">
            <NavLink to='/ProductCategory'>Реанимация</NavLink>
            <IoIosArrowDown className={` rotate-[-90deg] w-[17px] h-[17px]  `} />
          </li>
 
 
          <li className="flex justify-between items-center text-[14px] hover:text-[#088269] duration-200 hover:underline hover:scale-105 ">
            <NavLink to='/ProductCategory'>Хирургия</NavLink> <IoIosArrowDown className=' rotate-[-90deg] w-[17px] h-[17px]  ' />
          </li>
      
     
          <li className="flex justify-between items-center text-[14px] hover:text-[#088269] duration-200 hover:underline hover:scale-105 ">
            <NavLink to='/ProductCategory'>Офтальмология</NavLink> <IoIosArrowDown className=' rotate-[-90deg] w-[17px] h-[17px]  ' />
          </li>
 

          <li className="flex justify-between items-center text-[14px] hover:text-[#088269] duration-200 hover:underline hover:scale-105 ">
           <NavLink to='/ProductCategory'> Лабораторная диагностика</NavLink>
            <IoIosArrowDown className=' rotate-[-90deg] w-[17px] h-[17px] ' />
          </li>

          <li className="flex justify-between items-center text-[14px] hover:text-[#088269] duration-200 hover:underline hover:scale-105 ">
            <NavLink to='/ProductCategory'>Акушерство</NavLink> <IoIosArrowDown className=' rotate-[-90deg] w-[17px] h-[17px]  ' />
          </li>
    
  
          <li className="flex justify-between items-center text-[14px] hover:text-[#088269] duration-200 hover:underline hover:scale-105 ">
            <NavLink to='/ProductCategory'>Гинекология</NavLink> <IoIosArrowDown className='rotate-[-90deg] w-[17px] h-[17px] ' />
          </li>
    
          <li className="flex justify-between items-center text-[14px] hover:text-[#088269] duration-200 hover:underline hover:scale-105 ">
            <NavLink to='/ProductCategory'>Гистология</NavLink> <IoIosArrowDown className='rotate-[-90deg] w-[17px] h-[17px] ' />
          </li>
      
          <li className="flex justify-between items-center text-[14px] hover:text-[#088269] duration-200 hover:underline hover:scale-105 ">
            <NavLink to='/ProductCategory'>Косметология</NavLink> <IoIosArrowDown className='rotate-[-90deg] w-[17px] h-[17px] ' />
          </li>
      
          <li className="flex justify-between items-center text-[14px] hover:text-[#088269] duration-200 hover:underline hover:scale-105 ">
            <NavLink to='/ProductCategory'>Оториноларингология</NavLink>{' '}
            <IoIosArrowDown className='rotate-[-90deg] w-[17px] h-[17px] ' />
          </li>
      
          <li className="flex justify-between items-center text-[14px] hover:text-[#088269] duration-200 hover:underline hover:scale-105 ">
            <NavLink to='/ProductCategory'>Рентгенология и томография</NavLink>{' '}
            <IoIosArrowDown className='rotate-[-90deg] w-[17px] h-[17px] ' />
          </li>
    
          <li className="flex justify-between items-center text-[14px] hover:text-[#088269] duration-200 hover:underline hover:scale-105 ">
            <NavLink to='/ProductCategory'>Рентгенология и томография</NavLink>{' '}
            <IoIosArrowDown className='rotate-[-90deg] w-[17px] h-[17px] ' />
          </li>
   
          <li className="flex justify-between items-center text-[14px]  hover:text-[#088269] duration-200 hover:underline hover:scale-105 ">
            <NavLink to='/ProductCategory'>Стерилизация</NavLink> <IoIosArrowDown className='rotate-[-90deg] w-[17px] h-[17px] ' />
          </li>
     
          <li className="flex justify-between items-center text-[14px]  hover:text-[#088269] duration-200 hover:underline hover:scale-105 ">
            <NavLink to='/ProductCategory'>Физиотерапия и реабилитация</NavLink>{' '}
            <IoIosArrowDown className='rotate-[-90deg] w-[17px] h-[17px] ' />
          </li>
      
          <li className="flex justify-between items-center text-[14px] mb-[7px]  hover:text-[#088269] duration-200 hover:underline hover:scale-105 ">
         <NavLink to='/ProductCategory'>Функциональная диагностика</NavLink>
            <IoIosArrowDown  className='rotate-[-90deg] w-[17px] h-[17px] ' />
          </li>
  
          <li className="flex justify-between items-center text-[14px]  hover:text-[#088269] duration-200 hover:underline hover:scale-105 ">
           <NavLink to='/ProductCategory'> Новинки</NavLink> <IoIosArrowDown className='rotate-[-90deg] w-[17px] h-[17px] ' />
          </li>
 
          <li className="flex justify-between items-center text-[14px]  hover:text-[#088269] duration-200 hover:underline hover:scale-105 ">
            <NavLink to='/ProductCategory'>Распродажи</NavLink> <IoIosArrowDown className='rotate-[-90deg] w-[17px] h-[17px] ' />
          </li>
   
          <li className="flex justify-between items-center text-[14px]  hover:text-[#088269] duration-200 hover:underline hover:scale-105 ">
            <NavLink to='/ProductCategory'>Кабинеты под ключ</NavLink> <IoIosArrowDown className='rotate-[-90deg] w-[17px] h-[17px]' />
          </li>

      </ul>
    </div>
    </div>
  )
}

export default NapravleniyaList