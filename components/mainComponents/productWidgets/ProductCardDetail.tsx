import React from "react";
import Link from "next/link";
import Star from "./Star";
////////////import type
import { Product } from "./Types";
interface ProductCardProps {
  product: Product;
}

const ProductCardDetail: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="py-5">
      <h5 className="text-lg font-bold text-gray-900 mt-1 h-[150px] ">
        <Link href={`/product/${product.id}`} className="capitalize text-xl ">
          {product.title}
        </Link>
      </h5>

      <div className="text-xl flex justify-between mx-4  font-semibold text-red-500 mt-2">
        <span className="text-red-500 ">${product.price}</span>
      </div>
      <div className="text-xl flex text-yellow-500 py-3 gap-1 justify-end">
        <Star rating={product.rating.rate} />
      </div>
    </div>
  );
};

export default ProductCardDetail;
