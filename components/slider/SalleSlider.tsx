"use client";
import React from "react";
import ProductCard from "../mainComponents/productWidgets/Card";
import SaleCardDetail from "../mainComponents/productWidgets/SaleCardDetail";
import { Swiper, SwiperSlide } from "swiper/react";
//////////import reducer cart
import { useSelector } from "react-redux";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import { Product } from "../mainComponents/productWidgets/Types";
const SaleSlider = () => {
  const productList: Product[] = useSelector(
    (state: { cart: { productList: Product[] } }) => state.cart.productList
  );

  return (
    <div className="border-2 w-[80%] ml-auto">
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        loop={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        // navigation={true}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {productList.map((item, i) => (
          <SwiperSlide key={i}>
            <div
              className="relative card w-full border-2   hover:shadow-xl p-4 transition"
              key={item.id}
            >
              <div className="absolute z-30 top-4 left-5 bg-red-500 text-white px-2 py-3 rounded-full text-sm ">
                20%
              </div>
              <ProductCard product={item} />
              <SaleCardDetail product={item} />
            </div>{" "}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SaleSlider;
