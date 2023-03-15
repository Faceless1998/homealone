import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import video from "./../../assets/nan1.mp4";

import SwiperCore, { Pagination, Navigation } from "swiper/core";
SwiperCore.use([Pagination, Navigation]);

export const BannerCarousel = () => {

  const Banners = [{ id: 1, img: video, name: "banner1" }];

  const RenderBanners = () => {
    return (
      <>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          className="mySwiper"
        >
          {Banners.map((el, index) => {
            return (
              <SwiperSlide key={el.img + el.id + index}>
                <video
                  style={{ borderTop: "3px solid #30343C" }}
                  id="mainvideo"
                  className="video-container"
                  autoPlay
                  loop
                  muted
                >
                  <source src={el.img} type="video/mp4" />
                </video>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </>
    );
  };
  return (
    <>
      <RenderBanners />
    </>
  );
};
