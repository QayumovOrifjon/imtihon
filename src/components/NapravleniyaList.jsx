import React from 'react'
import { IoIosArrowDown } from 'react-icons/io';
import { Link } from 'react-router-dom';

const NapravleniyaList = () => {
  return (
    <div>
          <div className="hidden lg:block border border-[#E5E2EE] p-[15px] rounded-[10px] h-max ">
      <p className="text-[16px] font-medium pb-[15px] mb-[20px] border-b ">Направления</p>

      <ul className={`rounded-[5px]  flex flex-col gap-2 w-auto `}>
        <Link>
          <li className="flex justify-between items-center text-[14px] hover:text-[#088269] duration-200 hover:underline hover:scale-105 ">
            Реанимация
            <IoIosArrowDown className={` rotate-[-90deg] w-[17px] h-[17px]  `} />
          </li>
        </Link>
        <Link>
          <li className="flex justify-between items-center text-[14px] hover:text-[#088269] duration-200 hover:underline hover:scale-105 ">
            Хирургия <IoIosArrowDown className=' rotate-[-90deg] w-[17px] h-[17px]  ' />
          </li>
        </Link>
        <Link>
          <li className="flex justify-between items-center text-[14px] hover:text-[#088269] duration-200 hover:underline hover:scale-105 ">
            Офтальмология <IoIosArrowDown className=' rotate-[-90deg] w-[17px] h-[17px]  ' />
          </li>
        </Link>
        <Link>
          <li className="flex justify-between items-center text-[14px] hover:text-[#088269] duration-200 hover:underline hover:scale-105 ">
            Лабораторная диагностика
            <IoIosArrowDown className=' rotate-[-90deg] w-[17px] h-[17px] ' />
          </li>
        </Link>
        <Link>
          <li className="flex justify-between items-center text-[14px] hover:text-[#088269] duration-200 hover:underline hover:scale-105 ">
            Акушерство <IoIosArrowDown className=' rotate-[-90deg] w-[17px] h-[17px]  ' />
          </li>
        </Link>
        <Link>
          <li className="flex justify-between items-center text-[14px] hover:text-[#088269] duration-200 hover:underline hover:scale-105 ">
            Гинекология <IoIosArrowDown className='rotate-[-90deg] w-[17px] h-[17px] ' />
          </li>
        </Link>
        <Link>
          <li className="flex justify-between items-center text-[14px] hover:text-[#088269] duration-200 hover:underline hover:scale-105 ">
            Гистология <IoIosArrowDown className='rotate-[-90deg] w-[17px] h-[17px] ' />
          </li>
        </Link>
        <Link>
          <li className="flex justify-between items-center text-[14px] hover:text-[#088269] duration-200 hover:underline hover:scale-105 ">
            Косметология <IoIosArrowDown className='rotate-[-90deg] w-[17px] h-[17px] ' />
          </li>
        </Link>
        <Link>
          <li className="flex justify-between items-center text-[14px] hover:text-[#088269] duration-200 hover:underline hover:scale-105 ">
            Оториноларингология{' '}
            <IoIosArrowDown className='rotate-[-90deg] w-[17px] h-[17px] ' />
          </li>
        </Link>
        <Link>
          <li className="flex justify-between items-center text-[14px] hover:text-[#088269] duration-200 hover:underline hover:scale-105 ">
            Рентгенология и томография{' '}
            <IoIosArrowDown className='rotate-[-90deg] w-[17px] h-[17px] ' />
          </li>
        </Link>
        <Link>
          <li className="flex justify-between items-center text-[14px] hover:text-[#088269] duration-200 hover:underline hover:scale-105 ">
            Рентгенология и томография{' '}
            <IoIosArrowDown className='rotate-[-90deg] w-[17px] h-[17px] ' />
          </li>
        </Link>
        <Link>
          <li className="flex justify-between items-center text-[14px]  hover:text-[#088269] duration-200 hover:underline hover:scale-105 ">
            Стерилизация <IoIosArrowDown className='rotate-[-90deg] w-[17px] h-[17px] ' />
          </li>
        </Link>
        <Link>
          <li className="flex justify-between items-center text-[14px]  hover:text-[#088269] duration-200 hover:underline hover:scale-105 ">
            Физиотерапия и реабилитация{' '}
            <IoIosArrowDown className='rotate-[-90deg] w-[17px] h-[17px] ' />
          </li>
        </Link>
        <Link>
          <li className="flex justify-between items-center text-[14px] mb-[7px]  hover:text-[#088269] duration-200 hover:underline hover:scale-105 ">
            Функциональная диагностика{' '}
            <IoIosArrowDown className='rotate-[-90deg] w-[17px] h-[17px] ' />
          </li>
        </Link>
        <Link>
          <li className="flex justify-between items-center text-[14px]  hover:text-[#088269] duration-200 hover:underline hover:scale-105 ">
            Новинки <IoIosArrowDown className='rotate-[-90deg] w-[17px] h-[17px] ' />
          </li>
        </Link>
        <Link>
          <li className="flex justify-between items-center text-[14px]  hover:text-[#088269] duration-200 hover:underline hover:scale-105 ">
            Распродажи <IoIosArrowDown className='rotate-[-90deg] w-[17px] h-[17px] ' />
          </li>
        </Link>
        <Link>
          <li className="flex justify-between items-center text-[14px]  hover:text-[#088269] duration-200 hover:underline hover:scale-105 ">
            Кабинеты под ключ <IoIosArrowDown className='rotate-[-90deg] w-[17px] h-[17px]' />
          </li>
        </Link>
      </ul>
    </div>
    </div>
  )
}

export default NapravleniyaList