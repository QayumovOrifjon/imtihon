import React from 'react'
import Stati1 from '../../../public/assets/Stati1.png'
import Stati2 from '../../../public/assets/Stati2.png'
import Stati3 from '../../../public/assets/Stati3.png'
import { useNavigate } from 'react-router-dom'
import Header from '../../components/Header/Header'
import CustomizedAccordions from '../../ui/AccordioonThree'
import Tovar from '../../components/Hero/Tovar'
import Kabinet from '../../components/Hero/Kabinet'
import Brends from '../../components/Hero/Brends'
import Footer from '../../components/Footer.jsx/Footer'
import Form from '../../ui/Form'

const Stati = () => {
    const navigate = useNavigate()
const breadcast = () =>{
  navigate('/')
}
const Status = (status) => {
  switch (status) {
    case 'Новинка':
      return { backgroundColor: '#E1EFE6', color: '#088269', borderColor: '#088269' };
    case 'Хит продаж':
      return { backgroundColor: '#E6E6FD', color: '#424285', borderColor: '#424285' };
    case '-30%':
      return { backgroundColor: '#FFE095', color: '#AD7B00', borderColor: '#AD7B00' };
    default:
      return { backgroundColor: '#FFFFFF', color: 'inherit', borderColor: 'transparent' };
  }
};
  return (
    <>
    <Header/>
    <div className='flex pt-5 px-[35px] mb-5 gap-5 container mt-[220px]'>
<p onClick={breadcast} className='text-[#7A7687] text-[14px] font-normal leading-[normal] cursor-pointer'>Главная {">"}</p><span onClick={() =>{
navigate('/Blog')
}} className='text-[#7A7687] text-[14px] font-normal leading-[normal] cursor-pointer'>Блог {">"}</span> <span 
className='text-[#202020] text-[14px] font-normal leading-[normal]'>Информационная статья</span>


</div>

  <div className=" container">
    <div className="py-[20px] md:py-[25px] lg:py-[35px] bg-white rounded-[10px] border-[#E5E2EE] arr border mt-[40px] md:mt-[50px] lg:mt-[100px] ">
      <div className="px-[20px] md:px-[25px] lg:px-[35px]">
      <p className="text-[48px] font-medium leading-[110%] mb-[20px] ">
  
  Информационная статья
</p>
        <p className="text-[#7A7687] text-[12px] mb-[27px] ">Автор: Иванов Р.</p>

        <div className="mb-[50px] lg:mb-[60px] ">
          <p className="text-[14px] md:text-[16px] lg:text-[18px] font-semibold ">
            Содержание:{' '}
          </p>
          <p className=" mb-1 text-[12px] mt-[12px] ">
            1. Новая модель организационной деятельности
          </p>
          <p className=" mb-1 text-[12px] ">
            2. Мы вынуждены отталкиваться от того, что курс
          </p>
          <p className=" mb-1 text-[12px] ">
            3. Новая модель организационной деятельности
          </p>
          <p className="mb-1 text-[12px] ">
            4. Мы вынуждены отталкиваться от того, что курс
          </p>
        </div>

        <div className="w-full md:w-[90%] lg:w-4/5 mb-[30px] lg:mb-[40px] ">
        <p className="text-[30px] font-medium leading-[120%] ">
        Новая модель организационной деятельности
</p>
          <p className=" text-[16px] font-medium leading-[140%] mt-[15px] lg:mt-[20px] w-[870px]">
            Равным образом, внедрение современных методик однозначно фиксирует необходимость
            поэтапного и последовательного развития общества. В частности, постоянное
            информационно-пропагандистское обеспечение нашей деятельности, а также свежий взгляд
            на привычные вещи — безусловно открывает новые горизонты для стандартных подходов.
            Каждый из нас понимает очевидную вещь: постоянный количественный рост и сфера нашей
            активности создаёт предпосылки для соответствующих условий активизации.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[10px] w-full mb-[50px] lg:mb-[60px]  ">
          <div className="w-full">
            <img src={Stati1} alt="image" className=" w-full" />
          </div>
          <div className="w-full">
            <img src={Stati2} alt="image" className=" w-full" />
          </div>
        </div>

        <div className="w-full md:w-[90%] lg:w-4/5 mb-[30px] lg:mb-[40px] ">
        <p className="text-[30px] font-medium leading-[120%] ">
        Новая модель организационной деятельности
</p>
          <p className=" text-[16px] font-medium leading-[140%] mt-[15px] lg:mt-[20px] w-[870px]">
            Равным образом, внедрение современных методик однозначно фиксирует необходимость
            поэтапного и последовательного развития общества. В частности, постоянное
            информационно-пропагандистское обеспечение нашей деятельности, а также свежий взгляд
            на привычные вещи — безусловно открывает новые горизонты для стандартных подходов.
            Каждый из нас понимает очевидную вещь: постоянный количественный рост и сфера нашей
            активности создаёт предпосылки для соответствующих условий активизации.
          </p>
        </div>
      </div>

      <div className=" bg-[#E1EFE6] py-[20px] lg:py-[30px] px-[20px] md:px-[25px] lg:px-[35px] mb-[50px] lg:mb-[60px] ">
        <p className="w-full md:w-[90%] lg:w-[870px] ">
          Равным образом, внедрение современных методик однозначно фиксирует необходимость
          поэтапного и последовательного развития общества. В частности, постоянное
          информационно-пропагандистское обеспечение нашей деятельности, а также свежий взгляд
          на привычные вещи — безусловно открывает новые горизонты для стандартных подходов.
          Каждый из нас понимает очевидную вещь: постоянный количественный рост и сфера нашей
          активности создаёт предпосылки для соответствующих условий активизации.
        </p>
      </div>

      <div className="px-[20px] md:px-[25px] lg:px-[35px]">
        <div className="w-full md:w-[90%] lg:w-4/5 mb-[30px] lg:mb-[40px] ">
        <p className="text-[30px] font-medium leading-[120%] ">
        Новая модель организационной деятельности
</p>
          <p className=" text-[16px] font-medium leading-[140%] mt-[15px] lg:mt-[20px] w-[870px]">
            Равным образом, внедрение современных методик однозначно фиксирует необходимость
            поэтапного и последовательного развития общества. В частности, постоянное
            информационно-пропагандистское обеспечение нашей деятельности, а также свежий взгляд
            на привычные вещи — безусловно открывает новые горизонты для стандартных подходов.
            Каждый из нас понимает очевидную вещь: постоянный количественный рост и сфера нашей
            активности создаёт предпосылки для соответствующих условий активизации.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[10px] w-full mb-[50px] lg:mb-[60px]  ">
          <div className="w-full">
            <img src={Stati3} alt="image" className=" w-full" />
          </div>
          <div className="w-full">
            <img src={Stati1} alt="image" className=" w-full" />
          </div>
        </div>

        <div className="w-full md:w-[90%] lg:w-4/5 mb-[30px] lg:mb-[40px] ">
        <p className="text-[30px] font-medium leading-[120%] ">
        Новая модель организационной деятельности
</p>
          <p className=" text-[16px] font-medium leading-[140%] mt-[15px] lg:mt-[20px] w-[870px]">
            Равным образом, внедрение современных методик однозначно фиксирует необходимость
            поэтапного и последовательного развития общества. В частности, постоянное
            информационно-пропагандистское обеспечение нашей деятельности, а также свежий взгляд
            на привычные вещи — безусловно открывает новые горизонты для стандартных подходов.
            Каждый из нас понимает очевидную вещь: постоянный количественный рост и сфера нашей
            активности создаёт предпосылки для соответствующих условий активизации.
          </p>
        </div>
      </div>
    </div>
  </div>
 <div className='mt-[150px]'><Tovar/></div>
 <Kabinet/>
 <Brends/>
 <div className='grid grid-cols-2 container gap-2.5 mb-[150px]'>
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

export default Stati