import React from "react";
import logo from "../assets/shopping-cart.png";
import yt from "../assets/youtube.png";
import wa from "../assets/whatsapp.png";
import ig from "../assets/instagram.png";

const Footer = () => {
  return (
    <div className="  relative flex items-center mt-16 bg-[#78b144] h-[80vh] md:h-[50vh] ">
      <div className=" w-[80%]  relative left-[10%] md:flex md:justify-between ">
        <div className=" w-[100%]">
          <p className="font-bold text-[20px] text-white">Contact</p>
          <p className="text-white">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis
            earum sequi ipsam, doloribus voluptates laudantium pariatur velit
            asperiores dicta necessitatibus voluptatibus doloremque accusantium
            illo aperiam neque quis nemo mollitia totam?
          </p>
          <div className=" w-[40%] relative left-[30%] flex justify-between mt-8">
            <img src={yt} alt="" className="w-[30px]" />
            <img src={wa} alt="" className="w-[30px]" />
            <img src={ig} alt="" className="w-[30px]" />
          </div>
        </div>
        <div className=" w-[100%] mt-8 md:mt-0 relative">
          <p className="font-bold text-[20px] text-white">Page</p>
          <p className="text-white">Home</p>
          <p className="text-white">Product</p>
          <p className="text-white">Contact</p>
          <p className="text-white">404 Not Found</p>
        </div>

        <div className=" w-[100%] mt-8 md:mt-0 relative ">
          <p className="font-bold text-[20px] text-white">Ekspedisi</p>
          <div className="w-[40%] left-[30%] relative flex justify-between">
            <img src={logo} alt="" className="w-[10%]" />
            <p className="text-white">Lion Parcel</p>
          </div>
          <div className="  w-[40%] left-[30%] relative flex justify-between">
            <img src={logo} alt="" className="w-[10%]" />
            <p className="text-white"> Lion Parcel</p>
          </div>
          <div className="  w-[40%] left-[30%] relative flex justify-between">
            <img src={logo} alt="" className="w-[10%]" />
            <p className="text-white">Lion Parcel</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
