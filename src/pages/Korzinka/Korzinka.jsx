import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'; 

import { ButtSte, ButtTel } from '../../ui/Button';
import { useNavigate } from 'react-router-dom';
import { IoCloseSharp } from 'react-icons/io5';
import { FaMinus } from 'react-icons/fa6';
import { LuBarChartHorizontalBig } from 'react-icons/lu';
import { GoHeart, GoHeartFill } from 'react-icons/go';
import { decrement, handlePrice, handleRemove, increment, setWishlist } from '../../reducers/card';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer.jsx/Footer';


const Korzinka = () => {
    const { cards, totalPrice } = useSelector((state) => state.card); // useSelector orqali state.card dan cards va totalPrice ni oling
    const dispatch = useDispatch(); 

    const navigate = useNavigate();

    const breadcast = () => {
        navigate('/')
    }

    useEffect(() => {
        dispatch(handlePrice());
      }, [cards]);

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
        <div>
            
            <div className='flex pt-5 container mt-[220px] mb-5 gap-5'>
                <p onClick={breadcast} className='text-[#7A7687] text-[14px] font-normal leading-[normal] cursor-pointer'>Главная {">"}</p> <span
                    className='text-[#202020] text-[14px] font-normal leading-[normal]'>Корзина ({cards.length})</span>
            </div>

            <div className=" container mt-[20px] lg:mt-[25px] ">
                <div className=" grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-[10px] ">
                    <div className="flex flex-col gap-[10px] ">
                        
                        {cards.map((card) => {
                            const itemTotal = card.amount * card.price;
                            return (
                                <div
                                    key={card.id}
                                    className="grid grid-cols-2 md:grid-cols-[2fr_3fr_2fr] border border-[#E5E2EE] rounded-[10px] overflow-hidden  "
                                >
                                    <div className="border-r relative h-full max-h-[267px] p-[25px] pt-[61px] bg-white">
                                        <img src={card.img} alt="" className="w-full h-full object-contain" />

                                        <span
                                              style={Status(card.status)}
                                            className={`absolute top-[15px] left-[15px] text-[12px] lg:text-[14px] font-semibold leading-[normal] border border-[#088269] py-1 px-[10px] rounded-full`}
                                        >
                                            {card.status}
                                        </span>
                                        <span
                                              onClick={() => dispatch(setWishlist(card))}
                                            className="absolute top-[11px] right-2 md:hidden"
                                        >
                                            <GoHeartFill className="w-[20px] h-[20px] lg:w-[24px] lg:h-[24px] cursor-pointer text-[#088269] hover:scale-105 duration-200" />
                                        </span>
                                    </div>

                                    <div className="flex flex-col lg:flex-row gap-[21px] justify-between py-[10px] px-[15px] md:py-[15px] md:px-[20px] lg:py-[20px] lg:px-[25px]">
                                        <div>
                                            <span className="flex justify-between">
                                                <p className="text-[14px] md:text-[16px] lg:text-[18px] font-semibold leading-normal w-[70%] mb-2">
                                                    {card.title}
                                                </p>
                                                <span className="md:hidden">
                                                    <IoCloseSharp
                                                        onClick={() => dispatch(handleRemove(card.id))}
                                                        className="w-[20px] h-[20px] lg:w-[30px] lg:h-[30px] cursor-pointer hover:text-[#088269] hover:scale-105 duration-200"
                                                    />
                                                </span>
                                            </span>
                                            <p className=" md:text-[12px] text-[#7A7687] text-[12px] font-normal leading-[normal] mb-1">
                                                Артикул: {card.element}{' '}
                                            </p>
                                            <p className=" md:text-[12px] text-[#7A7687] text-[12px] font-normal leading-[normal]">
                                                {card.isAvailable ? 'В наличии' : 'нет в наличии'}{' '}
                                            </p>
                                        </div>

                                        <div>
                                            <p className="text-[14px] md:text-[16px] lg:text-[17px] font-semibold leading-normal mb-[28px]">
                                                {itemTotal} руб.
                                            </p>
                                            <div className="flex justify-center max-w-[150px] items-center gap-[20px] text-[12px] py-2 lg:py-[8px] px-[20px] lg:px-[20px] border border-[#E5E2EE] rounded-full">
                                                <FaMinus
                                                    onClick={() => dispatch(decrement(card.id))}
                                                    className="hover:text-[#088269] cursor-pointer"
                                                />
                                                <span className="text-[16px] font-semibold text-[#088269]">
                                                    {card.amount}
                                                </span>
                                                <button
                                                    onClick={() => dispatch(increment(card.id))}
                                                    className="text-[20px] font-semibold hover:text-[#088269] cursor-pointer focus:text-[#088269]"
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="hidden md:flex justify-end gap-[6px] lg:gap-[10px] py-[10px] px-[15px] md:py-[15px] md:px-[20px] lg:py-[20px] lg:px-[25px]">
                                        <span onClick={() => dispatch(setWishlist(card))}>
                                            <GoHeart className="w-[20px] h-[20px] lg:w-[24px] lg:h-[24px] cursor-pointer hover:text-[#088269] hover:scale-105 duration-200" />
                                        </span>
                                        <LuBarChartHorizontalBig onClick={(e)=> handleCompare(e, item)} className={` w-6 h-6 rotate-[-90deg] hover:text-[#088269] duration-200 cursor-pointer`} />

                                        <IoCloseSharp
                                            onClick={() => dispatch(handleRemove(card.id))}
                                            className="w-[20px] h-[20px] lg:w-[30px] lg:h-[30px] cursor-pointer hover:text-[#088269] hover:scale-105 duration-200"
                                        />
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <div className="min-w-[236px]">
                        <div className="bg-white border border-[#E5E2EE] rounded-[10px] px-[20px] py-[15px]">
                            <span className="flex justify-between items-center pb-[15px] mb-[15px] border-b">
                                <span className="text-[14px] font-semibold leading-[normal]">Итого</span>
                                <span className="text-[14px] font-semibold leading-[normal]">{totalPrice} руб.</span>
                            </span>

                            <span className="flex justify-between items-center mb-2">
                                <span className="text-[12px] font-medium leading-[normal]">Товары ({cards.length} шт)</span>
                                <span className="text-[12px] font-medium leading-[normal]">{totalPrice} руб.</span>
                            </span>

                            <span className="flex justify-between items-center">
                                <span className="text-[12px] font-medium leading-[normal]">Скидка</span>
                                <span className="text-[12px] font-medium leading-[normal]">0 руб.</span>
                            </span>

                            <span className="flex flex-col gap-[10px] mt-[20px]">
                                <ButtTel title={'Оформить заказ'} />
                                <ButtSte title={'Задать вопрос'} />
                            </span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    <div className='mt-[150px]'>    <Footer/></div>
     </>
    );
};

export default Korzinka;
