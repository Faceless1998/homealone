import React from "react";

import image1 from "./product-img-1.jpeg";
import image2 from "./product-img-2.png";
import image3 from "./product-img-3.jpeg";
import image4 from "./product-img-4.png";

import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Pagination, Navigation } from "swiper";

import "./topproducts.css";
import { NavLink } from "react-router-dom";
export const Topproducts = () => {
  return (
    <>
      <div className="single-div" style={{ marginTop: 10 }}>
        <h1
          className="abouttitlewidth2 marginizer  font-bold leading-tight text-center colorizer"
          style={{ textTransform: "capitalize" }}
        >
          Top Products
        </h1>
      </div>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <div className="grid-containerTop">
          <SwiperSlide>
            <div>
              <NavLink to="/about">
                <img src={image1} alt="" className="imagertop" />
              </NavLink>
              <p>Name</p>
              <span>Description</span>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div>
              <img src={image2} alt="" className="imagertop" />
              <p>Name</p>
              <span>Description</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={image3} alt="" className="imagertop" />
              <p>Name</p>
              <span>Description</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={image4} alt="" className="imagertop" />
              <p>Name</p>
              <span>Description</span>
            </div>
          </SwiperSlide>
        </div>
      </Swiper>
    </>
  );
};
