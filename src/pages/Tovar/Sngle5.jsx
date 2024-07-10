import React from 'react';
import { IoIosStar } from 'react-icons/io';
import { useState } from 'react';
import { ButtTel } from '../../ui/Button';
// import messageImg from '../../../public/icons/message.svg';
// import { BtnG, BtnGG } from '../../ui/Btn';

const messageData = [
  {
    date: '12 января 2023',
    name: 'Тепляков Максим',
    message:
      ' Но синтетическое тестирование, в своём классическом представлении, допускает внедрение поэтапного и последовательного развития общества. В рамках спецификации современных стандартов, сторонники тоталитаризма в науке будут функционально разнесены.',
  },
  {
    date: '31 января 2024',
    name: 'Тишкова Дарья',
    message:
      ' Но синтетическое тестирование, в своём классическом представлении, допускает внедрение поэтапного и последовательного развития общества. В рамках спецификации современных стандартов, сторонники тоталитаризма в науке будут функционально разнесены.',
  },
  {
    date: '21 января 2023',
    name: 'Тепляков Максим',
    message:
      ' Но синтетическое тестирование, в своём классическом представлении, допускает внедрение поэтапного и последовательного развития общества. В рамках спецификации современных стандартов, сторонники тоталитаризма в науке будут функционально разнесены.',
  },
  {
    date: '9 января 2023',
    name: 'Тишкова Дарья',
    message:
      ' Но синтетическое тестирование, в своём классическом представлении, допускает внедрение поэтапного и последовательного развития общества. В рамках спецификации современных стандартов, сторонники тоталитаризма в науке будут функционально разнесены.',
  },
];

const Single5 = () => {
  const [expend, setExpend] = useState(false);

  return (
    <div className="px-[25px] pt-[20px] pb-[25px] bg-white rounded-[10px] ">
      <div className="flex items-center gap-[25px] mb-[20px] ">
        <p className="text-[12px] md:text-[16px] lg:text-[18px] font-semibold">
          Отзывы
          <span className="text-[--text] pl-[10px] ">4</span>
        </p>
        <select
          name=""
          id=""
          className="hidden md:block border border-[--border] rounded-full py-1 px-[10px] text-[12px] outline-[--pri] "
        >
          <option value="">Сначала полезные</option>
          <option value="">Сначала новые </option>
          <option value="">Сначала с высокой оценкой</option>
          <option value="">Сначала с высокой оценкой</option>
        </select>
      </div>

      <div className="flex flex-col md:flex-row gap-[25px] justify-between ">
        <div className="flex flex-col gap-4 order-1 md:order-0">
          {messageData.slice(0, expend ? messageData.length : 2).map((message, index) => (
            <div
              key={index}
              className="border border-[--border] rounded-[10px] pt-[15px] pb-[25px] px-[15px]  "
            >
              <div className="flex gap-4 items-center mb-1 ">
                <img src='' alt="image" className="w-[31px] h-[31px]  " />
                <p className="text-[12px] md:text-[14px] text-[--second] font-semibold ">
                  {message.name}
                </p>
                <span className="flex items-center justify-between  gap-1  ">
                  <span className="flex">
                    <IoIosStar className="text-yellow-500 text-[10px] md:text-[14px] " />
                    <IoIosStar className="text-yellow-500 text-[10px] md:text-[14px] " />
                    <IoIosStar className="text-yellow-500 text-[10px] md:text-[14px] " />
                    <IoIosStar className="text-yellow-500 text-[10px] md:text-[14px] " />
                    <IoIosStar className="text-yellow-500 text-[10px] md:text-[14px] " />
                  </span>
                  <span className="text-[12px] md:text-[14px] opacity-80 ">5.0</span>
                </span>
              </div>

              <p className=" md:pl-[47px] text-[12px] opacity-80 pr-[30px] md:pr-[50px] pb-[11px] ">
                {message.message}
              </p>

              <p className="text-[--second] font-medium text-[12px] md:text-[14px] md:pl-[47px] ">
                {message.date}
              </p>
            </div>
          ))}

          <div onClick={() => setExpend((prev) => !prev)} className="flex justify-center order-1">
            <ButtTel title={expend ? 'показывай меньше' : 'Показать еще'} />
          </div>
        </div>

        <div className="min-w-[270px] md:min-w-[295px] order-0 md:order-1 ">
          <span className="flex items-center justify-between border-b pb-[12px] gap-3 mb-[15px] ">
            <span className="flex">
              <IoIosStar className="text-yellow-500"></IoIosStar>
              <IoIosStar className="text-yellow-500"></IoIosStar>
              <IoIosStar className="text-yellow-500"></IoIosStar>
              <IoIosStar className="text-yellow-500"></IoIosStar>
              <IoIosStar className="text-slate-300"></IoIosStar>
            </span>
            <span>4.0 / 5.0</span>
          </span>

          <div className="flex flex-col gap-2 mb-[15px] ">
            <div className="grid grid-cols-[2fr_4fr_1fr] justify-between items-center ">
              <p className="text-[12px] md:text-[14px] ">5 звезд</p>
              <span className="bg-[#FFC536]  block mx-auto w-full h-[4px]  rounded-full "></span>
              <p className="text-end text-[12px] md:text-[14px] ">12</p>
            </div>
            <div className="grid grid-cols-[2fr_4fr_1fr] justify-between items-center ">
              <p className="text-[12px] md:text-[14px] ">4 звезд</p>
              <span className="bg-[#FFC536]  block mx-auto w-full h-[4px]  rounded-full "></span>
              <p className="text-end text-[12px] md:text-[14px] ">12</p>
            </div>
            <div className="grid grid-cols-[2fr_4fr_1fr] justify-between items-center ">
              <p className="text-[12px] md:text-[14px] ">3 звезд</p>
              <span className="bg-[#FFC536]  block mx-auto w-full h-[4px]  rounded-full "></span>
              <p className="text-end text-[12px] md:text-[14px] ">12</p>
            </div>
            <div className="grid grid-cols-[2fr_4fr_1fr] justify-between items-center ">
              <p className="text-[12px] md:text-[14px] ">2 звезд</p>
              <span className="bg-[#FFC536]  block mx-auto w-full h-[4px]  rounded-full "></span>
              <p className="text-end text-[12px] md:text-[14px] ">12</p>
            </div>
            <div className="grid grid-cols-[2fr_4fr_1fr] justify-between items-center ">
              <p className="text-[12px] md:text-[14px] ">1 звезд</p>
              <span className="bg-[#FFC536]  block mx-auto w-full h-[4px]  rounded-full "></span>
              <p className="text-end text-[12px] md:text-[14px] ">12</p>
            </div>
          </div>

          <div className="flex justify-center ">
            <ButtTel title={'Оставить отзыв'} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Single5;
