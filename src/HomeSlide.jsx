import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "./Swiperstyles.css";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { Pagination, Autoplay, EffectCoverflow } from "swiper/modules";

import image1 from "./Assets/images/0E7A9537.jpg";
import image2 from "../../bethel/src/Assets/images/0E7A9583.jpg";
import { Link } from "react-router-dom";
const HomeSlide = () => {
  const imgSrc = [image1, image2];

  const movie = Array.from({ length: 22 }, () => "hi"); // Generating an array of "hi" to match the length of your movie array

  return (
    <>
    {/* navbar */}
    <div className="relative">


    <div className="flex justify-between w-full h-fit bg-transparent bg-black backdrop-blur-xl opacity-0.1 absolute  top-0 z-50  ">
        <div className="logo">LOGO</div>
        <div className="nav text-white font-bold text-center  ">
        <Link to="/imNew" className="mx-5">Im New</Link>
        <Link to="/Events" className="mx-5">Events</Link>
        <Link to="/about" className="mx-5">About</Link>
        <Link to="/" className="mx-5">Home</Link>
        <Link to="/Ministries" className="mx-5">Ministries</Link>
        <Link to="/Membership" className="mx-5">Membership</Link>
        <Link to="/give" className="mx-5">Give </Link>
        </div>
      </div>



      <div className=" max-h-[100vh] min-h-[100vh] overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center z-50 ">
          <h1 className="lg:text-6xl text-3xl sm:text-4xl font-bold flex flex-col justify-center items-center gap-5 text-white mt-36 text-center">
            <span className="tracking-widest "> COME AS YOU ARE</span>
            <h3 className=" text-lg ">Sunday 7.30</h3>
          </h1> 
        </div>
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
          className="h-full w-full max-h-[100vh] min-h-[100vh]"
          loop={true}
          modules={[Autoplay, Pagination, EffectCoverflow]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          // navigation={true}
        >
          {imgSrc.map((item, index) => (
            <SwiperSlide
              key={index}
              className="h-full w-full object-cover object-bottom relative imageSlider"
            >
              <img
                src={item}
                alt={`image${index}`}
                className="h-full w-full object-cover object-bottom imageSlider "
                width="100%"
                height="100%"
              />
              <div className="slider absolute w-full h-full  top-0 left-0 z-50"></div>
</SwiperSlide>
))}
</Swiper>
</div>

      </div>
    </>
  );
};

export default HomeSlide;
