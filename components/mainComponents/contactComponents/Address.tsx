import React from "react";
import MessageForm from "./MessageForm";
import Icon from "@/components/widgets/Icon";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaAddressCard } from "react-icons/fa";

import Link from "next/link";
const Addres = () => {
  return (
    <div className="bg-white w-[95%] mx-auto border-2 flex gap-4">
      <div className="flex flex-col gap-10 p-10 py-28 ">
        <h2 className="text-4xl font-bold tracking-tight text-gray-900">
          Contact Us
        </h2>
        <p className="mt-6 text-lg w-[80%] text-gray-600">
          Feel free to reach out to us for any inquiries or assistance. We're
          here to help!
        </p>
        <div className="flex gap-9  text-gray-600">
          <span>
            <MdOutlineMailOutline className="text-3xl" />
          </span>
          <span className="text-2xl">contact@hr.com</span>
        </div>
        <div className="flex gap-9  text-gray-600">
          <span>
            <FaAddressCard className="text-2xl" />
          </span>
          <span className="text-2xl">123 Main Street Country</span>
        </div>
      </div>
      <div>
        <MessageForm />
      </div>
    </div>
  );
};

export default Addres;
