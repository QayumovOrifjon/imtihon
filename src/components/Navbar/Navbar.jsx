import React from 'react';
import { NavLink } from "react-router-dom";

const Navbar = () => {

  return (
  <>
        <div className="bg-[#F8F7F3] px-[35px] "> 
          <div className="flex justify-between py-2.5"> 
            <ul className="flex gap-5">
              <li className="text-[#7A7687] text-xs font-medium leading-normal group relative"> 
                <NavLink to="/Kompani">О компании</NavLink>
                <div className="absolute  -left-3 top-[18px] w-[175px] hidden z-50 group-hover:flex flex-col gap-1 text-[#202020] p-3 bg-[#fff] border rounded-lg">
              <p className="text-[12px] cursor-pointer"> <NavLink to='/Vakansiya'>Вакансии</NavLink></p>
              <p className="text-[12px] cursor-pointer"><NavLink to='/Otziv'>Отзывы</NavLink></p>
              <p className="text-[12px] cursor-pointer"><NavLink to='/Sertifikati'>Сертификаты  </NavLink></p>
              <p className="text-[12px] cursor-pointer">Партнерские программы</p>
              <p className="text-[12px] cursor-pointer">Оптовые продажи</p>
              <p className="text-[12px] cursor-pointer">Лизинг</p>
            </div>
          </li>
          <li className="text-[#7A7687] text-xs font-medium leading-normal">
            <NavLink to="/Dostavka">Доставка</NavLink>
          </li>
          <li className="text-[#7A7687] text-xs font-medium leading-normal">
            <NavLink to="/Oplata">Оплата</NavLink>
          </li>
          <li className="text-[#7A7687] text-xs font-medium leading-normal">
            <NavLink to="/Garanti">Гарантии</NavLink>
          </li>
          <li className="text-[#7A7687] text-xs font-medium leading-normal group relative">
            <NavLink to="/Blog">Блог</NavLink>
            <div className="absolute top-[18px] hidden z-50 group-hover:flex flex-col gap-1 text-[#202020] p-3 bg-[#fff] border rounded-lg">
              <li className=" cursor-pointer hover:text-[#088269] hover:scale-105 duration-200 ">
              Новости
            </li>
              <li className=" cursor-pointer hover:text-[#088269] hover:scale-105 duration-200 ">
             <NavLink to='/Stati'> Статьи</NavLink>
            </li>
            </div>
          </li>
        </ul>
        <ul className="flex gap-12">
          <li className="text-[#7A7687] cursor-pointer text-xs font-medium leading-normal">
            <a href="mailto:info@mail.ru">info@mail.ru</a>
          </li>
          <li className="text-[#7A7687] cursor-pointer text-xs font-medium leading-normal">
            г. Москва, ул. Московская, д. 35
          </li>
        </ul>
      </div>
    </div>
      <hr className="border-[#E5E2EE]" /></>
  );
};

export default Navbar;
