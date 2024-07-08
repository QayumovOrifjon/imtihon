import React, { useState } from 'react'
import { VscSettings } from "react-icons/vsc";
import { NavLink, useNavigate } from 'react-router-dom';
import { MdNavigateNext } from "react-icons/md";
import PaginationComp from '../../ui/Pagination';
import { aksiya } from '../../Data/data';
import { LuBarChartHorizontalBig } from 'react-icons/lu';
import { GoHeart, GoHeartFill } from 'react-icons/go';
import Kabinet from '../../components/Hero/Kabinet';
import Tovar from '../../components/Hero/Tovar';
import Brends from '../../components/Hero/Brends';
import Form from '../../ui/Form';
import Email from '../../components/Email/Email';
import Footer from '../../components/Footer.jsx/Footer';
import Header from '../../components/Header/Header';




const Aksiya = () => {
const navigate = useNavigate()
const breadcast = () =>{
  navigate('/')
}
const Status = (status) => {
  switch (status) {
    case 'Новинка':
      return { backgroundColor: '#E1EFE6', color: '#088269', borderColor: '#088269' };
    case 'Хит продаж':
      return { backgroundColor: '#E6E6FD', color: '#424285', borderColor: '#424285' };
    case '-30%':
      return { backgroundColor: '#FFE095', color: '#AD7B00', borderColor: '#AD7B00' };
    default:
      return { backgroundColor: '#FFFFFF', color: 'inherit', borderColor: 'transparent' };
  }
};

  const productPage = 9;

const [filt, setFilt] = useState(false)
const [value,setValue] = useState('Категории')

const renderProduct = (aksiya) => (
  <div className="grid grid-cols-2 md:grid-cols-3 gap-[10px] ">
    {aksiya.map((item) => (
      <div
      className="rounded-[10px]  w-full max-w-[236px] md:max-w-[320px] border border-[#E5E2EE] overflow-hidden "
    >
      <div className="bg-white p-[10px] md:p-[30px] lg:p-[50px] relative mb-[15px] lg:mb-[20px]  flex justify-center items-center border-b border-[#E5E2EE]">
        <img src={item.img} alt="image" className="w-full object-contain h-[172px] md:h-[142px]  lg:h-[229px]" />
        <span
          style={Status(item.status)}
          className={`absolute top-[15px] left-[15px] text-[#088269] text-[12px] lg:text-[14px] font-semibold leading-[normal] border border-[#088269 ] py-1 px-[10px] rounded-full`}
        >
          {item.status}
        </span>
        <div className="flex items-center gap-[10px] absolute top-[15px] right-[15px]">
          <LuBarChartHorizontalBig className="w-6 h-6 rotate-[-90deg] hover:text-[#088269] duration-200 cursor-pointer" />

          <div 
          // onClick={(e)=> handleLikeClick(e, item)}
          >
            {/* {isLiked ? (
              <GoHeartFill className="w-6 h-6 text-[--pri] duration-200 cursor-pointer" />
            ) : (
              <GoHeart className="w-6 h-6 hover:text-[--pri] duration-200 cursor-pointer" />
            )} */}
               <GoHeart className="w-6 h-6 duration-200 cursor-pointer hover:text-[#088269] " />
          </div>
        </div>
      </div>

      <div className="flex flex-col   px-[15px] pb-[10px] lg:pb-[15px]">
        <div className="flex flex-col   mb-[15px]">
          <p className="text-[16px] lg:text-[18px] w-[80%] font-semibold leading-[normal] mb-[10px]">
            {item.title}
          </p>
          <span className="text-[12px] font-normal leading-[normal] text-[--text] mb-1">
            Артикул: {item.number}
          </span>
          <span className="text-[12px] font-normal leading-[normal] text-[--text]">
            {item.pay ? 'В наличии' : 'нет в наличии'}
          </span>
          <p className=" mt-[15px] lg:mt-[30px] text-[16px] lg:text-[18px] font-semibold leading-[normal] text-[--second]">
            {item.price} руб.
          </p>
        </div>
        <button
          onClick={(e) => handleCartClick(e, item)}
          className="text-[12px]   py-2 lg:py-[11px] px-[20px] lg:px-[30px] border border-[#088269] hover:bg-[#088269] hover:text-white text-[#088269] rounded-full font-semibold  hover:border-[#07745E] duration-200  "
        >
          Добавить в корзину
        </button>
      </div>
    </div>
    ))}
  </div>
);

  return (

    
   <>
   <Header/>
    <div className='flex pt-5 px-[35px] mb-5'>
<p onClick={breadcast} className='text-[#7A7687] text-[14px] font-normal leading-[normal] cursor-pointer'>Главная {">"}</p> <span className='text-[#202020] text-[14px] font-normal leading-[normal]'>Акции</span>

  
</div>
   <div>
<div onClick={()=>setFilt ((prev) => !prev)}
  className='flex md:hidden items-center gap-2 cursor-pointer  justify-center  border rounded-[10px] py-[12px] px-[20px] mt-[20px] mb-[10px] relative' >
<VscSettings />
<p>
{value}
</p>


</div>

<div 
className={`${filt ? 'flex' : 'hidden'} flex-col gap-3 absolute z-10 w-full border border-[] rounded-[10px] p-[15px] bg-[#F8F7F3]  right-0`}>

<p
            onClick={() => {
              setValue('Группы товаров');
              setShow(false);
            }}
            className={``}
          >
            Группы товаров
          </p>
          <p
            onClick={() => {
              setValue('Мониторы');
              setShow(false);
            }}
            className={``}
          >
           Мониторы
          </p><p
            onClick={() => {
              setValue('Лампы');
              setShow(false);
            }}
            className={``}
          >
            Лампы
          </p><p
            onClick={() => {
              setValue('Кровати');
              setShow(false);
            }}
            className={``}
          >
           Кровати
          </p><p
            onClick={() => {
              setValue('Рентгены');
              setShow(false);
            }}
            className={``}
          >
         Рентгены
          </p>

</div>





   </div>


<div className='grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-[10px] pl-[35px] mb-[150px]'>
  <div className='border p-5 rounded-lg h-[240px]'>
    <p className='text-[16px] font-medium leading-[140%] border-b-[1px] pb-2'>Категории</p> 
    <ul className='flex flex-col gap-y-2'>
      <li><NavLink className='text-[14px] font-normal leading-[normal] hover:text-[#088269] hover:underline hover:scale-105 duration-200 flex items-center justify-between pt-2'>Группы товаров<MdNavigateNext /></NavLink></li>
      <li><NavLink className='text-[14px] font-normal leading-[normal] hover:text-[#088269] hover:underline hover:scale-105 duration-200 flex items-center justify-between'>Мониторы<MdNavigateNext /></NavLink></li>
      <li><NavLink className='text-[14px] font-normal leading-[normal] hover:text-[#088269] hover:underline hover:scale-105 duration-200 flex items-center justify-between'>Лампы<MdNavigateNext /></NavLink></li>
      <li><NavLink className='text-[14px] font-normal leading-[normal] hover:text-[#088269] hover:underline hover:scale-105 duration-200 flex items-center justify-between'>Кровати<MdNavigateNext /></NavLink></li>
      <li><NavLink className='text-[14px] font-normal leading-[normal] hover:text-[#088269] hover:underline hover:scale-105 duration-200 flex items-center justify-between'>Рентгены<MdNavigateNext /></NavLink></li>  
    </ul>
  </div>
  <div>
    <PaginationComp
    product={aksiya}
    productPage={productPage}
    renderProduct={renderProduct}/>
  </div>
</div>
<Kabinet/>
<Tovar text='Ранее смотрели'/>
<Brends/>
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

export default Aksiya