import React from "react";
import { IoFastFood } from "react-icons/io5";

export default function Loading() {
  return (
    <div className="w-screen h-screen fixed flex flex-col justify-center items-center top-0 bg-primary-500/80 backdrop-blur-[5px] z-[999]">
      <IoFastFood className="text-red-500 text-2xl animate-bounce" size={60} />
    </div>
  );
}
