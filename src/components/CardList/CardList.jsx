import React from "react";
import { CiStar } from "react-icons/ci";

function CardList({ data, isLoading }) {
  return (
    <>
      {data.map((data) => {
        console.log(data);
        return (
          <div className="w-full h-20 bg-pinkshadow rounded-xl flex">
            <div className="w-[30%] h-full relative p-3">
              <CiStar className="text-pinkungu w-14 h-14" />
              <h1
                className={`absolute top-[30px] font-semibold text-pinkungu text-sm ${
                  data.nomor < 10 ? "left-9" : data.nomor < 100 && data.nomor > 10 ? "left-8" : "left-7"
                }`}
              >
                {data.nomor}
              </h1>
            </div>
            <div className="w-[70%] h-full flex flex-col justify-between py-2 text-center">
              <h1 className="text-pink font-bold text-xl">{data.namaLatin}</h1>
              <h2 className="text-pinkungu font-medium text-sm">{data.arti}</h2>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default CardList;
