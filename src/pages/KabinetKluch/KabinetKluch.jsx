import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { kobinet } from '../../Data/data';
import { ButtTel } from '../../ui/Button';
import Header from '../../components/Header/Header';
import Section from '../../components/Hero/Section';
import CustomizedAccordions from '../../components/Hero/Accordion';
import Form from '../../ui/Form';
import Email from '../../components/Email/Email';
import Footer from '../../components/Footer.jsx/Footer';

const KobinetKluch = () => {
    const navigate = useNavigate();

    const breadcast = () => {
      navigate('/')
    }

  return (
    <>
    <Header/>
    <div className='flex pt-5 px-[35px]'>
<p onClick={breadcast} className='text-[#7A7687] text-[14px] font-normal leading-[normal] cursor-pointer'>Главная {">"}</p> <span className='text-[#202020] text-[14px] font-normal leading-[normal]'>Кабинеты под ключ</span>

  
</div> 

      <div className="px-[35px] mt-[40px] md:mt-[50px] lg:mt-[100px] custom-margin">
     
        <p className=" mb-[20px] md:mb-[30px] lg:mb-[40px] text-[48px] font-medium leading-[110%]">Кабинеты под ключ</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[10px] ">
          {kobinet.map((item) => (
            <Link >
              <div key={item.id} className="bg-white rounded-xl ">
                <img src={item.img} alt="" className='w-[100%]'/>
                <div className="p-[15px] lg:p-[20px] border border-[#E5E2EE] rounded-b-xl">
                  <p className=" text-[16px] font-medium leading-[140%]">Реанимация</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
<Section/>

      <div className=" px-[35px] mb-[150px]">
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
      <CustomizedAccordions text='Часто задаваемые вопросы'/>
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
      <Email/>
      <Footer/>
    </>
  );
};

export default KobinetKluch;
