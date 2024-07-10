import React from 'react'
import CustomizedAccordions from '../../ui/AccordioonThree'
import { IoIosSearch } from 'react-icons/io';
import { GoArrowUpRight } from "react-icons/go";
import Form from '../../ui/Form';
import Footer from '../../components/Footer.jsx/Footer';
import Header from '../../components/Header/Header';
import { useNavigate } from 'react-router-dom';


const Faq = () => {

    const navigate = useNavigate();

    const breadcast = () => {
      navigate('/')
    }

  return (
<>
<Header/>
<div className='flex pt-5 container mt-[220px] mb-5 gap-5'>
<p onClick={breadcast} className='text-[#7A7687] text-[14px] font-normal leading-[normal] cursor-pointer flex gap-2'>Главная  <span>{" > "}</span></p> <span 
className='text-[#202020] text-[14px] font-normal leading-[normal]'>FAQ</span>


</div>
<div className='container'>
<CustomizedAccordions
 text={
    <>  <div className="flex flex-col gap-[41px] ">
    <p className=" text-[48px] font-medium leading-[110%] w-[80%] ">Часто задаваемые вопросы</p>

    <div className="flex w-[80%] bg-[#d5d1e1] border rounded-full overflow-hidden ">
      <input
        type="text"
        id="main"
        className="bg-[#f8f7f3] flex-1 outline-none py-[10px] px-[20px] text-[14px] rounded-full "
        placeholder="Поиск по вопросам"
      />
      <label htmlFor="main" className="bg-[#d5d1e1] px-2 md:px-4 flex items-center ">
        <IoIosSearch className=" text-[#7A7687]  text-[18px] "></IoIosSearch>
      </label>
    </div>
  </div></>
}
text1='О компании'
text2='Преимущества сотрудников'
text3='Достижения компании'
text4='Возврат товара или заказа'
text5='Стоимость доставки'
text6='Стать поставщиком'
text7='Возможен ли возврат денежных средств?'
text8='Правила расторжения договора?'
subtitle1='Но синтетическое тестирование, в своём классическом представлении, допускает внедрение поэтапного и последовательного развития общества.   В рамках спецификации современных стандартов, сторонники тоталитаризма в науке будут функционально разнесены.'
button={<><div><button className='flex items-center gap-3'><p>Подробнее</p> <span><GoArrowUpRight /></span></button></div></>}
/>
</div>
<div className='grid grid-cols-2 gap-2.5 mb-[150px] container'>
        <div>
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23985.317776691176!2d69.20951579999999!3d41.283519350000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8a4758a84dc7%3A0xd5e59538910cd043!2sGafur%20Gulyam%20Recreation%20Park!5e0!3m2!1sen!2s!4v1719390343527!5m2!1sen!2s"
            style={{ width: "100%", height: "100%" }}
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            className='rounded-xl'
          ></iframe>
        </div>
        <div><Form text='Остались вопросы?' subtitle='Задайте их по номеру телефона +7 (495) 000-00-00 или оставьте свои координаты и наш менеджер перезвонит вам через 10 минут
'/></div>
      </div>
      <Footer/>
</>
  )
}

export default Faq