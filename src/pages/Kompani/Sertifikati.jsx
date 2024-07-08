import React from 'react'
import Header from '../../components/Header/Header'
import { useNavigate } from 'react-router-dom'
import CustomizedAccordions from '../../ui/AccordioonThree'
import Tovar from '../../components/Hero/Tovar'
import Form from '../../ui/Form'
import Footer from '../../components/Footer.jsx/Footer'

const Sertifikati = () => {
    const navigate = useNavigate()
    const breadcast = () =>{
      navigate('/')
    }

  return (
    <>
    <Header/>

<div className='px-[35px]'>
    <div className='flex pt-5  mb-5 gap-2'>
<p onClick={breadcast} className='text-[#7A7687] text-[14px] font-normal leading-[normal] cursor-pointer'>Главная {">"}</p><span onClick={() =>{
navigate('/Kompani')
}} className='text-[#7A7687] text-[14px] font-normal leading-[normal] cursor-pointer'>О компании {">"}</span> <span 
className='text-[#202020] text-[14px] font-normal leading-[normal]'>Сертификаты</span>


</div>
<CustomizedAccordions text={'Сертификаты'}
text1={'Медицинские инструменты'}
text2={'Материалы для гинекологии и урологии'}
text3={'Материалы для инъекционных процедур'}
text4={'Перевязочные материалы'}
text5={'Медицинские инструменты'}
text6={'Материалы для гинекологии и урологии'}
text7={'Материалы для инъекционных процедур'}
text8={'Перевязочные материалы'}



subtitle1={<>
  <div className="flex flex-col gap-2 ">
                    <p className=" text-[10px] text-[#07745E] ">
                      Инструменты медицинские хирургические РУ № РЗН 2015/3121
                      от 12 октября 2015 г.
                    </p>
                    <p className=" text-[10px] text-[#07745E] ">
                      Фильтры медицинские РУ № РЗН 2019/8405 от 5 июня 2019 г.
                    </p>
                    <p className=" text-[10px] text-[#07745E] ">
                      Воздуховоды полимерные РУ № ФСР 2011/10719 от 15 августа
                      2016 г
                    </p>
                    <p className=" text-[10px] text-[#07745E] ">
                      Набор оториноларингологический РУ № ФСЗ 2010/08840 от 23
                      ноября 2018 г.
                    </p>
                    <p className=" text-[10px] text-[#07745E] ">
                      Инструменты одноразовые РУ № ФСЗ 2009/05638 от 23 ноября
                      2018 года
                    </p>
                    <p className=" text-[10px] text-[#07745E] ">
                      Пипетка офтальмологическая РУ № ФСР 2009/04211 от 23
                      ноября 2015 г.
                    </p>
                    <p className=" text-[10px] text-[#07745E] ">
                      Термометр инфракрасный РУ № ФСЗ 2012/13255 от 22 ноября
                      2012 г.
                    </p>
                    <p className=" text-[10px] text-[#07745E] ">
                      Зажим пупочный РУ № ФСР 2011/10731 от 6 мая 2011 г.
                    </p>
                    <p className=" text-[10px] text-[#07745E] ">
                      Гигрометры ВИТ Свидетельство об утверждении
                    </p>
                    <p className=" text-[10px] text-[#07745E] ">
                      Термометры медицинские РУ № РЗН 2015/2853 от 6 июля 2017
                      г.
                    </p>
                    <p className=" text-[10px] text-[#07745E] ">
                      Станов для бритья РУ № ФСЗ 2009/04329 от 20 июля 2009 г.
                    </p>
                    <p className=" text-[10px] text-[#07745E] ">
                      Пинцеты медицинские РУ № ФСЗ 2010/06996 от 23 ноября 2018
                      г.
                    </p>
                    <p className=" text-[10px] text-[#07745E] ">
                      Емкость-контейнеры для сбора РУ № РЗН 2014/2254 от 18
                      марта 2020 г.
                    </p>
                    <p className=" text-[10px] text-[#07745E] ">
                      Емкости-контейнеры РУ № ФСР 2012/13095 ч.1
                    </p>
                    <p className=" text-[10px] text-[#07745E] ">
                      Электроды медицинские РУ № ФСЗ 2012/12612
                    </p>
                    <p className=" text-[10px] text-[#07745E] ">
                      Инструменты хирургические РУ № ФСЗ 2012/12251 от 30 мая
                      2012 г.
                    </p>
                    <p className=" text-[10px] text-[#07745E] ">
                      Изделие медицинское для инфуз.-трансфуз. РУ № ФСЗ
                      2011/11287 от 27 декабря 2011 г.
                    </p>
                    <p className=" text-[10px] text-[#07745E] ">
                      Термометр медицинский РУ № ФСЗ 2011/10572
                    </p>
                    <p className=" text-[10px] text-[#07745E] ">
                      Мундштуки картонные и адаптеры РУ № ФСР 2012/13317 от 27
                      августа 2019 г.
                    </p>
                    <p className=" text-[10px] text-[#07745E] ">
                      Мундштуки картонные одноразовые РУ № ФСР 2012/13607 от 13
                      февраля 2018 г.
                    </p>
                    <p className=" text-[10px] text-[#07745E] ">
                      Анализатор паров этанола Alcotest РУ № РЗН 2016/5237 от 13
                      января 2017 г.
                    </p>
                  </div>
</>}
/>

</div>
<Tovar/>
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
      <Footer/>
    </>
  )
}

export default Sertifikati