import React from "react";
import img1 from "../../../public/assets/category1.png";
import img2 from "../../../public/assets/category2.png";
import img3 from "../../../public/assets/category3.png";
import img4 from "../../../public/assets/category4.png";
import img5 from "../../../public/assets/category5.png";
import img6 from "../../../public/assets/category6.png";
import img7 from "../../../public/assets/category7.png";


const Category = () => {
  return (
    <div className="container">
      <div className="">
        <h2 className="text-[30px] py-[20px]">Популярные категории</h2>
        <div className="grid grid-cols-4 mx-auto">
          <div className="flex flex-col gap-10">
            <div className="w-[330px]   border-[1px] overflow-hidden rounded-lg ">
              <div className="h-[220px] bg-white  flex  items-center flex-col object-contain justify-center">
                <img src={img1} alt="s" />
              </div>
              <h2 className="p-[20px] text-[#202020] text-[18px]">
                Дерматологическое оборудование
              </h2>
            </div>
            <div className="w-[330px]   border-[1px] overflow-hidden rounded-lg ">
              <div className="h-[220px] bg-white  flex  items-center flex-col justify-center">
                <img src={img2} alt="s" />
              </div>
              <h2 className="p-[20px] text-[#202020] text-[18px]">
                Ветеринарное оборудование
              </h2>
            </div>
          </div>
          <div className="">
            <div className="w-[330px]   border-[1px] overflow-hidden rounded-lg ">
              <div className="h-[550px] bg-white  flex  items-center flex-col justify-center">
                <img src={img7} alt="s" />
              </div>
              <h2 className="p-[20px] text-[#202020] text-[18px]">
                Дерматологическое оборудование
              </h2>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="w-[330px]   border-[1px] overflow-hidden rounded-lg ">
              <div className="h-[220px] bg-white  flex  items-center flex-col justify-center">
                <img src={img3} alt="s" />
              </div>
              <h2 className="p-[20px] text-[#202020] text-[18px]">
                Оборудование для анастезиологии
              </h2>
            </div>
            <div className="w-[330px]   border-[1px] overflow-hidden rounded-lg ">
              <div className="h-[220px] bg-white  flex  items-center flex-col justify-center">
                <img src={img4} alt="s" />
              </div>
              <h2 className="p-[20px] text-[#202020] text-[18px]">
                Оборудование для анастезиологии
              </h2>
            </div>
          </div>{" "}
          <div className="flex flex-col gap-10">
            <div className="w-[325px]   border-[1px] overflow-hidden rounded-lg ">
              <div className="h-[220px] bg-white  flex  items-center flex-col justify-center object-contain ">
                <img src={img5} alt="s" />
              </div>
              <h2 className="p-[20px] text-[#202020] text-[18px]">
                Мебель для медецинских целей
              </h2>
            </div>
            <div className="w-[330px]   border-[1px] overflow-hidden rounded-lg ">
              <div className="h-[220px] bg-white  flex  items-center flex-col justify-center">
                <img src={img6} alt="s" />
              </div>
              <h2 className="p-[20px] text-[#202020] text-[18px]">
                Дерматологическое оборудование
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
