import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

import "../../index.css";
import "./Carousel.css";

// import required modules
import { EffectCube, Pagination } from "swiper";

export default function Carousel() {
  return (
    <>
      <Swiper
        effect={"cube"}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={true}
        modules={[EffectCube, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            style={{ width: "700px" }}
            src="https://istore.kg/media/products/iphone-13-pro-max-green-select.webp"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            style={{ width: "700px" }}
            src="https://www.myphone.kg/files/media/14/14093.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            style={{ width: "700px" }}
            src="https://www.istore.kg/media/products/Pro-16-M1-SP-US-1_RGWcLBN.webp"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            style={{ width: "700px" }}
            src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ipad-pro-11-select-wifi-silver-202104_FMT_WHH?wid=1945&hei=2000&fmt=jpeg&qlt=95&.v=1617126626000"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
