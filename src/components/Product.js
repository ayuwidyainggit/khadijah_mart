import React from "react";
import categori from "../assets/traditional-medicine.png";
import brushLine from "../assets/brush-line.png";

const Product = () => {
  return (
    <div className="pb-[50px] relative top-16">
      <div className=" relative w-[80%] left-[10%] grid grid-cols-1 md:grid-cols-4 gap-5 place-items-center">
        <div className=" relative w-[250px] hover:static hover:w-[280px] hover:h-[330px] h-[300px] rounded-md bg-white drop-shadow-lg">
          <img
            src={categori}
            alt=""
            className="w-[100px] relative left-[75px] top-8"
          />
          <div className="relative top-[3rem]">
            <p className="relative  ">Category 1</p>
            <p className="relative  ">Category 1</p>
            <p className="relative  ">Category 1</p>
          </div>
        </div>
        <div className=" relative w-[250px] hover:static hover:w-[280px] hover:h-[330px] h-[300px] rounded-md bg-white drop-shadow-lg">
          <img
            src={categori}
            alt=""
            className="w-[100px] relative left-[75px] top-8"
          />
          <div className="relative top-[3rem]">
            <p className="relative  ">Category 1</p>
            <p className="relative  ">Category 1</p>
            <p className="relative  ">Category 1</p>
          </div>
        </div>
        <div className=" relative w-[250px] hover:static hover:w-[280px] hover:h-[330px] h-[300px] rounded-md bg-white drop-shadow-lg">
          <img
            src={categori}
            alt=""
            className="w-[100px] relative left-[75px] top-8"
          />
          <div className="relative top-[3rem]">
            <p className="relative  ">Category 1</p>
            <p className="relative  ">Category 1</p>
            <p className="relative  ">Category 1</p>
          </div>
        </div>
        <div className=" relative w-[250px] hover:static hover:w-[280px] hover:h-[330px] h-[300px] rounded-md bg-white drop-shadow-lg">
          <img
            src={categori}
            alt=""
            className="w-[100px] relative left-[75px] top-8"
          />
          <div className="relative top-[3rem]">
            <p className="relative  ">Category 1</p>
            <p className="relative  ">Category 1</p>
            <p className="relative  ">Category 1</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
