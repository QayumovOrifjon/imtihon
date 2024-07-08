import React from 'react'
import { useNavigate } from 'react-router-dom'
import PaginationComp from '../../ui/Pagination'
import { otziv } from '../../Data/data'
import { IoIosStar } from 'react-icons/io';
import HoverRating from '../../ui/Star';
import Form from '../../ui/Form';
import Footer from '../../components/Footer.jsx/Footer';


const Otziv = () => {
    const navigate = useNavigate()
    const breadcast = () =>{
      navigate('/')
    }

    const productPage = 6;

    const renderProduct = (otziv) => (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[10px]">
        {otziv.map((item) => (
          <div className="bg-white border border-[#E5E2EE] rounded-[10px] p-[20px] ">
          <div className="flex justify-between pb-[20px] lg:pb-[25px] ">
            <div className="flex items-center gap-[15px]  ">
              <img src={item.img} alt="image" className="w-[52px] h-[52px] lg:w-[64px] lg:h-[64px] " />
              <div>
                <p className="text-[14px] md:text-[16px] lg:text-[18px] font-semibold ">
                  ООО Название компании
                </p>
                <p className=" text-[#7A7687] text-[12px] font-normal leading-[normal] mb-[10px] ">Михаил Булич Андреевич, Директор</p>
    
             <HoverRating/>
              </div>
            </div>
            <p className="text-[12px] hidden lg:block ">14.03.2023 </p>
          </div>
          <p className="text-[#7A7687] text-[16px] font-medium leading-[140%] ">{item.desc}</p>
        </div>
        ))}
      </div>
    );
  return (
  <>
    <div className='px-[35px]'>
         <div className='flex pt-5  mb-5 gap-2'>
<p onClick={breadcast} className='text-[#7A7687] text-[14px] font-normal leading-[normal] cursor-pointer'>Главная {">"}</p><span onClick={() =>{
navigate('/Kompani')
}} className='text-[#7A7687] text-[14px] font-normal leading-[normal] cursor-pointer'>О компании {">"}</span> <span 
className='text-[#202020] text-[14px] font-normal leading-[normal]'>Отзывы</span>


</div>
<div className=" mt-[40px] md:mt-[50px] lg:mt-[100px] mb-[150px]">
        <p className="text-[48px] font-medium leading-[110%] mb-[20px] lg:mb-[40px]">Отзывы</p>

        <PaginationComp
          product={otziv}
          productPage={productPage}
          renderProduct={renderProduct}
        />
      </div>
      <div className='grid grid-cols-2 gap-2.5 mb-[150px]'>
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
    </div>
    <Footer/>
  </>
    
  )
}

export default Otziv