import React from "react";
const Color = () => {
  const color = [
    "fuchasia",
    "blue",
    "red",
    "green",
    "yellow",
    "purple",
    "orange",
    "aqua",
    "teal	",
  ];
  return (
    <>
      <h3 className="text-2xl font-semibold w-3/4 my-3 mt-7 mx-auto">Color</h3>

      <div className=" flex flex-wrap mx-auto gap-5 w-[80%]">
        {color.map((item, i) => (
          <div
            className="flex items-center gap-2 text-xl border-2 bg-si"
            key={i}
          >
            <div
              className={`h-[50px] w-[50px] rounded-full  border-[1px]  `}
              style={{ backgroundColor: `${item}` }}
            ></div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Color;
