"use client"

import { FaArrowCircleDown } from "react-icons/fa";

export default function SeeMore() {
  return (
    <div
      onClick={() => {
        window.location.hash = "enjoy"
    }}
      className="cursor-pointer absolute top-[90vh] md:flex hidden gap-2 items-center font-bold text-xl"
    >
      See More <FaArrowCircleDown className="text-2xl" />
    </div>
  );
}
