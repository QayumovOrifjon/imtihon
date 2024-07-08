import React, { useState } from 'react';
import Tovar from '../components/Hero/Tovar';
import Carousel from '../ui/Carousel';
import { aksiya } from '../Data/data';

const Func = () => {
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
    <div>
      <Carousel items={sortedData} />
      <Tovar setSort={setSort} />
    </div>
  );
};

export default Func;
