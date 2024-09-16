import React from "react";

function Dropdown({ title, data, isLoading }) {
  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="w-full">
          <h1 className="text-lg font-semibold text-gray-500">{title}</h1>
          <select
            name=""
            id=""
            className="w-full h-10 rounded-lg px-2 text-lg font-semibold border-2 border-transparent focus:border-purple-400 focus:outline-none"
          >
            {data && data.length > 0 ? (
              data.map((dat, i) => (
                <option key={i} value={i}>
                  {dat.nomorAyat}
                </option>
              ))
            ) : (
              <option disabled></option>
            )}
          </select>
        </div>
      )}
    </>
  );
}

export default Dropdown;
