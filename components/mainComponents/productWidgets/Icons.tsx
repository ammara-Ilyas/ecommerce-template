import React from "react";
interface IconLinksProps {
  icon: React.ReactNode;
  tailwindClasses?: string;
}
const IconLinks: React.FC<IconLinksProps> = ({
  icon,
  tailwindClasses = "",
}) => {
  return (
    <div
      className={` ${tailwindClasses}  duration-500  origin-center p-3 rounded-full hover:bg-green-600 hover:text-white bg-white`}
    >
      {icon}
    </div>
  );
};

export default IconLinks;
