import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "./Swiperstyles.css";
// import { FaLongArrowAltLeft } from "react-icons/fa";
import { Pagination, Autoplay, EffectCoverflow } from "swiper/modules";

import image1 from "./Assets/images/0E7A9537.jpg";
import image2 from "./Assets/images/0E7A9583.jpg";
const HomeSlide = () => {
  const imgSrc = [image1, image2];

  return (
    <>
      {/* navbar */}
      <div className="relative">
        <div className=" max-h-[100vh] min-h-[100vh] overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center z-50 ">
            <h1 className="lg:text-6xl text-3xl sm:text-4xl font-bold flex flex-col justify-center items-center gap-5 text-white mt-36 text-center">
              <span className="tracking-widest "> COME AS YOU ARE</span>
              <div className=" text-lg ">Sunday 7.30</div>
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
                  alt={`imageNo${index}`}
                  className="h-full w-full object-cover object-bottom imageSlider min-h-[100vh]"
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
