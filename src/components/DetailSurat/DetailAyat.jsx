import React from "react";

function DetailAyat({ data, isLoading }) {
  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="w-full h-[21rem] px-4 flex flex-col gap-8">
          {console.log(data)}

          {data ? (
            data.ayat.map((dat) => {

              return (
                <div
                  className="w-full font-semibold text-lg flex flex-col gap-4"
                  key={dat.nomor}
                >
                  {console.log(dat)}
                  <div className="w-full flex justify-between">
                    <div className="w-1/6">
                      <p>
                        {data.nomor}:{dat.nomorAyat}
                      </p>
                    </div>
                    <div className="w-auto">
                      <p>{dat.teksArab}</p>
                    </div>
                  </div>
                  <div className="w-full flex flex-col font-medium">
                    <p className="text-pinkungu">{dat.teksLatin}</p>
                    <p>{dat.teksIndonesia}</p>
                  </div>
                </div>
              );
            })
          ) : (
            <div></div>
          )}
        </div>
      )}
    </>
  );
}

export default DetailAyat;
