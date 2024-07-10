import React, { useState } from 'react';
import Carousel from '../../ui/Carousel';
import { ButtSte, ButtTel } from '../../ui/Button';
import { aksiya } from '../../Data/data';
import Text from '../../ui/Text';

const Tovar = ({text='Каталог товаров'}) => {
  const [sort, setSort] = useState('');



  const sortTovar = () => {
    if (sort === '') {
      return aksiya;
    } else if (sort === 'Хит продаж') {
      return aksiya.filter((item) => item.status === 'Хит продаж');
    } else if (sort === 'Новинка') {
      return aksiya.filter((item) => item.status === 'Новинка');
    } else if (sort === 'Акции') {
      return aksiya.filter((item) => item.status === '-30%');
    }
  };

  const sortedData = sortTovar();


  return (
    <div className="container grid grid-cols-1 lg:grid-cols-[1fr_3fr] overflow-hidden mb-[60px] md:mb-[120px] lg:mb-[150px]">
      <div className="mb-[23px] md:mb-[19px] lg:mb-[0px]">
        <div className="mb-[25px] md:mb-[35px] lg:mb-[40px] flex justify-between">
          <p className='text-[18px] md:text-[20px] lg:text-[30px] font-medium leading-[120%] text-[#202020]'><Text text={text}/></p>
          <div className="hidden sm:flex lg:hidden gap-4">
            <ButtSte title='Бесплатная консультация' />
            <ButtTel title='Все товары' />
          </div>
        </div>
        <div className="flex lg:flex-col gap-[15px]">
          <span className="text-[12px] md:text-[14px] opacity-50 lg:text-[16px] font-medium leading-[118%] lg:leading-[140%]" onClick={() => setSort('Хит продаж')}>
            Хиты продаж
          </span>
          <span className="text-[12px] md:text-[14px] opacity-50 lg:text-[16px] font-medium leading-[118%] lg:leading-[140%]" onClick={() => setSort('Новинка')}>
            Новинки
          </span>
          <span className="text-[12px] md:text-[14px] opacity-50 lg:text-[16px] font-medium leading-[118%] lg:leading-[140%]" onClick={() => setSort('Акции')}>
            Акции
          </span>
        </div>
      </div>
      <div className="overflow-hidden">
        <Carousel carousel={sortedData}/>
      </div>
    </div>
  );
};

export default Tovar;
