import React from "react";
import Dropdown from "../Dropdown/Dropdown";
import DetailAyat from "./DetailAyat";

function DetailSurat({ detailSurat, isLoading }) {
  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="w-full">
          <div className="w-full h-40 bg-blue-600 rounded-xl"></div>
          <div className="w-full py-4 flex">
            <div className="w-1/2">
              <Dropdown
                title="Ayat"
                data={detailSurat ? detailSurat.ayat : []} 
                isLoading={isLoading}
              />
            </div>
            <div className="w-1/2">
              <Dropdown title="Qari" />
            </div>
          </div>
          <div className="w-full py-4 overflow-y-scroll">
            <DetailAyat data={detailSurat} isLoading={isLoading}/>
            
          </div>
        </div>
      )}
    </>
  );
}

export default DetailSurat;
