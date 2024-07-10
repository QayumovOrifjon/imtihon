import React, { useState } from 'react'
import { VscSettings } from "react-icons/vsc";
import { IoChevronDownOutline } from "react-icons/io5";
import { MenuNap, StraneNap, proiz } from '../../Data/data';
import Header from '../../components/Header/Header';
import { NavLink, useNavigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import { ButtSte, ButtTel } from '../../ui/Button';
import PaginationComp from '../../ui/Pagination';
import Tovar from '../../components/Hero/Tovar';
import Section from '../../components/Hero/Section';
import Kompaniye from '../../components/Hero/Kompaniye';
import CustomizedAccordions from '../../ui/AccordionTwo';
import Form from '../../ui/Form';
import Email from '../../components/Email/Email';
import Footer from '../../components/Footer.jsx/Footer';

const Proizvoditeli = () => {
   const productPage = 12;
    const [nav, setNav] = useState(false);
    const [value, setValue] = useState('Направления');
    const [strane, setStrane] = useState(false);

    const renderProiz = (Items) => (
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-[10px] ">
          {Items.map((item) => (
            <div onClick={() => {
               navigate('/Product')} }key={item.id} className="border border-[] rounded-[10px] overflow-hidden ">
              <div className="bg-white h-[152px] lg:h-[196px] flex justify-center items-center border-b border-[]">
                <img src={item.img} alt="image" />
              </div>
              <div className="p-[15px] lg:p-[20px]">
                <p className="w-[90%] lg:w-[70%] text-[12px] md:text-[14px] lg:text-[16px] font-medium lg:leading-[140%] leading-[120%]">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      );

      const navigate = useNavigate();

      const breadcast = () => {
        navigate('/')
      }

      const Place = () => {
         if (nav && strane) {
           return { top: '365px' };
         } else if (nav) {
           return { top: '50px' };
         } else if (strane) {
           return { top: '365px' };
         } else {
           return { top: '50px' };
         }
       };
    
  return (
   <>
   <Header/>
   <div className='flex pt-5 px-[35px] gap-5 mt-[240px] container'>
      <p onClick={breadcast} className='text-[#7A7687] text-[14px] font-normal leading-[normal] cursor-pointer'>Главная {">"}</p>
      <span className='text-[#202020] text-[14px] font-normal leading-[normal]'>Производители</span>
   </div> 

   <div className='mt-[20px] container grid grid-cols-1 md:grid-cols-[1fr_3fr] justify-between gap-[10px] mb-[150px]'>
      <div className='relative'>
         <div 
            onClick={() => setNav((next) => !next)}
            className='relative border text-center cursor-pointer gap-1 flex justify-center md:justify-between  py-[15px] px-[20px] rounded-[10px] ' 
         >
            <VscSettings className='w-10 h-10 md:hidden'/>
            <p className='text-[14px] font-medium leading-[118%]'>{value}</p>
            <IoChevronDownOutline className={`${nav ? 'rotate-180':''} w-10 h-3 duration-300 hidden md:block`}/>

            <div className={`${nav ? 'flex flex-col absolute z-0 duration-200 top-[55px] rounded-lg gap-y-3 border p-5 gap-2 w-full left-0' : 'hidden'}`}>
               {MenuNap.map((list, index) => (
                  <div 
                     key={index}
                     onClick={() => setValue(list)}
                     className={`text-[12px] flex justify-between items-center hover:text-[#088269] duration-200 hover:underline hover:scale-105`}
                  >
                  <NavLink to='/ProductCategory'>{list}</NavLink>
                     <IoChevronDownOutline className={`rotate-[-90deg] w-[17px] h-[17px]`} />
                  </div>
               ))}
            </div>
         </div>

         <div
            className={`${nav ? 'top-[470px]' : null} hidden md:block  absolute z-0 w-full mt-[10px] border border-[] py-[15px] px-[20px] rounded-[10px] bg-[#F8F7F3]`}
         >
            <div 
               onClick={() => setStrane((prev) => !prev)}
               className='relative text-center cursor-pointer gap-1  justify-center md:justify-between rounded-[10px] '
            >
               <p className='text-[14px] font-medium leading-[118%] flex justify-between items-center'>Страны

               <IoChevronDownOutline className={`${strane ? 'rotate-180':''} w-10 h-3 duration-300 hidden md:block`}/>
               </p>
               

               <div className={`${strane? 'block':'hidden'} `}>
                  <label className="mt-[15px] mb-[12px] bg-white text-[14px] flex justify-between items-center gap-1 border border-[--border] rounded-full px-[20px] py-[10px]">
                     <input type="text" className="w-full outline-none" placeholder="Поиск по стране" />
                     <FaSearch className="text-[--text]" />
                  </label>
                  <div className="flex flex-col gap-2">
                     {StraneNap.map((item) => (
                        <label htmlFor={item.id} key={item.id} className="flex items-center gap-[10px]" onClick={(e) => e.stopPropagation()}>
                           <input
                              type="checkbox"
                              name={item.id}
                              id={item.id}
                              className="accent-[--pri]"
                           />
                           {item.title}
                        </label>
                     ))}
                  </div>
               </div>
                      <div style={Place()} className='absolute left-0  gap-[10px] items-center hidden md:flex '>
            <ButtSte title={'Сбросить'} />
            <ButtTel title={'Показать'} />
          </div>
            </div>
         </div>
      </div>
      <div>
<PaginationComp
product={proiz}
productPage={productPage}
renderProduct={renderProiz}
/>

      </div>
   </div>
   <Tovar/>
   <Section/>
  <div> <Kompaniye/></div>
   <CustomizedAccordions/>
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
        <div><Form text='Вам нужна консультация?' subtitle='Задайте их по номеру телефона +7 (495) 000-00-00 или оставьте свои координаты и наш менеджер перезвонит вам через 10 минут
'/></div>
      </div>
      <Email/>
      <Footer/>
   </>
  )
}

export default Proizvoditeli
