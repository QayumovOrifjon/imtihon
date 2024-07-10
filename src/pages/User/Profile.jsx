import React from 'react';
import Header from '../../components/Header/Header';

const Profile = () => {
  return (

   <>
   <Header/>
   <div className="min-h-screen bg-gray-100 p-6 mt-[220px]">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center space-x-4 mb-6">
          <div className="bg-gray-200 rounded-full h-20 w-20 flex items-center justify-center text-3xl font-bold">
            K
          </div>
          <div>
            <h1 className="text-xl font-semibold">Константин Константинопольский</h1>
            <div className="flex space-x-2 mt-2">
              <i className="fab fa-twitter"></i>
              <i className="fab fa-facebook"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-linkedin"></i>
            </div>
          </div>
        </div>
        <div className="mb-4">
          <div className="flex items-center justify-between">
            <span>Телефон</span>
            <span>+7 911 564-86-86</span>
          </div>
          <div className="flex items-center justify-between">
            <span>Email</span>
            <span>person@mail.ru</span>
          </div>
        </div>
        <button className="bg-green-400 text-white py-2 px-4 rounded">Изменить персональную информацию</button>
        <button className="bg-green-400 text-white py-2 px-4 ml-2 rounded">Изменить пароль</button>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md mt-6">
        <h2 className="text-xl font-semibold mb-4">Данные о плательщике</h2>
        <div className="mb-4">
          <div className="flex items-center justify-between">
            <span>Название компании</span>
            <span>ИНН 9717039181</span>
          </div>
          <div className="flex items-center justify-between">
            <span>Адрес доставки</span>
            <span>Россия, г. Москва, ул. Докукина, 8, стр. 2</span>
          </div>
          <div className="flex items-center justify-between">
            <span>Ваш должность</span>
            <span>Менеджер по закупкам</span>
          </div>
          <div className="flex items-center justify-between">
            <span>Сайт</span>
            <span>global-mt.ru</span>
          </div>
          <div className="flex items-center justify-between">
            <span>Email</span>
            <span>info@mail.ru</span>
          </div>
        </div>
        <button className="bg-green-400 text-white py-2 px-4 rounded">Добавить плательщика</button>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md mt-6">
        <h2 className="text-xl font-semibold mb-4">История заказов</h2>
        <div className="mb-4">
          <div className="flex justify-between items-center">
            <div>
              <span className="font-semibold">Заказ № 3456-09 от 12 марта 2023</span>
              <p>2 товара на сумму 900 000 руб.</p>
            </div>
            <span className="bg-yellow-500 text-white px-2 py-1 rounded">в работе</span>
          </div>
          <ul className="mt-4 space-y-2">
            <li className="flex justify-between items-center">
              <span>Анализатор мочи MIND UA-66</span>
              <span>600 000 руб.</span>
            </li>
            <li className="flex justify-between items-center">
              <span>УЗИ аппарат Chison Qbit5 New Matrix</span>
              <span>300 000 руб.</span>
            </li>
          </ul>
        </div>
        <div className="mb-4">
          <div className="flex justify-between items-center">
            <div>
              <span className="font-semibold">Заказ № 3456-09 от 12 марта 2023</span>
              <p>2 товара на сумму 900 000 руб.</p>
            </div>
            <span className="bg-green-500 text-white px-2 py-1 rounded">доставлено</span>
          </div>
          <ul className="mt-4 space-y-2">
            <li className="flex justify-between items-center">
              <span>Анализатор мочи MIND UA-66</span>
              <span>600 000 руб.</span>
            </li>
            <li className="flex justify-between items-center">
              <span>УЗИ аппарат Chison Qbit5 New Matrix</span>
              <span>300 000 руб.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
   </>
  );
}

export default Profile;
