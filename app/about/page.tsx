import React from "react";
import Hero from "@/components/mainComponents/aboutComponent/Hero";
import AboutUs from "@/components/mainComponents/aboutComponent/AboutUs";
import NewsLatter from "@/components/mainComponents/contactComponents/Newslatter";
import ShopWithUs from "@/components/mainComponents/aboutComponent/ShopWithUs";
const page = () => {
  return (
    <>
      <Hero />
      <AboutUs />
      <ShopWithUs />
      <NewsLatter />
    </>
  );
};

export default page;
