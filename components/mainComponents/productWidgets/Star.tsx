import React from "react";
import { FaStar, FaRegStarHalfStroke } from "react-icons/fa6";
import { CiStar } from "react-icons/ci";

interface star {
  rating: number;
}
const Star: React.FC<star> = ({ rating }) => {
  // console.log("rate", rating);
  const startRating = Array.from({ length: 5 }, (_, index) => {
    let number = index + 0.5;
    return (
      <span key={index}>
        {rating >= index + 1 ? (
          <FaStar />
        ) : rating >= number ? (
          <FaRegStarHalfStroke />
        ) : (
          <CiStar />
        )}
      </span>
    );
  });
  return <>{startRating}</>;
};

export default Star;
