import React from 'react'
import Marquee from 'react-fast-marquee';
import marq1 from '../../../public/assets/223-min.png'
import marq2 from '../../../public/assets/221-min.png'
import marq3 from '../../../public/assets/222-min.png'
import marq4 from '../../../public/assets/224-min.png'

const Marqueee = () => {
  return (
    <div className="bg-[#E5E2EE] py-[50px] lg:py-[100px] ">
      <div className="container flex justify-between flex-col sm:flex-row ">
        <div className="text-[18px] md:text-[20px] lg:text-[30px] mb-[50px] sm:mb-0 ">Наши клиенты</div>
        <div className="text-[28px] md:text-[34px] lg:text-[48px] w-[540px] ">
          БОЛЕЕ <span className="bg-transparent text-[#088269]">5000</span>{" "}
           УСПЕШНЫХ ПРОЕКТОВ
        </div>
      </div>
      <Marquee>
        <div className='flex justify-between gap-6 mx-6 mt-16'>

          <div className=" ">
            <div className="h-48 flex items-center justify-center bg-white rounded-t-xl">
              <img src={marq1} alt="" className="" />
            </div>
            <div className="py-5 pr-8 pl-5 bg-[#f7f8f2] rounded-b-xl">
              <p className='w-[226px]'>НМИЦ онкологии им. Н.Н. Блохина</p>
            </div>
          </div>

          <div className=" ">
            <div className="h-48 flex items-center justify-center bg-white rounded-t-xl">
              <img src={marq2} alt="" className="" />
            </div>
            <div className="py-5 pr-8 pl-5 bg-[#f7f8f2] rounded-b-xl">
              <p className='w-[226px]'>НМИЦ онкологии им. Н.Н. Блохина</p>
            </div>
          </div>
          <div className=" ">
            <div className="h-48 flex items-center justify-center bg-white rounded-t-xl">
              <img src={marq3} alt="" className="" />
            </div>
            <div className="py-5 pr-8 pl-5 bg-[#f7f8f2] rounded-b-xl">
              <p className='w-[226px]'>НМИЦ онкологии им. Н.Н. Блохина</p>
            </div>
          </div>
          <div className=" ">
            <div className="h-48 flex items-center justify-center bg-white rounded-t-xl">
              <img src={marq4} alt="" className="" />
            </div>
            <div className="py-5 pr-8 pl-5 bg-[#f7f8f2] rounded-b-xl">
              <p className='w-[226px]'>НМИЦ онкологии им. Н.Н. Блохина</p>
            </div>
          </div>
          <div>
            <div className="h-48 flex items-center justify-center bg-white rounded-t-xl">
              <img src={marq3} alt="" className="" />
            </div>
            <div className="py-5 pr-8 pl-5 bg-[#f7f8f2] rounded-b-xl">
              <p className='w-[226px]'>НМИЦ онкологии им. Н.Н. Блохина</p>
            </div>
          </div>
        </div>
      </Marquee>
    </div>
  );
}

export default Marqueee
