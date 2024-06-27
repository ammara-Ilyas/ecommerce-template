import React from "react";
import MessageForm from "./MessageForm";
import Icon from "@/components/widgets/Icon";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaAddressCard } from "react-icons/fa";

import Link from "next/link";
const Addres = () => {
  return (
    <div className="relative isolate bg-white w-[95%] mx-auto ">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        <div className="relative px-6 pb-10 pt-24 sm:pt-32 lg:static lg:px-8 lg:pt-32 lg:pb-16">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-[95%] ">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Contact Us
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Feel free to reach out to us for any inquiries or assistance.
              We're here to help!
            </p>
            <dl className="mt-10 space-y-4 text-base leading-7 text-gray-600">
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <MdOutlineMailOutline className="text-3xl" />
                </dt>
                <dd>contact@company.com</dd>{" "}
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <FaAddressCard className="text-3xl" />
                </dt>
                <dd>123 Main Street Country</dd>{" "}
              </div>
              <div className="mt-8">
                <dd>
                  {" "}
                  <Icon />
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <MessageForm />
      </div>
    </div>
  );
};

export default Addres;
