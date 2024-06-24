import React from "react";
import Color from "../productWidgets/color";
import PriceFilter from "../productWidgets/PriceFilter";
import CategoryButton from "../productWidgets/Category";

// import SidebarSlider from "@/components/slider/SidebarSlider";

function Sidebar() {
  return (
    <div className="w-11/12 h-auto sticky top-0 mt-16">
      <PriceFilter />
      <Color />
      <CategoryButton />
      {/* <SidebarSlider /> */}
    </div>
  );
}

export default Sidebar;
