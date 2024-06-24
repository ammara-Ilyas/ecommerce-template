import React from "react";
import Icon from "@/components/widgets/Icon";
import Button from "@/components/widgets/Button";
const FooterNewsletter = () => (
  <div className="  h-full flex flex-col gap-5 w-full p-7">
    <h6 className=" font-bold">Join Our Newsletter Now</h6>
    <p className="text-sm text-gray-600">
      Get E-mail updates about our latest shop and special offers.
    </p>
    <form action="#" className="   ">
      <input
        type="text"
        placeholder="Enter your mail"
        className=" p-3 border-none outline-none "
      />

      <Button text="Subscribe" />
    </form>
    <Icon />
  </div>
);

export default FooterNewsletter;
