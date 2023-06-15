import React, { useContext } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "../components/Navbar";
import { GlobalContext } from "../context/GlobalContext";
import MainLayout from "../layouts/MainLayout";
import CategoryProduct from "../components/CategoryProduct";
import Product from "../components/Product";

const Home = () => {
  const { navbar, setNavbar } = useContext(GlobalContext);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };
  return (
    <MainLayout>
      <Navbar />
      <div className="App overflow-x-hidden ">
        <Slider {...settings}>
          <div className="slide md:h-[600px]  ">
            <img
              src="https://m.media-amazon.com/images/S/assets.wholefoodsmarket.com//content/fb/e2/32c272ba40729aa86d4e25564d9f/vegetables._TTW_._CR1,0,2278,1282_._SR1500,844_._QL100_.jpg"
              alt="Slide 1"
            />
          </div>
          <div className="slide  md:h-[600px]  ">
            <img
              src="https://www.realsimple.com/thmb/awOyS0S8hk6AdWDiMLAjfX161HA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/vegetables-in-season-GettyImages-1456403368-5b2f4b5f8fe845bda5c64df8425f4a93.jpg"
              alt="Slide 2"
            />
          </div>
          <div className="slide  md:h-[600px]  ">
            <img
              src="https://staticcookist.akamaized.net/wp-content/uploads/sites/22/2018/12/vegetables.jpg"
              alt="Slide 3"
            />
          </div>
        </Slider>
      </div>
      <CategoryProduct />
      <Product />
    </MainLayout>
  );
};

export default Home;
