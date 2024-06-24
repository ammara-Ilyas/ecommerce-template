import React from "react";
import MyProduct from "@/components/mainComponents/productComponent/MyProduct";
import SaleSlider from "@/components/slider/SalleSlider";
import Sidebar from "@/components/mainComponents/productComponent/Sidebar";
function page() {
  return (
    <div className="flex border-2">
      <div className="w-[25%] border-2 relative h-auto">
        <Sidebar />
      </div>
      <div className="w-[70%] border-2 mr-7">
        <SaleSlider />
        <MyProduct />
      </div>
    </div>
  );
}

export default page;
