import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MdKeyboardArrowRight } from 'react-icons/md';
// import BlogArticle from '../../components/blogItems/BlogArticle';
import { blog } from '../../Data/data';
import PaginationTwo from '../../ui/Pagination';
import NapravleniyaList from '../../components/NapravleniyaList';
import { ButtTel } from '../../ui/Button';
import Email from '../../components/Email/Email';
import Footer from '../../components/Footer.jsx/Footer';

const Blog = () => {
  const navigate = useNavigate();

  const breadcast = () => {
    navigate('/')
  }


  const product = 4;

  const renderProduct = (currentItems) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-[10px] ">
      {currentItems.map((blog) => (
 <div className="grid grid-cols-1 lg:grid-cols-[3fr_5fr] border border-[#E5E2EE] rounded-[10px] ">
 <div className='rounded-[10px] overflow-hidden lg:h-[304px] '>
   <img src={blog.img} alt="" className='w-full h-[175px] lg:h-full object-cover ' />
 </div>
 <div className="flex flex-col justify-between p-[15px] lg:p-[30px] gap-[30px] md:gap-[40px] ">
   <div>
     <p className='text-[14px] md:text-[16px] lg:text-[18px] font-semibold '>Что такое инфузомат (инфузионный насос)</p>
     <p className='text-[10px] md:text-[12px] mb-[10px] md:mb-[15px] lg:mb-[25px]  '>14.03.2023</p>
     <p className=' custom-text text-[--text] '>{blog.content} </p>
   </div>
   <div>
     <ButtTel title={'Подробнее'} />
   </div>
 </div>
</div>
      ))}
    </div>
  );

  return (
    <>
     <div className='flex pt-5 px-[35px]'>
<p onClick={breadcast} className='text-[#7A7687] text-[14px] font-normal leading-[normal] cursor-pointer'>Главная {">"}</p> <span className='text-[#202020] text-[14px] font-normal leading-[normal] mb-[100px]'>Блог</span>

  
</div>

      <p className=" custom-title px-[35px]  hidden lg:block  text-[48px] font-medium leading-[110%]">Блог</p>

      <div className="px-[35px] grid lg:grid-cols-[1fr_3fr] md:pt-[25px] grid-cols-1 gap-[10px] custom-margin ">
        <NapravleniyaList />

        <div className='flex flex-col'>
        <PaginationTwo
        product={blog}
        productPage={product}
        renderProduct={renderProduct}
        />
        </div>
      </div>
 <div className='mt-[150px]'>     <Email /></div>
     <Footer/>
    </>
  );
};

export default Blog;
