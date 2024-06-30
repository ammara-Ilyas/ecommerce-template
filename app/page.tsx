import Image from "next/image";
// import HomeSlider from "@/components/slider/HomeSlider";
import Checkout from "@/components/mainComponents/checkoutComponents/Checkout";
import ShopWithUs from "@/components/mainComponents/aboutComponent/ShopWithUs";
export default function Home() {
  return (
    <div>
      {/* <HomeSlider /> */}
      <Checkout />
      <ShopWithUs />
    </div>
  );
}
