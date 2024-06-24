import React from "react";
import Link from "next/link";
import Star from "./Star";
////////////import type
import { Product } from "./Types";
interface ProductCardProps {
  product: Product;
}

const SaleCardDetail: React.FC<ProductCardProps> = ({ product }) => {
  // console.log("product", product);
  return (
    <div className="py-5">
      <h5 className="text-lg font-bold text-gray-900 mt-1">
        <Link href={`/product/${product.id}`} className="capitalize text-xl">
          {product.category}
        </Link>
      </h5>
      <div className="text-xl font-semibold text-red-500 mt-2">
        ${product.price - Math.floor((product.price / 100) * 20)} <br />
        <span className="text-gray-500 line-through">${product.price}</span>
      </div>
      <div className="text-xl flex text-yellow-500 py-3 gap-1 justify-end">
        <Star rating={product.rating.rate} />
      </div>
    </div>
  );
};

export default SaleCardDetail;
