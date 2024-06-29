import React from "react";
import bg from "@/image/about/bg.jpg";

const Hero: React.FC = () => {
  return (
    <div
      className="font-extrabold	flex  items-center pt-5 flex-col gap-5 h-[65vh] justify-center my-7"
      style={{
        backgroundImage: ` linear-gradient(rgba(4, 9, 30, 0.2), rgba(4, 9, 30, 0.2)), url(${bg.src})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1 className=" text-[52px] text-white ">About Our Company</h1>
      <p className="text-white text-2xl">
        Awesome, clean & creative HTML5 Template
      </p>
    </div>
  );
};

export default Hero;
