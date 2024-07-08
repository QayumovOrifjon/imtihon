import React from 'react'
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import carbon from '../../../public/assets/carbon.svg'
import carbon1 from '../../../public/assets/carbon1.svg'
import carbon2 from '../../../public/assets/carbon4.svg'
import carbon3 from '../../../public/assets/carbon3.svg'
import { ButtSte, ButtTel } from '../../ui/Button';
import Form from '../../ui/Form';
import Footer from '../../components/Footer.jsx/Footer';

const Garanti = () => {
  const navigate = useNavigate();

  const breadcast = () => {
    navigate('/')
  }
  return (
    <>
    
    <Header/>
    <div className='px-[35px]'>
       <div className='flex pt-5'>
<p onClick={breadcast} className='text-[#7A7687] text-[14px] font-normal leading-[normal] cursor-pointer'>Главная {">"}</p> <span className='text-[#202020] text-[14px] font-normal leading-[normal] mb-[100px]'>Гарантии </span>
</div>
<div className='w-1/2'>
<p className='text-[#202020] text-[48px] font-medium leading-[110%] mb-10'>Гарантии</p>
<p className='text-[16px] font-medium leading-[140%] mb-5'>Регулярное сервисное обслуживание медицинской техники – залог ее надежной, беспроблемной эксплуатации, а также продолжительного срока службы. Периодическая диагностика позволяет выявить любые неисправности, отклонения от нормального рабочего режима на самых ранних сроках. Это предотвратит серьезные поломки, приводящие к дорогостоящим ремонтам. </p>
   <p className='text-[16px] font-medium leading-[140%] mb-2.5'>Являясь авторизованным дилером брендов, продукция которых представлена в каталоге, компания:</p>
   <ul className='list-decimal text-[16px] font-medium leading-[140%] pl-[30px] mb-5'>
    <li>Предоставляет услуги сервисного и гарантийного обслуживания.</li>
    <li>Осуществляет поставку оригинальных запчастей и комплектующих.</li>
    <li>Обучает медицинский персонал работе с современным высокотехнологичным оборудованием.</li>
    </ul>
<p className='text-[16px] font-medium leading-[140%]'>Глобал Медикал Трейд является надежным поставщиком медицинского оборудовани, предлагая своим клиентам качественную продукцию по лучшей цене. Наша компания гарантирует всем клиентам возможность воспользоваться услугами квалифицированных мастеров в установке, пуско-наладке, сервисном и техническом обслуживании приобретенного оборудования.</p>
   
</div>
<h2 className='text-[30px] font-medium leading-[120%] mt-20 mb-5'>Перечень гарантийных услуг</h2>
<div className='grid grid-cols-4 gap-2.5'>
<div className='border py-[84px]'>
  <img className='block mx-auto' src={carbon} alt="" />
  <p className='text-center w-[220px] mx-auto mt-[37px]'> Установка, настройка и пуско-наладка медтехники</p>
</div>
<div className='border py-[84px]'>
  <img className='block mx-auto' src={carbon1} alt="" />
  <p className='text-center w-[220px] mx-auto mt-[37px]'> Установка, настройка и пуско-наладка медтехники</p>
</div>
<div className='border py-[84px]'>
  <img className='block mx-auto' src={carbon2} alt="" />
  <p className='text-center w-[220px] mx-auto mt-[37px]'> Установка, настройка и пуско-наладка медтехники</p>
</div>
<div className='border py-[84px]'>
  <img className='block mx-auto' src={carbon3} alt="" />
  <p className='text-center w-[220px] mx-auto mt-[37px]'> Установка, настройка и пуско-наладка медтехники</p>
</div>

</div>
<div className='flex justify-between  gap-2.5'>
  <div></div>
 <div className='flex gap-2.5 mt-10'> 
  <ButtSte title='Гарантийный случай'/>
 <ButtTel title='Замена товара'/></div>
</div>
<div className='py-[150px]'><div className='grid grid-cols-2 bg-[#088269] rounded-xl p-10 '>
  <div className='text-[#F8F7F3] text-[30px] font-medium leading-[120%]'>Внимание!</div>
  <div><p className='text-[#F8F7F3] text-[16px] font-medium leading-[140%] mb-5'>Рассмотрение заявки на замену товара осуществляется в срок до 30 дней со дня её регистрации согласно п. 1 ст. 12 Закона № 59-ФЗ, при условии предоставления документов, перечисленных в договоре.</p>
  <p className='text-[#F8F7F3] text-[16px] font-medium leading-[140%]'>Оформление гарантийного случая осуществляется согласно Гражданскому кодексу РФ, при условии предоставления документов, перечисленных в договоре  и при наличии заявления с указанием причины возврата, оформленного надлежащим образом.</p>
  </div>
</div></div>
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

export default Garanti