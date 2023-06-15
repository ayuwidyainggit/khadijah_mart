import React from "react";
import categori from "../assets/traditional-medicine.png";
import brushLine from "../assets/brush-line.png";

const CategoryProduct = () => {
  return (
    <div className="h-full relative mt-8 ">
      <div className=" w-[80%] relative left-[10%] md:h-[100px] h-[150px] mt-8 ">
        <p className="font-bold text-[2rem] text-[#78b144]">Categories</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt non
          labore culpa eligendi, quia dolore nemo perferendis sint?
        </p>
      </div>
      <div className=" relative w-[60%] left-[20%] grid grid-cols-3 md:grid-cols-5 gap-5 place-items-center">
        {/* <div className="border relative border-red-500 w-[100px] ">
          <img src={categori} alt="" className="w-[60px] relative left-[20%]" />
          <div
            className="hover:bg-cover "
            style={{
              backgroundImage: `url(${brushLine} background: none) `,
            }}
          >
            <p className="relative z-10">jjj</p>
          </div>
        </div> */}
        <div className=" relative w-[100px] ">
          <img src={categori} alt="" className="w-[60px] relative left-[20%]" />
          <p className="relative ">Category 1</p>
          <img
            src={brushLine}
            alt=""
            className="hover:relative hover:bottom-5 hidden"
          />
        </div>
        <div className=" relative w-[100px] ">
          <img src={categori} alt="" className="w-[60px] relative left-[20%]" />
          <p className="relative ">Category 2</p>
          <img
            src={brushLine}
            alt=""
            className="hover:relative hover:bottom-5 hidden"
          />
        </div>
        <div className=" relative w-[100px] ">
          <img src={categori} alt="" className="w-[60px] relative left-[20%]" />
          <p className="relative ">Category 3</p>
          <img
            src={brushLine}
            alt=""
            className="hover:relative hover:bottom-5 hidden"
          />
        </div>
        <div className=" relative w-[100px] ">
          <img src={categori} alt="" className="w-[60px] relative left-[20%]" />
          <p className="relative ">Category 4</p>
          <img
            src={brushLine}
            alt=""
            className="hover:relative hover:bottom-5 hidden"
          />
        </div>
        <div className=" relative w-[100px] ">
          <img src={categori} alt="" className="w-[60px] relative left-[20%]" />
          <p className="relative z-10">Category 5</p>
          <img
            src={brushLine}
            alt=""
            className="hover:relative hover:bottom-5 hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default CategoryProduct;
