import React, { useEffect, useState } from "react";
import { VscSettings } from "react-icons/vsc";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ButtCat, ButtSte, ButtTel } from "../../ui/Button";
import { IoChevronDownOutline } from "react-icons/io5";
import { aksiya, MenuNap, StraneNap } from "../../Data/data";
import PaginationComp from "../../ui/Pagination";
import { LuBarChartHorizontalBig } from "react-icons/lu";
import { GoHeart } from "react-icons/go";
import PriceSlider from "../../ui/Slider";
import { RxHamburgerMenu } from "react-icons/rx";
import { GrAppsRounded } from "react-icons/gr";
import Select from "react-select";
import { setCards } from "../../reducers/card";
import { useDispatch } from "react-redux";


const ProCategory = () => {
  const productPage = 9;
  const [nav, setNav] = useState(false);
  const [value, setValue] = useState("Направления");
  const [strane, setStrane] = useState(false);
  const [sos, setSos] = useState(true);
  const [sortedProducts, setSortedProducts] = useState(aksiya);
  const [sortValue, setSortValue] = useState("");

  const breadcast = () => {
    navigate("/");
  };
  const dispatch = useDispatch();



  const handleCartClick = (e, item) => {
    e.stopPropagation();
    dispatch(setCards(item));
  };  

 

  const Status = (status) => {
    switch (status) {
      case "Новинка":
        return {
          backgroundColor: "#E1EFE6",
          color: "#088269",
          borderColor: "#088269",
        };
      case "Хит продаж":
        return {
          backgroundColor: "#E6E6FD",
          color: "#424285",
          borderColor: "#424285",
        };
      case "-30%":
        return {
          backgroundColor: "#FFE095",
          color: "#AD7B00",
          borderColor: "#AD7B00",
        };
      default:
        return {
          backgroundColor: "#FFFFFF",
          color: "inherit",
          borderColor: "transparent",
        };
    }
  };

  const Place = () => {
    if (nav && strane) {
      return { top: "730px" };
    } else if (nav) {
      return { top: "50px" };
    } else if (strane) {
      return { top: "730px" };
    } else {
      return { top: "50px" };
    }
  };

  const customStyles = {
    control: (provided) => ({
      ...provided,
      backgroundColor: "transparent", // Select ning fonini transparent qilish
      border: "none", // Chegarani olib tashlash
      boxShadow: "none", // So'yani olib tashlash
      cursor: "pointer", // Kursorni pointer qilish
      width: "250px", // Select kengligi
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "black",
      fontSize: "14px",
      fontWeight: "normal",
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      color: "black",
      "&:hover": {
        color: "black",
      },
    }),
    indicatorSeparator: () => ({
      display: "none",
    }),
    menu: (provided) => ({
      ...provided,
      width: "250px", // Dropdown menyuning kengligi
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused
        ? "#088269"
        : state.isSelected
        ? "#088269"
        : "white",
      color: state.isFocused ? "white" : state.isSelected ? "white" : "black",
      cursor: "pointer",
      "&:hover": {
        backgroundColor: "#E1EFE6",
        color: "white",
      },
    }),
  };

  const options = [
    { value: "popularity", label: "По популярности" },
    { value: "price", label: "По цене" },
    { value: "name", label: "По наименованию" },
    { value: "new", label: "По новинкам" },
  ];

  const handleSortChange = (selectedOption) => {
    setSortValue(selectedOption.value);
  };

  useEffect(() => {
    let sortedData = [...aksiya];

    switch (sortValue) {
      case "price":
        sortedData.sort((a, b) => b.price - a.price);
        break;
      case "name":
        sortedData.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "new":
        sortedData = aksiya.filter((item) => item.status === "Новинка");
        break;
      default:
        break;
    }

    setSortedProducts(sortedData);
  }, [sortValue]);

  const renderProiz = (Items) => (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-[10px]">
      {Items.map((item) => (
        <div
          key={item.number}
          className="rounded-[10px] w-full border border-[#E5E2EE] overflow-hidden"
        >
          <div className="bg-white p-[10px] md:p-[30px] lg:p-[50px] relative mb-[15px] lg:mb-[20px] flex justify-center items-center border-b border-[#E5E2EE]">
            <img
              src={item.img}
              alt="image"
              className="w-full object-contain h-[172px] md:h-[142px] lg:h-[229px]"
            />
            <span
              style={Status(item.status)}
              className={`absolute top-[15px] left-[15px] text-[#088269] text-[12px] lg:text-[14px] font-semibold leading-[normal] border border-[#088269] py-1 px-[10px] rounded-full`}
            >
              {item.status}
            </span>
            <div className="flex items-center gap-[10px] absolute top-[15px] right-[15px]">
              <LuBarChartHorizontalBig className="w-6 h-6 rotate-[-90deg] hover:text-[#088269] duration-200 cursor-pointer" />
              <div>
                <GoHeart className="w-6 h-6 duration-200 cursor-pointer hover:text-[#088269]" />
              </div>
            </div>
          </div>
          <div className="flex flex-col px-[15px] pb-[10px] lg:pb-[15px]">
            <div className="flex flex-col mb-[15px]">
              <p className="text-[16px] lg:text-[18px] w-[80%] font-semibold leading-[normal] mb-[10px]">
                {item.title}
              </p>
              <span className="text-[12px] font-normal leading-[normal] text-[--text] mb-1">
                Артикул: {item.number}
              </span>
              <span className="text-[12px] font-normal leading-[normal] text-[--text]">
                {item.pay ? "В наличии" : "нет в наличии"}
              </span>
              <p className="mt-[15px] lg:mt-[30px] text-[16px] lg:text-[18px] font-semibold leading-[normal] text-[--second]">
                {item.price} руб.
              </p>
            </div>
            <button
            
              onClick={(e) => handleCartClick(e, item)}
              className="text-[12px] py-2 lg:py-[11px] px-[20px] lg:px-[30px] border border-[#088269] hover:bg-[#088269] hover:text-white text-[#088269] rounded-full font-semibold hover:border-[#07745E] duration-200"
            >
              Добавить в корзину
            </button>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <>
  

   

      <div className="  flex gap-[5px] items-center   mt-[20px] mb-[25px] container">
        <button className="whitespace-nowrap text-[12px] lg:text-[14px] bg-white rounded-full border border-[#E5E2EE] py-3 px-8 hover:border-[#088269] hover:text-[#088269] duration-300 ">
          Дерматологическое оборудование
        </button>
        <button className="whitespace-nowrap text-[12px] lg:text-[14px] bg-white rounded-full border border-[#E5E2EE] py-3 px-8 hover:border-[#088269] hover:text-[#088269] duration-300 ">
          Ветеринарное оборудование
        </button>
        <button className="whitespace-nowrap text-[12px] lg:text-[14px] bg-white rounded-full border border-[#E5E2EE] py-3 px-8 hover:border-[#088269] hover:text-[#088269] duration-300 ">
          Мебель медицинская
        </button>
        <button className="whitespace-nowrap text-[12px] lg:text-[14px] bg-white rounded-full border border-[#E5E2EE] py-3 px-8 hover:border-[#088269] hover:text-[#088269] duration-300 ">
          Ветеринарное оборудование
        </button>
        <ButtCat title={"Показать больше"} />
      </div>

      <div className="mt-[20px] container grid grid-cols-1 md:grid-cols-[1fr_3fr] justify-between gap-[10px] mb-[150px]">
        <div className="relative">
          <div
            onClick={() => setNav((next) => !next)}
            className="relative border text-center cursor-pointer gap-1 flex justify-center md:justify-between  py-[15px] px-[20px] rounded-[10px] "
          >
            <VscSettings className="w-10 h-10 md:hidden" />
            <p className="text-[16px] font-medium leading-[140%]">{value}</p>
            <IoChevronDownOutline
              className={`${
                nav ? "rotate-180" : ""
              } w-10 h-3 duration-300 hidden md:block`}
            />

            <div
              className={`${
                nav
                  ? "flex flex-col absolute duration-200 top-[55px] rounded-lg gap-y-3 border p-5 gap-2 w-full left-0"
                  : "hidden"
              }`}
            >
              {MenuNap.map((list, index) => (
                <div
                  key={index}
                  onClick={() => setValue(list)}
                  className={`text-[12px] flex justify-between items-center hover:text-[#088269] duration-200 hover:underline hover:scale-105`}
                >
                  {list}
                  <IoChevronDownOutline
                    className={`rotate-[-90deg] w-[17px] h-[17px]`}
                  />
                </div>
              ))}
            </div>
          </div>

          <div
            className={`${
              nav ? "top-[470px]" : null
            } hidden md:block absolute z-0 w-full mt-[10px] border border-[#E5E2EE] py-[15px] px-[20px] rounded-[10px] bg-[#F8F7F3]`}
          >
            <div
              onClick={() => setStrane((prev) => !prev)}
              className="relative text-center cursor-pointer gap-1  justify-center md:justify-between rounded-[10px] "
            >
              <p className="flex justify-between items-center text-[16px] font-medium leading-[140%]">
                Фильтр по товарам
                <IoChevronDownOutline
                  className={`${
                    strane ? "rotate-180" : ""
                  } w-10 h-3 duration-300 hidden md:block`}
                />
              </p>

              <div
                onClick={(e) => e.stopPropagation()}
                className={`${strane ? "block " : "hidden"} `}
              >
                <hr className="mt-4 mb-6" />
                <PriceSlider />
                <p className="text-[14px] font-medium leading-[118%] flex justify-between items-center mt-[35px]">
                  Страна
                </p>
                <label className="mt-[15px] mb-[12px] bg-white text-[14px] flex justify-between items-center gap-1 border border-[#E5E2EE] rounded-full px-[20px] py-[10px]">
                  <input
                    type="text"
                    className="w-full outline-none"
                    placeholder="Поиск по стране"
                  />
                  <FaSearch className="text-[#7A7687]" />
                </label>
                <div className="flex flex-col gap-2 ">
                  {StraneNap.map((item) => (
                    <label
                      htmlFor={item.id}
                      key={item.id}
                      className="flex items-center gap-[10px]"
                    >
                      <input
                        type="checkbox"
                        name={item.id}
                        id={item.id}
                        className="accent-[#088269]"
                      />
                      {item.title}
                    </label>
                  ))}
                </div>

                <div onClick={() => setSos((prev) => !prev)}>
                  <p className="flex justify-between items-center text-[16px] font-medium leading-[140%] mb-4 mt-9">
                    Состояние
                    <IoChevronDownOutline
                      className={`${
                        sos ? "rotate-180" : ""
                      } w-10 h-3 duration-300 hidden md:block`}
                    />
                  </p>

                  <div
                    onClick={(e) => e.stopPropagation()}
                    className={`${sos ? "block " : "hidden"} `}
                  >
                    <label className="flex items-center gap-[10px]">
                      <input type="checkbox" className="accent-[#088269]" />
                      Новый
                    </label>
                  </div>
                </div>
              </div>
              <div
                style={Place()}
                className="absolute left-0 gap-[10px] items-center hidden md:flex"
              >
                <ButtSte title={"Сбросить"} />
                <ButtTel title={"Показать"} />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="py-3 px-5 border border-[#E5E2EE] rounded-lg mb-2 flex justify-between">
            <Select
              onChange={handleSortChange}
              options={options}
              styles={customStyles}
              defaultValue={options[0]}
            />
            <div className="flex items-center gap-3">
              <RxHamburgerMenu />
              <GrAppsRounded className="text-[#088269] " />
            </div>
          </div>
          <PaginationComp
            product={sortedProducts}
            productPage={productPage}
            renderProduct={renderProiz}
          />
        </div>
      </div>
   
    </>
  );
};

export default ProCategory;
