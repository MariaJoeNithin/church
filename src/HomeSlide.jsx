import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "./Swiperstyles.css";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { Pagination, Autoplay, EffectCoverflow } from "swiper/modules";


import image1 from "./Assets/images/0E7A9537.jpg";
import image2 from '../../bethel/src/Assets/images/0E7A9583.jpg'
import logo from '../../bethel/src/Assets/images/church logo.png'
const HomeSlide = () => {
  const imgSrc = [image1,image2];

  const movie = Array.from({ length: 22 }, () => "hi"); // Generating an array of "hi" to match the length of your movie array

  return (
    <>
    
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        spaceBetween={30}
        slidesPerView={1}
        // slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 20,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        loop={true}
        modules={[Autoplay, Pagination, EffectCoverflow]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        // navigation={true}
        className=" max-h-[100vh] overflow-hidden relative"
      >
        <div className="slider max-h-[80vh] absolute w-full h-full top-0 left-0"></div>
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
          <h1 className="text-4xl font-bold text-black z-30 text-center">
            COME AS YOU ARE 
          </h1>
      </div>
          
        {imgSrc.map((item, index) => (
          <SwiperSlide
            key={index}
            className="h-full w-full object-cover object-bottom"
          >
            <img
              src={item}
              alt={`image${index}`}
              className="h-full w-full object-cover object-bottom"
            />
          </SwiperSlide>
        ))}
      </Swiper>
<div className="absolute w-20 h-20 top-5 center z-30">
  <img src={logo} alt="" />
</div>
    </>
  );
};

export default HomeSlide;
