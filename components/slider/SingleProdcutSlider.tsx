"use client";
import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
/////////////impot type
import { Product } from "../mainComponents/productWidgets/Types";
// Import Redux
import { useSelector } from "react-redux";
// Import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

const SingleProductSlider = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const productList: Product[] = useSelector(
    (state: { cart: { productList: Product[] } }) => state.cart.productList
  );

  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {productList.map((item, i) => (
          <SwiperSlide key={i}>
            <img src={item.image} alt={`Product ${i}`} />
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {productList.map((item, i) => (
          <SwiperSlide key={i}>
            <img src={item.image} alt={`Thumbnail ${i}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default SingleProductSlider;
