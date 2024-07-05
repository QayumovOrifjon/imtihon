import React, { useState } from 'react';
import { ButtTel } from './Button';

const Form = ({ text , subtitle}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    question: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({
      name: '',
      phone: '',
      email: '',
      question: '',
    })
  };

  return (
    <div className=" bg-white p-[40px] border border-[#E5E2EE] rounded-xl">
      <h2 className=" lg:text-[30px] mb-6 text-[#202020] text-[30px] font-medium leading-[120%]"> {text} </h2>
      <p className="text-[#7A7687] text-[16px] font-medium leading-[140%] w-[410px] mb-10 ">
       {subtitle}
      </p>
      <form 
      // onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <input
            type="text"
            name="name"
            placeholder="Ваше имя"
            // value={formData.name}
            // onChange={handleChange}
            // required
            className="w-full py-[11px] text-[14px] outline-none border-b border-[#D7D6DB] "
          />
        </div>
        <div className="mb-4">
          <input
            type="tel"
            name="phone"
            placeholder="Ваш телефон"
            // value={formData.phone}
            // onChange={handleChange}
            // required
            className="w-full py-[11px] text-[14px] outline-none border-b border-[#D7D6DB] "
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            name="email"
            placeholder="Ваш email"
            // value={formData.email}
            // onChange={handleChange}
            // required
            className="w-full py-[11px] text-[14px] outline-none border-b border-[#D7D6DB] "
          />
        </div>
        <div className=" lg:mb-[30px] ">
          <textarea
            name="question"
            placeholder="Ваш вопрос"
            // value={formData.question}
            // onChange={handleChange}
            // required
            className="w-full h-[100px] mb-[5px] resize-none py-[11px] text-[14px] outline-none border-b border-[#D7D6DB] "
          />
        </div>

        <div className="flex flex-col lg:flex-row mt-[30px] lg:gap-[30px]  lg:items-center ">
          <ButtTel title={'Отправить'} />

          <p className=" text-[12px] font-medium text-[#7A7687] opacity-60">
            Нажимая «Отправить», я соглашаюсь с обработкой персональных данных на условиях{' '}
            <a href="#" className="text-[#088269] underline">
              Политики конфиденциальности
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Form;
