import React from 'react';
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
  <>
    <div className="bg-[#F8F7F3] px-[35px] "> 
      <div className="flex justify-between py-2.5"> 
        <ul className="flex gap-5">
          <li className="text-[#7A7687] text-xs font-medium leading-normal"> 
            <NavLink to="/Kompani">О компании</NavLink>
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
          <li className="text-[#7A7687] text-xs font-medium leading-normal">
            <NavLink to="/Blog">Блог</NavLink>
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
