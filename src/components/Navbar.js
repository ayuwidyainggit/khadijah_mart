import React, { useState, useContext } from "react";
import cart_img from "../assets/shopping-cart.png";
import { GlobalContext } from "../context/GlobalContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { navbar, setNavbar } = useContext(GlobalContext);
  return (
    <div className="shadow-md w-full md:w-[80%] md:left-[10%] md:top-[110px] fixed md:absolute  md:top-0 md:left-0 z-10">
      <div className="flex  items-center justify-between  bg-white py-4 md:px-10 md:px-5  h-[100px]  ">
        <div className="md:hidden flex justify-center items-center  w-[30%]   ">
          <button
            onClick={() => setNavbar(!navbar)}
            className="z-20 relative  flex flex-col justify-center  items-center w-[40px] h-[40px] cursor-pointer bg-transparent"
          >
            <span className="w-[25px] h-[3px] bg-[#78b144] mb-[5px]"></span>
            <span className="w-[25px] h-[3px] bg-[#78b144] mb-[5px]"></span>
            <span className="w-[25px] h-[3px] bg-[#78b144] mb-[5px]"></span>
          </button>
        </div>
        <ul
          className={` text-[#78b144] drop-shadow-xl md:drop-shadow-none md:flex md:justify-between items-center absolute md:static bg-white md:relative w-[40%] md:w-[30%] -md:right-[20%] h-[100vh] md:h-[100px] top-0 transition-all duration-500 ease-in ${
            navbar ? "left-0" : "left-[-290px] md:left-0"
          }`}
        >
          <div>
            <li className="md:hover:underline cursor-pointer font-bold text-[2.6rem] md:text-[1rem] text-center border-[#78b144] md:hover:bg-transparent   hover:text-white md:hover:text-[#78b144] h-[70px] flex justify-center items-center border-dashed border-b  md:border-none"></li>
          </div>
          <div>
            <Link to="/product">
              <li className="md:hover:underline cursor-pointer md:hover:text-[#78b144]  border-[#78b144] md:text-[1rem] hover:bg-[#78b144] md:hover:bg-transparent hover:text-white  h-[100px] flex items-center border-dashed border-b pl-[55px] md:pl-0 md:border-none">
                Product
              </li>
            </Link>
          </div>
          <div>
            <li className="md:hover:underline cursor-pointer md:hover:text-[#78b144]  border-[#78b144] md:text-[1rem] hover:bg-[#78b144] md:hover:bg-transparent hover:text-white  h-[100px] flex items-center border-dashed border-b pl-[55px] md:pl-0 md:border-none">
              Contact
            </li>
          </div>
          <div>
            <li className="md:hover:underline cursor-pointer md:hover:text-[#78b144]  border-[#78b144] md:text-[1rem] hover:bg-[#78b144] md:hover:bg-transparent hover:text-white  h-[100px] flex items-center border-dashed border-b pl-[55px] md:pl-0 md:border-none">
              Login
            </li>
          </div>
        </ul>
        <div className=" cursor-pointer flex item-center font-[Poppins] justify-center  w-[200px] md:h-[200px] md:rounded-full md:flex md:items-center md:bg-white">
          <p className="font-bold text-[2.6rem] text-[#78b144]">SHOP</p>
        </div>
        <div className=" w-[30%] flex md:justify-end justify-center ">
          <img src={cart_img} alt="" className="md:w-[50px] w-[30px] " />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
