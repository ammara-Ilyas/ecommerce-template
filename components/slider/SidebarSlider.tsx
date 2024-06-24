"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
/////////////imort type
import { Product } from "../mainComponents/productWidgets/Types";
//////////import reducer cart
import { useSelector } from "react-redux";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
const SidebarSlider = () => {
  const productList: Product[] = useSelector(
    (state: { cart: { productList: Product[] } }) => state.cart.productList
  );
  console.log("list", productList);
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {/* <SwiperSlide>
          {" "}
          <div className="border-2 h-[400px] w-full ">
            {productList.map((item, i) => (
              <div
                className="border-2 border-red-400  flex flex-col justify-center items-center"
                key={i}
              >
                <div className="h-[28%]">
                  <Image src={item.image} alt="" width={100} height={200} />
                </div>
                <div className="h-[28%]">
                  <Image src={item.image} alt="" width={100} height={200} />
                </div>
                <div className="h-[30%]">
                  <Image src={item.image} alt="" width={100} height={200} />
                </div>
              </div>
            ))}
          </div>
        </SwiperSlide> */}
      </Swiper>
    </>
  );
};

export default SidebarSlider;
