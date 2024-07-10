import React from 'react'
import {  ButtTel } from '../../ui/Button'

const Email = () => {
  return (
    
    <div className='bg-[#e5e4ed] '>
        <div className='container'>
        <div className='grid email justify-center sm:justify-end '>  
              <div className='pt-[35px]'>
                <p className='text-[#202020] text-[30px] font-medium leading-[120%]'>Подпишитесь и будьте в курсе!</p>
                <p className=' text-[#7A7687] font-medium text-[12px] md:text-[14px] lg:text-[16px] pt-[10px] mb-[30px] lg:pt-[20px] lg:mb-[45px] '>Акции, скидки, распродажи ждут!</p>
                <div className='flex rounded-full bg-white border border-[#D5D1E1] overflow-hidden justify-between mb-[14px] '>
                  <input type="text" name="" id="" className=' sm:grow outline-none px-5 ' placeholder='Введите email' />
                  <ButtTel title={"Подписаться"}/>
                </div>
                <div className='flex gap-[10px] items-center mb-[37px] '>
                  <input type="checkbox" name="" id="subs" className='w-4  h-4  accent-[#088269] ' />
                  <label htmlFor="subs" className='text-[12px] '> Я даю согласие на обработку своих персональных данных.</label>
                </div>
              </div>
        </div>
        </div>
    </div>
  )
}

export default Email