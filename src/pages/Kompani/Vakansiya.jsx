import React from 'react'
import CustomizedAccordions from '../../ui/AccordioonThree'
import { ButtSte, ButtTel } from '../../ui/Button'
import Footer from '../../components/Footer.jsx/Footer'
import Email from '../../components/Email/Email'
import Header from '../../components/Header/Header'
import { useNavigate } from 'react-router-dom'

const Vakansiya = () => {
    const navigate = useNavigate()
const breadcast = () =>{
  navigate('/')
}

  return (
<>
<Header/>



<div className='container mt-[220px]'>
<div className='flex pt-5  mb-5 gap-2'>
<p onClick={breadcast} className='text-[#7A7687] text-[14px] font-normal leading-[normal] cursor-pointer'>Главная {">"}</p><span onClick={() =>{
  navigate('/Kompani')
}} className='text-[#7A7687] text-[14px] font-normal leading-[normal] cursor-pointer'>О компании {">"}</span> <span 
 className='text-[#202020] text-[14px] font-normal leading-[normal]'>Вакансии</span>

  
</div>
<div>
<CustomizedAccordions
button={<><ButtTel title={<>Отправить резюме</>}/></>}
text1={<>Менеджер по продажам</>}
text2={<>Специалист по медицинскому оборудованию</>}
text3={<>Офис менеджер</>}
text4={<>HR–менеджер</>}
text5={<>Архив вакансий</>}
text6={<>Специалист по медицинскому оборудованию</>}
text7={<>Офис менеджер</>}
text8={<>HR–менеджер</>}
topText1={<>Актуальные вакансии</>}

text={<>Вакансии</>}
subtitle={<>«Глобал Медикал Трейд» всегда есть место как для новичков, так и для состоявшихся экспертов. Тем, кто только начинает строить карьеру, мы предлагаем возможность получить ценные знания, а опытным специалистам — расширить компетенции.</>}
subtitle1={
      
    <>
      <p className="text-[#7A7687] pb-2">Обязанности:</p>
       <div>
         <p className="flex items-center gap-2">
           <div className="w-[5px] h-[5px] rounded-full bg-[#444]" />
           Работа с входящими/исходящими звонками
         </p>
         <p className="flex items-center gap-2">
           <div className="w-[5px] h-[5px] rounded-full bg-[#444]" />
           Работа с договорами составление/заключение
         </p>
         <p className="flex items-center gap-2">
           <div className="w-[5px] h-[5px] rounded-full bg-[#444]" />
           Ведение деловой переписки (эл. почта, переписка в
           мессенджерах)
         </p>
         <p className="flex items-center gap-2">
           <div className="w-[5px] h-[5px] rounded-full bg-[#444]" />
           Выполнение плановых показателей
         </p>
       </div>
    
       <h2 className="text-[#7A7687] pb-2 pt-[30px]">Требования:</h2>
       <div>
         <p className="flex items-center gap-2">
           <div className="w-[5px] h-[5px] rounded-full bg-[#444]" />
           Опыт работы телефонных продаж
         </p>
         <p className="flex items-center gap-2">
           <div className="w-[5px] h-[5px] rounded-full bg-[#444]" />
           Опыт работы в CRM
         </p>
         <p className="flex items-center gap-2">
           <div className="w-[5px] h-[5px] rounded-full bg-[#444]" />
           Способность восприятия большого объема информации
         </p>
       </div>
       <h2 className="text-[#7A7687] pb-2 pt-[30px]">
         График работы:
       </h2>
       <div>
         <p className="flex items-center gap-2">
           <div className="w-[5px] h-[5px] rounded-full bg-[#444]" />
           Оформление с первого рабочего дня
         </p>
         <p className="flex items-center gap-2">
           <div className="w-[5px] h-[5px] rounded-full bg-[#444]" />
           00:00 - 23:59
         </p>
       </div>
    </>
    
}/>
</div>
<div className='relative overflow-hidden border-[#E5E2EE] border mt-2.5 rounded-xl mb-[150px]'>
<iframe
src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.072884043826!2d69.20123767599627!3d41.2855182023078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8ba578f4f58d%3A0xd7a2ecf23413b7a0!2sNajot%20Ta&#39;lim%20Chilonzor%20Filial!5e0!3m2!1suz!2s!4v1719840169404!5m2!1suz!2s'
width='100%'
height='400px'
className='rounded-xl'
>

</iframe>
<span className=' absolute top-[35px] left-[10px] bg-white'> 

            <ButtSte title={"г. Москва, ул. Московская, д. 35"} />
          </span>
          <span className=" absolute bottom-[20px] right-[50px] ">
         
            <ButtTel title={"Построить маршрут"} />
          </span>
</div>
    </div>
    <Email/>
    <Footer/>
</>
  )
}

export default Vakansiya