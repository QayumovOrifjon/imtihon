import React from 'react'
import logo from '../../../public/assets/Logo.svg'
import wk from '../../../public/assets/vk.svg'
import telg from '../../../public/assets/telegram.svg'
import whats from '../../../public/assets/whatsapp.svg'
import card from '../../../public/assets/mastercard.svg'
import visa from '../../../public/assets/visa.svg'
import mir from '../../../public/assets/mir.svg'
const FooterBot = () => {
  return (
    <div>
          <div className="block sm:hidden ">
          <div className="mb-[30px] ">
            <img src={logo} alt="" />
            <span className="text-[12px] text-white ">ООО «ГЛОБАЛ МЕДИКАЛ ТРЕЙД»</span>
          </div>
        </div>
        <div className="container grid grid-cols-1 md:grid-cols-5 pt-[10px] ">
        <div className="hidden md:block ">
          <img src={logo} alt="" />
          <span className="text-[10px] text-white ">ООО «ГЛОБАЛ МЕДИКАЛ ТРЕЙД»</span>
        </div>

        <div>
          <p className="text-[12px] text-white mb-1 font-semibold ">Мы в соцсетях</p>
          <div className="flex gap-[10px] mb-[30px] ">
            <img src={wk} alt="" className="w-[24px] h-[24px]  " />
            <img src={telg} alt="" className="w-[24px] h-[24px]  " />
            <img src={whats} alt="" className="w-[24px] h-[24px]  " />
          </div>
        </div>

        <div className='flex flex-col md:flex-row md:justify-around md:col-[span_2] mb-[46px]' >

          <div className="mb-[30px] ">
            <p className="text-[12px] mb-1 text-white ">Партнерская программа</p>
            <p className="text-[12px] mb-1 text-white ">Оптовые продажи </p>
            <p className="text-[12px] mb-1 text-white ">Реквизиты</p>
          </div>

          <div className="mb-[30px] ">
            <p className="text-[12px] mb-1 text-white ">Политика конфиденциальности</p>
            <p className="text-[12px] mb-1 text-white ">Условия соглашения </p>
            <p className="text-[12px] mb-1 text-white ">Карта сайта</p>
          </div>
        </div>

        <div className='mb-[50px] '>
          <p className='text-[12px] text-white mb-1 '>Способы оплаты</p>
          <div className='flex items-center gap-4 flex-wrap'>
            <img src={card} alt="image" />
            <img src={visa} alt="image" />
            <img src={mir} alt="image" />
          </div>
        </div>
      </div>
      <div className="container grid grid-cols-1 gap-[15px] md:gap-[10px] md:grid-cols-[1fr_4fr] pb-[10px] ">
        <p className="text-white text-[12px] w-[150px] ">© 2022 Медоборудование Все права защищены</p>
        <p className="text-white text-[12px] opacity-60 ">
          Информация на данном сайте носит справочный характер и не является публичной офертой,
          определяемой положениями Статьи 437 Гражданского кодекса Российской Федерации
        </p>
      </div>
    </div>
  )
}

export default FooterBot