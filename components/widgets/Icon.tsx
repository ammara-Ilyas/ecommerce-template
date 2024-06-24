import React from "react";
import { socialIcons } from "../layout/widgets/Data";
import Link from "next/link";
const Icon = () => {
  return (
    <ul className="flex items-center  gap-2 mt-5">
      {socialIcons.map((item: any, i: number) => (
        <li
          key={i}
          className="border-none bg-white p-3 rounded-full group hover:bg-green-500 duration-200"
        >
          <Link href={item.link}>
            <span className=" group-hover:rotate-180 group-hover:text-white duration-500">
              {item.icon}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Icon;
