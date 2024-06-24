import React from "react";
interface button {
  text: string;
  tailwindClasees?: string;
}
const Button: React.FC<button> = ({
  text,
  tailwindClasees = "p-3 uppercase",
}) => {
  return (
    <button
      className={`bg-green-500 ${tailwindClasees} font-bold text-sm  text-white`}
    >
      {text}
    </button>
  );
};

export default Button;
