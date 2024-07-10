import React from 'react'
import Text from '../../ui/Text'
import ProductCategory from '../../components/ProductCategory/ProductCategory'
import ProCategory from '../../components/ProductCategory/ProCategory'
import Brends from '../../components/Hero/Brends'
import CustomizedAccordions from '../../ui/AccordionTwo'
import Form from '../../ui/Form'
import Footer from '../../components/Footer.jsx/Footer'
import { useNavigate } from 'react-router-dom'
import Header from '../../components/Header/Header'

const Product = () => {
   const navigate = useNavigate();

   const breadcast = () => {
     navigate('/')
   }
  return (
<>
<Header/>
<div className='flex pt-5 container mb-5 gap-5 mt-[220px]' >
<p onClick={breadcast} className='text-[#7A7687] text-[14px] font-normal leading-[normal] cursor-pointer'>Главная {">"}</p><span onClick={() =>{
navigate('/Proizvoditeli')
}} className='text-[#7A7687] text-[14px] font-normal leading-[normal] cursor-pointer'>Производители {">"}</span> <span 
className='text-[#202020] text-[14px] font-normal leading-[normal]'>Медецинское оборудование Draeger</span>


</div>

<div className="container mt-[40px] md:mt-[50px] lg:mt-[100px] ">
        <p className="text-[48px] font-medium leading-[110%] mb-[30px] lg:mb-[40px] ">Медецинское оборудование Draeger</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-[25px] lg:mb-[40px] ">
          <img className='w-full object-contain' src="../../../public/assets/Draeger1.png" alt="image" />
          <img className='w-full object-contain' src="../../../public/assets/Draeger2.png" alt="image" />
        </div>

        <div className=" flex flex-col gap-[20px] w-[90%] lg:w-1/2 lg:ml-auto">
          <p className=" text-[16px] font-medium leading-[140%]">
            Учитывая стремительное развитие мировых медицинских технологий, врачи в Российской
            Федерации и соседних странах столкнулись с вызовом, требующим обновления приборов
            в различных направлениях, от установок компьютерной томографии до ультразвуковых
            сканеров и ЛОР комбайнов. Переход на полностью цифровую платформу при диагностике
            и лечении заболеваний также стал серьёзным испытанием для большинства больниц и частных
            клиник.
          </p>
          <p className="text-[16px] font-medium leading-[140%] ">
            Учитывая стремительное развитие мировых медицинских технологий, врачи в Российской
            Федерации и соседних странах столкнулись с вызовом, требующим обновления приборов
            в различных направлениях, от установок компьютерной томографии до ультразвуковых
            сканеров и ЛОР комбайнов. Переход на полностью цифровую платформу при диагностике
            и лечении заболеваний также стал серьёзным испытанием для большинства больниц и частных
            клиник.
          </p>
        </div>
      </div>
   <div className='mb-[40px] mt-[150px] container'>   <Text text='Оборудование Draeger'/></div>
   <ProCategory/>
   <Brends/>
   <CustomizedAccordions text='Часто задоваемые вопросы'/>
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

export default Product