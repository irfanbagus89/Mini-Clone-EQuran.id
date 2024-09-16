import React, { useState } from "react";
import { CiStar } from "react-icons/ci";
import { replace, useNavigate, useParams } from "react-router-dom";

function CardList({ data, isLoading }) {
  const {id} = useParams()
  const navigate = useNavigate()

  const [selectid, setSelectId] = useState(parseInt(id) || 1)

  const handleSelectId = (id) => {
    setSelectId(id)
    navigate(`/surah/${id}`,{replace:true})
  }
  return (
    <>
      {data.map((data) => {
        return (
          <div className={`w-full h-24 cursor-pointer rounded-xl flex ${selectid == data.nomor ? 'bg-pinkshadow' : 'bg-gray-100 hover:bg-pinkshadow text-black hover:text-pink'}`} key={data.nomor} onClick={() => handleSelectId(data.nomor)}>
            <div className="w-[30%] h-full relative p-3">
              <CiStar className="text-pinkungu w-14 h-14" />
              <h1
                className={`absolute top-[30px] font-semibold text-pinkungu text-sm ${
                  data.nomor < 10
                    ? "left-9"
                    : data.nomor < 100 && data.nomor >= 10
                    ? "left-8"
                    : "left-[30px]"
                }`}
              >
                {data.nomor}
              </h1>
            </div>
            <div className="w-[70%] h-full flex flex-col justify-between py-4 text-left">
              <h1 className={`font-bold text-xl ${selectid == data.nomor ? 'text-pink' : ''}`}>{data.namaLatin}</h1>
              <h2 className={`font-medium text-sm ${selectid == data.nomor ? 'text-pinkungu' : 'opacity-50 hover:opacity-100'}`}>{data.arti}</h2>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default CardList;
