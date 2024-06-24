import React from "react";
import { footerLink, footerInfo } from "../../widgets/Data";
import Link from "next/link";
const FooterLinks = () => (
  <div className=" flex flex-col  p-7 h-full gap-5">
    {" "}
    <h6 className="font-bold ">Useful Links</h6>
    <div className="flex h-full justify-between text-sm">
      <ul className="flex flex-col gap-4">
        {footerLink.map((item, i) => (
          <li key={i}>
            <Link href={item.link} className="capitalize">
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
      <ul className="flex flex-col gap-4 text-sm">
        {footerInfo.map((item, i) => (
          <li key={i}>
            <Link href={item.link} className="capitalize">
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default FooterLinks;
