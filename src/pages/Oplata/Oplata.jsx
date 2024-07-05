import React from 'react';
import { useNavigate } from 'react-router-dom';
import Form from '../../ui/Form';
import Footer from '../../components/Footer.jsx/Footer';

const Oplata = () => {
  const navigate = useNavigate();

  const breadcast = () => {
    navigate('/');
  };

  return (
 <>
 
 <div className='px-[35px]'>
      <div className="flex pt-5">
        <p onClick={breadcast} className="text-[#7A7687] text-[14px] font-normal leading-normal cursor-pointer">
          Главная {'>'}
        </p>
        <span className="text-[#202020] text-[14px] font-normal leading-normal mb-[100px]">Доставка</span>
      </div>
      <h1 className="text-[48px] font-medium leading-[110%]">Оплата</h1>
      <p className="text-[16px] font-medium leading-[140%] w-[650px] py-10">
        Учитывая стремительное развитие мировых медицинских технологий, врачи в Российской Федерации и соседних
        странах столкнулись с вызовом, требующим обновления приборов в различных направлениях, от установок
        компьютерной томографии до ультразвуковых сканеров и ЛОР комбайнов.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[10px] mb-[150px]">
        <div className="border bg-white border-[#E5E2EE] rounded-[10px] p-[15px] md:p-[20px] lg:p-[30px]">
          <h2 className="text-[18px] font-semibold leading-normal mb-4">Оплата наличными</h2>
          <ul className="list-decimal ml-4 text-[#7A7687] text-[16px] font-medium leading-[140%]"> 
            <li>Также как постоянное обеспечение нашей деятельности требует определения</li>
            <li>Требующим обновления приборов в различных направлениях, от установок компьютерной томографии</li>
            <li>Также как постоянное обеспечение нашей</li>
          </ul>
        </div>
        <div className="border bg-white border-[#E5E2EE] rounded-[10px] p-[15px] md:p-[20px] lg:p-[30px]">
          <h2 className="text-[18px] font-semibold leading-normal mb-4">Безналичный расчет</h2>
          <ul className="list-decimal ml-4 text-[#7A7687] text-[16px] font-medium leading-[140%]"> 
            <li>Также как постоянное обеспечение нашей деятельности требует определения </li>
            <li>Также как постоянное обеспечение нашей </li>
            <li>Также как постоянное</li>
          </ul>
        </div>
        <div className="border bg-white border-[#E5E2EE] rounded-[10px] p-[15px] md:p-[20px] lg:p-[30px]">
          <h2 className="text-[18px] font-semibold leading-normal mb-4">Оплата банковской картой</h2>
          <ul className="list-decimal ml-4 text-[#7A7687] text-[16px] font-medium leading-[140%]"> 
            <li>Требующим обновления приборов в различных направлениях, от установок компьютерной томографии </li>
            <li>Также как постоянное обеспечение нашей </li>
            <li>Также как постоянное</li>
            <li>Также как постоянное обеспечение </li>
          </ul>
        </div>
      </div>
      <h1 className="text-[48px] font-medium leading-[110%]">Порядок возврата денежных средств</h1>
      <p className="text-[16px] font-medium leading-[140%] w-[650px] py-10">
      Учитывая стремительное развитие мировых медицинских технологий, врачи в Российской Федерации и соседних странах столкнулись с вызовом, требующим обновления приборов в различных направлениях, от установок компьютерной томографии до ультразвуковых сканеров и ЛОР комбайнов. 
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[10px] mb-[150px]">
        <div className="border bg-white border-[#E5E2EE] rounded-[10px] p-[15px] md:p-[20px] lg:p-[30px]">
          <h2 className="text-[18px] font-semibold leading-normal mb-4">При оплате наличными</h2>
          <ul className="list-decimal ml-4 text-[#7A7687] text-[16px] font-medium leading-[140%]"> 
            <li>Также как постоянное обеспечение нашей деятельности требует определения </li>
            <li>Требующим обновления приборов в различных направлениях, от установок компьютерной томографии </li>
          </ul>
        </div>
        <div className="border bg-white border-[#E5E2EE] rounded-[10px] p-[15px] md:p-[20px] lg:p-[30px]">
          <h2 className="text-[18px] font-semibold leading-normal mb-4">При оплате банковской картой</h2>
          <ul className="list-decimal ml-4 text-[#7A7687] text-[16px] font-medium leading-[140%]"> 
            <li>Также как постоянное обеспечение нашей деятельности требует определения </li>
            <li>Также как постоянное обеспечение нашей  </li>
            <li>Требующим обновления приборов в различных направлениях, от установок компьютерной томографии </li>
          </ul>
        </div>
        
      </div>
      <h1 className="text-[48px] font-medium leading-[110%]">Условия поставок</h1>
      <p className="text-[16px] font-medium leading-[140%] w-[650px] py-10">
      Учитывая стремительное развитие мировых медицинских технологий, врачи в Российской Федерации и соседних странах столкнулись с вызовом, требующим обновления приборов в различных направлениях, от установок компьютерной томографии до ультразвуковых сканеров и ЛОР комбайнов. 
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[10px] mb-[150px]">
        <div className="border bg-white border-[#E5E2EE] rounded-[10px] p-[15px] md:p-[20px] lg:p-[30px]">
          <h2 className="text-[18px] font-semibold leading-normal mb-4">Лизинг</h2>
          <ul className="list-decimal ml-4 text-[#7A7687] text-[16px] font-medium leading-[140%]"> 
            <li>Также как постоянное обеспечение нашей деятельности требует определения  </li>
            <li>Также как постоянное</li>
            <li>Требующим обновления приборов в различных направлениях, от установок компьютерной томографии </li>
          </ul>
        </div>
        <div className="border bg-white border-[#E5E2EE] rounded-[10px] p-[15px] md:p-[20px] lg:p-[30px]">
          <h2 className="text-[18px] font-semibold leading-normal mb-4">Рассрочка</h2>
          <ul className="list-decimal ml-4 text-[#7A7687] text-[16px] font-medium leading-[140%]"> 
            <li>Требующим обновления приборов в различных направлениях, от установок компьютерной томографии </li>
            <li>Также как постоянное  </li>
            <li>Также как постоянное обеспечение нашей  </li>
          </ul>
        </div>
        
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
  );
};

export default Oplata;
