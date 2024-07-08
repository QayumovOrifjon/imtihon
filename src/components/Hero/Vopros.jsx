import React from "react";

const Vopros = () => {
  return (
    <div className="bg-[#f8f7f3]">
      <div className="px-[35px] mx-auto py-[80px] grid grid-cols-2 gap-3">
        <div className="border h-[612px]  rounded-xl overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23985.317776691176!2d69.20951579999999!3d41.283519350000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8a4758a84dc7%3A0xd5e59538910cd043!2sGafur%20Gulyam%20Recreation%20Park!5e0!3m2!1sen!2s!4v1719390343527!5m2!1sen!2s"
            style={{ width: "100%", height: "100%" }}
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="bg-[#fff] p-[50px] flex flex-col justify-between rounded-xl">
          <div className="">
            <h3 className="text-[30px] text-[#202020]">Остались вопросы?</h3>
            <p className="text-[16px] w-[420px] text-[#7A7687] py-[20px]">
              Задайте их по номеру телефона +7 (495) 000-00-00 или оставьте свои
              координаты и наш менеджер перезвонит вам через 10 минут
            </p>
            <div className=" flex flex-col gap-3">
              <input
                type="text"
                placeholder="Ваше имя"
                className="border-b py-2 outline-none w-full"
              />
              <input
                type="text"
                placeholder="Ваш телефон"
                className="border-b py-2 outline-none w-full"
              />
              <input
                type="text"
                placeholder="Ваш email"
                className="border-b py-2 outline-none w-full"
              />
              <textarea
                type="text"
                placeholder="Ваш вопрос"
                className="border-b py-2 outline-none w-full resize-none h-[100px]"
              />
            </div>
          </div>
          <div className="flex gap-6 items-center">
            <span>
              <button className="text-[#fff] px-4 py-2 bg-[#088269] rounded-full">
                Отправить
              </button>
            </span>
            <p className="text-[12px] text-[#202020]">
              Нажимая «Отправить», я соглашаюсь c обработкой персональных данных
              на условиях{" "}
              <span className="text-[#088269] text-[12px] font-medium leading-[normal]">
                Политики конфиденциальности.
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vopros;
