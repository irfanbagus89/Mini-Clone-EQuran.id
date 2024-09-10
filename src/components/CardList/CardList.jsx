import React from "react";
import { CiStar } from "react-icons/ci";

function CardList({data, isLoading}) {
  return (
    <div className="w-full h-20 bg-pinkshadow rounded-xl flex">
      <div className="w-[30%] h-full relative p-3">
        <CiStar className="text-pinkungu w-14 h-14" />
        <h1 className="absolute top-7 left-9 font-semibold text-pinkungu">1</h1>
      </div>
      <div className="w-[70%] h-full flex flex-col justify-between py-2">
        <h1 className="text-pink font-bold text-xl">Alfatiha</h1>
        <h2 className="text-pinkungu font-medium text-sm">pembukaan</h2>
      </div>
    </div>
  );
}

export default CardList;
