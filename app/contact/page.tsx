import React from "react";
import Map from "@/components/mainComponents/contactComponents/Map";
import Addres from "@/components/mainComponents/contactComponents/Address";
import NewsLatter from "@/components/mainComponents/contactComponents/Newslatter";
const page = () => {
  return (
    <>
      <Addres />
      <Map />
      <NewsLatter />
    </>
  );
};

export default page;
