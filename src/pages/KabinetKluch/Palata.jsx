import React, { useState } from 'react'
import palata from '../../../public/assets/Palata.png'
import PalataSlider from './PalataSlider';
import { ButtTel } from '../../ui/Button';
import Header from '../../components/Header/Header';
import { useNavigate } from 'react-router-dom';
import CustomizedAccordions from '../../ui/AccordionTwo';
import Form from '../../ui/Form';
import Footer from '../../components/Footer.jsx/Footer';

const Palata = () => {
  const [tab, setTab] = useState(0);


    const navigate = useNavigate();

    const breadcast = () => {
      navigate('/')
    }

  return (
   <>
   <Header/>
   <div className='flex pt-5 container mb-5 gap-5 mt-[220px]' >
<p onClick={breadcast} className='text-[#7A7687] text-[14px] font-normal leading-[normal] cursor-pointer'>Главная {">"}</p><span onClick={() =>{
navigate('/Kobinet')
}} className='text-[#7A7687] text-[14px] font-normal leading-[normal] cursor-pointer'>Кабинет под ключ {">"}</span><span onClick={() =>{
  navigate('/Kobinet')
  }} className='text-[#7A7687] text-[14px] font-normal leading-[normal] cursor-pointer'>Реанимация {">"}</span> <span 
className='text-[#202020] text-[14px] font-normal leading-[normal]'>Палата реанимации и интенсивной терапии</span>


</div>

   <div className=" mt-[40px] md:mt-[50px] lg:mt-[100px] container">
        <p className=" mb-[30px] lg:mb-[40px] text-[48px] font-medium leading-[110%] w-[60%]">
          Комплексное оснащение палаты реанимации и интенсивной терапии
        </p>
        <img className='object-contain w-full' src={palata} alt="" />
        <div className="w-full md:w-[90%] lg:w-1/2 lg:ml-auto  mt-[20px] lg:mt-[20px] mb-[40px] ">
          <p className="mb-[15px] text-[16px] font-medium leading-[140%]">
            Учитывая стремительное развитие мировых медицинских технологий, врачи в Российской
            Федерации и соседних странах столкнулись с вызовом, требующим обновления приборов
            в различных направлениях, от установок компьютерной томографии до ультразвуковых
            сканеров и ЛОР комбайнов. Переход на полностью цифровую платформу при диагностике
            и лечении заболеваний также стал серьёзным испытанием для большинства больниц и частных
            клиник.
          </p>
          <p className="text-[12px] font-medium leading-[normal] text-[#07745E] cursor-pointer">
            Скачать каталог "Стандарты оснащения отделений"
          </p>
        </div>
      </div>

      <div className=" container mb-[150px]">
        <div className="hidden md:block border border-[#E5E2EE] rounded-[10px] ">
          <ul className="flex gap-[15px] lg:gap-[25px]  items-center text-[12px] lg:text-[14px] font-semibold px-[25px] text-[#7A7687] border-b ">
            <li
              onClick={() => setTab(0)}
              className={` ${
                tab == 0
                  ? 'border-b-[2px] border-[#088269] text-[#202020]'
                  : 'border-b-[2px] border-transparent'
              } duration-200 cursor-pointer py-[15px]  `}
            >
              Стандарты оснащения
            </li>

            <li
              onClick={() => setTab(1)}
              className={` ${
                tab == 1
                  ? 'border-b-[2px] border-[#088269] text-[#202020]'
                  : 'border-b-[2px] border-transparent'
              } duration-200 cursor-pointer py-[15px] `}
            >
              Список товаров
            </li>
          </ul>
          <div>
            {tab == 0 ? 
            <div className="grid grid-cols-1 bg-white rounded-[10px] w-full md:grid-cols-2 px-[25px] pt-[20px] pb-[40px] ">
            <p className=' md:hidden font-semibold pb-[15px] mb-[20px] text-[12px]  '>Стандарты оснащения</p>
        <ul className="list-decimal  flex flex-col gap-[10px] text-[10px] lg:text-[12px] list-inside">
          <li>Аппарат искусственной вентиляции лёгких</li>
          <li>Аппарат искусственной вентиляции легких транспортный</li>
          <li>Дыхательный мешок для ручной искусственной вентиляции легких</li>
          <li>Монитор пациента на 5 параметров</li>
          <li>Монитор пациента на 8 параметров</li>
          <li>Шприцевой насос</li>
          <li>Инфузионный насос</li>
          <li>Набор для интубации трахеи</li>
          <li>Дефибриллятор</li>
        </ul>
  
        <ul className=" list-decimal list-inside flex flex-col gap-[10px] text-[10px] lg:text-[12px] ">
          <li>Матрац термостабилизирующий</li>
          <li>Автоматический анализатор газов крови</li>
          <li>Электрокардиограф</li>
          <li>Транспортируемый рентгеновский аппарат</li>
  
          <li>Портативный ультразвуковой диагностический аппарат</li>
          <li>Кровать трёхсекционная с ограждением</li>
          <li>Кровать-вес</li>
          <li>Электроэнцефалограф 8-канальный</li>
          <li>Пневмокомпрессорная профилактика тромбоэмболических осложнений и лимфостаза</li>
        </ul>
      </div>

            : null}
            {tab == 1 ? <PalataSlider /> : null}
          </div>
        </div>

       
      </div>

      <div className="container mb-[150px]">
        <div className="bg-white rounded-[10px] border-[#E5E2EE] border p-[20px] lg:p-[40px] custom-margin grid grid-cols-1 md:grid-cols-2 gap-[30px]  ">
          <p className="text-[30px] font-medium md:text-[20px] lg:text-[30px] leading-[120%] xl:w-[70%] lg:w-[85%] ">
            Закажите у нас комплексное оснащение
          </p>

          <div>
            <input type="number" className="w-full border-b pb-[10px] " placeholder="Ваш телефон" />
            <div className="flex flex-col lg:flex-row mt-[30px] lg:gap-[30px] items-start lg:items-center ">
              <ButtTel title={'Заказать'} />
              <p className="text-[12px] font-medium text-[#7A7687)] opacity-60">
                Нажимая «Отправить», я соглашаюсь с обработкой персональных данных на условиях{' '}
                <span href="#" className="text-[#088269] underline cursor-pointer">
                  Политики конфиденциальности
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <CustomizedAccordions text='Часто задоваемые вопросы'/>
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
        <div><Form text='Остались вопросы?' subtitle='Задайте их по номеру телефона +7 (495) 000-00-00 или оставьте свои координаты и наш менеджер перезвонит вам через 10 минут
'/></div>
      </div>
      <Footer/>
   </>
  )
}

export default Palata