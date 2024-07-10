import React from 'react'
import { useNavigate } from 'react-router-dom';
import {  ButtSte, ButtTel } from '../../ui/Button';
import subtract from '../../../public/assets/Subtract.svg'
import home from '../../../public/assets/Home.svg'
import symbol from '../../../public/assets/Symboll.svg'
import group from '../../../public/assets/Group.svg'
import CustomizedAccordions from '../../ui/AccordionTwo';
import WhiteAccordion from '../../ui/WhiteAccordion';
import Form from '../../ui/Form';
import Email from '../../components/Email/Email';
import Footer from '../../components/Footer.jsx/Footer';
import Header from '../../components/Header/Header';

const Dostavka = () => {
  const navigate = useNavigate();

  const breadcast = () => {
    navigate('/')
  }
  return (
<>
<Header/>
<div className='container'>
  <div className='flex pt-5'>
<p onClick={breadcast} className='text-[#7A7687] text-[14px] font-normal leading-[normal] cursor-pointer'>Главная {">"}</p> <span className='text-[#202020] text-[14px] font-normal leading-[normal] mb-[100px]'>Доставка</span>

  
</div> 
<p className='text-[#202020] text-[48px] font-medium leading-[110%] mb-10'>Информация о доставке</p>

<div className='mb-10 relative'>
<iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23985.317776691176!2d69.20951579999999!3d41.283519350000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8a4758a84dc7%3A0xd5e59538910cd043!2sGafur%20Gulyam%20Recreation%20Park!5e0!3m2!1sen!2s!4v1719390343527!5m2!1sen!2s"
            style={{ width: "100%", height: '400px' }}
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            className='rounded-xl'
          ></iframe>
          <div className='absolute bottom-[20px] right-[55px]'>
            <ButtTel title='Пункт выдачи'/>
          </div>
</div>
<div className=" grid grid-cols-1 lg:grid-cols-2">
          <p></p>
          <p className="custom-text w-full md:w-[80%] lg:w-full text-[#202020] text-[16px] font-medium leading-[140%]">
            Учитывая стремительное развитие мировых медицинских технологий, врачи в Российской
            Федерации и соседних странах столкнулись с вызовом, требующим обновления приборов
            в различных направлениях, от установок компьютерной томографии до ультразвуковых
            сканеров и ЛОР комбайнов. Переход на полностью цифровую платформу при диагностике
            и лечении заболеваний также стал серьёзным испытанием для большинства больниц и частных
            клиник.
          </p>
        </div>
        <p className='text-[30px] font-medium leading-[120%] mb-10 mt-[150px]'>С нами выгодно и удобно</p>
        <div className='grid grid-cols-4 gap-3'>
          <div className='border py-[90px] rounded-xl border-[#E5E2EE]'><img className='block mx-auto mb-[30px] w-[56px]' src={subtract} alt="" />
          <p className='text-center w-[155px] mx-auto'>Доставка по всей России</p>
          </div>
          <div className='border py-[90px]  rounded-xl border-[#E5E2EE]'><img className='block mx-auto mb-[30px] w-[56px]' src={home} alt="" />
          <p className='text-center w-[155px] mx-auto'>Собственный склад с продукцией</p>
          </div> <div className='border py-[90px] rounded-xl border-[#E5E2EE]'><img className='block mx-auto mb-[30px] w-[56px]' src={symbol} alt="" />
          <p className='text-center w-[155px] mx-auto'>Весь товар сертифицирован</p>
          </div> <div className='border py-[90px] rounded-xl border-[#E5E2EE]'><img className='block mx-auto mb-[30px] w-[56px]' src={group} alt="" />
          <p className='text-center w-[155px] mx-auto'>Безопасные способы оплаты</p>
          </div>
        </div>
          <div className='flex justify-end mt-10'><ButtTel title='Проверить статус доставки'/></div>

          <div className='grid grid-cols-2 my-[150px]'>
            <div>
              <h2 className='text-[#202020] text-[30px] font-medium leading-[120%] w-[366px] mb-[25px]'>Правила получения товара в пункте выдачи</h2>
              <p className='text-[#202020] text-[16px] font-medium leading-[140%] w-[540px]'>Учитывая стремительное развитие мировых медицинских технологий, врачи в Российской Федерации и соседних странах столкнулись с вызовом, требующим обновления приборов.</p>
            </div>
<div>
<div>
<hr className='border-[#D5D1E1] mb-[25px]'/>
              <p className='font-semibold leading-[normal] mb-[15px]'>Подготовить документы</p>
              <span className='text-[#7A7687] text-[16px] font-medium leading-[140%]'>Предварительно ознакомиться с условиями выдачи грузов на сайте и подготовьте нужные документы</span>
<hr className='border-[#D5D1E1] my-[25px]'/>
            </div>
            <div>
              <p className='font-semibold leading-[normal] mb-[15px]'></p>
              <span className='text-[#7A7687] text-[16px] font-medium leading-[140%]'>При получении необходимо внимательно осмотреть упаковку груза на наличие механических повреждений и нарушений целостности упаковки</span>
<hr className='border-[#D5D1E1] my-[25px]'/>
            </div>
            <div>
              <p className='font-semibold leading-[normal] mb-[15px]'>Проверка товара</p>
              <span className='text-[#7A7687] text-[16px] font-medium leading-[140%]'>Вскрыть каждую упаковку и проверите товар по количеству согласно накладной поставщика и на наличие повреждений товара внутри тары</span>
<hr className='border-[#D5D1E1] my-[25px]'/>
            </div>
</div>
          </div>
  </div>

<CustomizedAccordions text='Часто задоваемые вопросы'/>

<div className=' container'>
<div className='grid grid-cols-2 items-center'>
  <div className="">
          <p className="font-medium leading-[120%] text-[18px] md:text-[20px] xl:text-[30px] pb-[25px] md:pb-[30px] lg:pb-0  ">
            Вы сможете забрать оборудование <br />{' '}
            <span className="text-[#088269] ">самостоятельно</span> из нашего офиса{' '}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 mb-[10px] gap-[10px] col-span-2 lg:col-span-1 order-2 lg:order-1  ">
          <div className="border border-[#E5E2EE] rounded-[10px] p-[25px]  bg-white ">
            <p className="mb-[15px] text-[16px] lg:text-[18px] font-semibold ">Контакты</p>
            <p className=" custom-text text-[#7A7687] font-medium mb-1 ">+7 (000) 000-00-00</p>
            <p className=" custom-text text-[#7A7687] font-medium ">info@mail.ru</p>
          </div>
          <div className="border border-[#E5E2EE] rounded-[10px] p-[25px]  bg-white ">
            <p className="mb-[15px] text-[16px] lg:text-[18px] font-semibold ">Режим работы</p>
            <p className=" custom-text text-[#7A7687] font-medium mb-1 ">пн-пт: 09:00-19:00</p>
            <p className=" custom-text text-[#7A7687] font-medium ">сб-вс: выходной</p>
          </div>
        </div></div>  
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

<WhiteAccordion text1='Юридические лица' text2='Индивидуальные предприниматели' text3='Физические лица' subtitle1='Но синтетическое тестирование, в своём классическом представлении, допускает внедрение поэтапного и последовательного развития общества.   В рамках спецификации современных стандартов, сторонники тоталитаризма в науке будут функционально разнесены.' text='Документы, необходимые для получения груза' subtitle='По копиям доверенностей и доверенностям с незаполненными обязательными реквизитами отгрузка не производится'/>
<div className='grid grid-cols-2 mb-[150px] container'>
  <div className='w-[530px]'>
    <p className='text-[30px] font-medium leading-[120%]'>Вам нужна консультация?</p>
    <p>Задайте их по номеру телефона <span className='text-[#088269]'> +7 (495) 000-00-00 </span>или оставьте свои координаты и наш менеджер перезвонит вам через 10 минут</p>
  </div>
  <div>
    <Form/>
  </div>
</div>
<Email/>
<Footer/>
</>

  )
}

export default Dostavka