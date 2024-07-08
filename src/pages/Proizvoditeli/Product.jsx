import React, { useEffect, useState } from 'react';
import { VscSettings } from 'react-icons/vsc';
import { IoIosArrowDown } from 'react-icons/io';
import { FaSearch } from 'react-icons/fa';
import { RxHamburgerMenu } from 'react-icons/rx';
import { GrAppsRounded } from 'react-icons/gr';
import { Collapse, Slider, TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { ButtCat, ButtSte, ButtTel } from '../../ui/Button';
import { IoChevronDownOutline } from "react-icons/io5";
import { MenuNap, StraneNap, proiz } from '../../Data/data';
import PaginationComp from '../../ui/Pagination';


const Product = () => {
    const navigate = useNavigate();

    const breadcast = () => {
      navigate('/')
    }

    const productPage = 12;
    const [nav, setNav] = useState(false);
    const [value, setValue] = useState('Направления');
    const [strane, setStrane] = useState(false);

  const [price, setPrice] = useState([20000, 950000]);



//   const [sortData, setSortData] = useState(myData);
//   const [sortValue, setSortValue] = useState('');

//   const handleSortChange = (event) => {
//     setSortValue(event.target.value);
//   };

//   useEffect(() => {
//     let filteredData = myData.filter((item) => item.price >= price[0] && item.price <= price[1]);
    

//     let sortedData = [...filteredData];
//     if (sortValue === 'price') {
//       sortedData.sort((a, b) => b.price - a.price);
//     } else if (sortValue === 'name') {
//       sortedData.sort((a, b) => a.title.localeCompare(b.title));
//     } else if (sortValue === 'date') {
//       sortedData = myData.filter((item) => item.status === 'Новинка');
//     }
//     setSortData(sortedData);
//   }, [sortValue]);

//   const handlePriceChange = (event, newPrice) => {
//     setPrice(newPrice);
//   };

const renderProiz = (Items) => (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-[10px]">
      {Items.map((item) => (
        <div key={item.id} className="border border-[] rounded-[10px] overflow-hidden">
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
  <div className='flex pt-5  mb-5 gap-2'>
<p onClick={breadcast} className='text-[#7A7687] text-[14px] font-normal leading-[normal] cursor-pointer'>Главная {">"}</p><span onClick={() =>{
navigate('/Kompani')
}} className='text-[#7A7687] text-[14px] font-normal leading-[normal] cursor-pointer'>О компании {">"}</span> <span 
className='text-[#202020] text-[14px] font-normal leading-[normal]'>Отзывы</span>


</div>

      <div className=' container flex gap-[5px] items-center overflow-x-scroll mt-[20px] mb-[25px] '>
          <button className='whitespace-nowrap text-[12px] lg:text-[14px] bg-white rounded-full border border-[--border] py-[11px] px-[31px] hover:border-[--pri] hover:text-[--pri] duration-200 ' >Дерматологическое оборудование</button>
          <button className='whitespace-nowrap text-[12px] lg:text-[14px] bg-white rounded-full border border-[--border] py-[11px] px-[31px] hover:border-[--pri] hover:text-[--pri] duration-200 ' >Ветеринарное оборудование</button>
          <button className='whitespace-nowrap text-[12px] lg:text-[14px] bg-white rounded-full border border-[--border] py-[11px] px-[31px] hover:border-[--pri] hover:text-[--pri] duration-200 ' >Мебель медицинская</button>
          <button className='whitespace-nowrap text-[12px] lg:text-[14px] bg-white rounded-full border border-[--border] py-[11px] px-[31px] hover:border-[--pri] hover:text-[--pri] duration-200 ' >Ветеринарное оборудование</button>
         <ButtCat title={"Показать больше"}/>
      </div>

      <div className='mt-[20px] px-[35px] grid grid-cols-1 md:grid-cols-[1fr_3fr] justify-between gap-[10px] mb-[150px]'>
      <div className='relative'>
         <div 
            onClick={() => setNav((next) => !next)}
            className='relative border text-center cursor-pointer gap-1 flex justify-center md:justify-between  py-[15px] px-[20px] rounded-[10px] ' 
         >
            <VscSettings className='w-10 h-10 md:hidden'/>
            <p className='text-[14px] font-medium leading-[118%]'>{value}</p>
            <IoChevronDownOutline className={`${nav ? 'rotate-180':''} w-10 h-3 duration-300 hidden md:block`}/>

            <div className={`${nav ? 'flex flex-col absolute duration-200 top-[55px] rounded-lg gap-y-3 border p-5 gap-2 w-full left-0' : 'hidden'}`}>
               {MenuNap.map((list, index) => (
                  <div 
                     key={index}
                     onClick={() => setValue(list)}
                     className={`text-[12px] flex justify-between items-center hover:text-[red] duration-200 hover:underline hover:scale-105`}
                  >
                     {list}
                     <IoChevronDownOutline className={`rotate-[-90deg] w-[17px] h-[17px]`} />
                  </div>
               ))}
            </div>
         </div>

         <div
            className={`${nav ? 'top-[470px]' : null} hidden md:block absolute z-10 w-full mt-[10px] border border-[] py-[15px] px-[20px] rounded-[10px] bg-[#F8F7F3]`}
         >
            <div 
               onClick={() => setStrane((prev) => !prev)}
               className='relative text-center cursor-pointer gap-1  justify-center md:justify-between rounded-[10px] '
            >
               <p className='text-[14px] font-medium leading-[118%] flex justify-between items-center'>Фильтр по товарам

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
    </>
  );
};

export default Product;
